import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_KEY,
  organization: 'org-i5rE8cAdISQ4NB4qFrXLKjeK',
})

export const findOrCreateAssistant = async (id) => {
  let assistant = await openai.beta.assistants.retrieve(id)

  if (!assistant) {
    const params: OpenAI.Beta.AssistantCreateParams = {
      name: 'Cover letter helper',
      instructions:
        'You are a helpful ChatGPT that generate cover letter based on resume, company description and job description.' +
        'During the process, please follow principles below: ' +
        '1. The personality is professional with normal words ' +
        '2. Specific how my experience aligns with the job description ' +
        '3. Explain one thing that attract me of the company',
      model: 'gpt-4-turbo',
    }

    assistant = await openai.beta.assistants.create(params)
  }

  return assistant.id
}

export const createThreadAndAddMessage = async (body) => {
  let thread
  if (body.threadId) {
    thread = await openai.beta.threads.retrieve(body.threadId)
  } else {
    thread = await openai.beta.threads.create()
  }
  openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: 'here is the updated job description: ' + body.aboutJob,
  })
  openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: 'here is the updated company description: ' + body.aboutCompany,
  })
  openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: 'here is my updated resume: ' + body.resume,
  })
  console.log('thread id: ' + thread.id)
  return thread.id
}

export const waitForThread = async (threadId, assistantId) => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  })

  const waitForRun = (run) => {
    return new Promise((resolve, reject) => {
      const id = setInterval(async () => {
        const status = (
          await openai.beta.threads.runs.retrieve(threadId, run.id)
        ).status
        console.log(status)
        if (status === 'completed') {
          clearInterval(id)
          resolve('completed')
        }
      }, 1000)
    })
  }

  return waitForRun(run)
}

export const listMessage = async (threadId) => {
  const message = await openai.beta.threads.messages.list(threadId)
  return message
}

export const chatCompletion = async (body) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful ChatGPT that generate cover letter based on resume, company description and job description.' +
          'During the process, please follow principles below: ' +
          '1. The personality is professional with normal words ' +
          '2. Specific how my experience aligns with the job description ' +
          '3. Explain one thing that attract me of the company',
      },
      {
        role: 'user',
        content: 'here is the job describtion: ' + body.aboutJob,
      },
      {
        role: 'user',
        content: 'here is the company describtion: ' + body.aboutCompany,
      },
      { role: 'user', content: 'here is my resume: ' + body.resume },
    ],
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: 1.2,
  }

  const stream = await openai.chat.completions.create(params)
  return stream
}
