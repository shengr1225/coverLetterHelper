import { useState } from 'react'

import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Textarea,
  HStack,
  Button,
  useToast,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Step1 from 'src/components/Step1'
import Step2 from 'src/components/Step2'

const HomePage = () => {
  const [aboutJob, setAboutJob] = useState('')
  const [aboutCompany, setAboutCompany] = useState('')
  const [resume, setResume] = useState('')
  const [cv, setCV] = useState('')
  const toast = useToast()

  function readChunks(reader) {
    return {
      async *[Symbol.asyncIterator]() {
        let readResult = await reader.read()
        while (!readResult.done) {
          yield readResult.value
          readResult = await reader.read()
        }
      },
    }
  }

  const onGenerate = async () => {
    setCV('')
    if (!resume) {
      return toast({
        title: 'Info Needed.',
        description: 'You need to upload or paste your resume above',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else if (!aboutJob) {
      return toast({
        title: 'Info Needed.',
        description: 'You need to paste the job descrption above',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else if (!aboutCompany) {
      return toast({
        title: 'Info Needed.',
        description: 'You need to paste the company descrption above',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }

    fetch('/.redwood/functions/graphql', {
      method: 'POST',
      headers: {
        Accept: 'multipart/mixed',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query:
          'query getChatCompletion($input: ChatCompletionInput!){ ... on Query{ ChatCompletion(input: $input) @stream{ choices{ delta{ content role } } } } }',
        variables: {
          input: {
            resume: resume,
            aboutJob: aboutJob,
            aboutCompany: aboutCompany,
          },
        },
      }),
    }).then(async (res) => {
      const reader = res.body.getReader()
      const chunks = readChunks(reader)
      let result = ''
      for await (const chunk of chunks) {
        result += parseChunk(Buffer.from(chunk).toString('utf-8'))
        setCV(result)
      }
    })

    const parseChunk = (chunk) => {
      let result = ''
      console.log(chunk)
      const subChunks = chunk.split('---')
      for (const key in subChunks) {
        if (Object.prototype.hasOwnProperty.call(subChunks, key)) {
          const e = subChunks[key]
          const d = e.split(/\r\n|\r|\n/g)
          if (d[4]) {
            const data = JSON.parse(d[4])
            if (Object.prototype.hasOwnProperty.call(data, 'incremental')) {
              for (let i = 0; i < data.incremental.length; i++) {
                const item = data.incremental[i].items[0]
                if (item.choices[0].delta.role !== 'assistant') {
                  const c = item.choices[0].delta.content
                  if (c) {
                    result += c
                  }
                }
              }
            }
          }
        }
      }
      return result
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* <OPeachHeader /> */}

      <Grid
        templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        gap={10}
        h="full"
        px={[4, 4, 12, 48]}
      >
        <GridItem w="100%">
          <Step1 onEnterResume={setResume}></Step1>
          <Step2
            setAboutJob={setAboutJob}
            setAboutCompany={setAboutCompany}
          ></Step2>
        </GridItem>
        <GridItem w="100%">
          <Box py="8" h="100%">
            <HStack justifyContent="space-between">
              <Heading color="text" my="6">
                Cover Letter
              </Heading>
              <Button color="action" variant="solid" onClick={onGenerate}>
                <CheckIcon mr="2" />
                Generate
              </Button>
            </HStack>

            <Textarea bg="textarea" h="100%" maxH="500px" value={cv} />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
