export const schema = gql`
  type Choice {
    delta: Delta
  }
  type Delta {
    content: String
    tool_calls: [ToolCall]
    role: ROLE
  }
  type ToolCall {
    function: Function
  }
  type Function {
    name: String
    arguments: String
  }
  type CompletionChunk {
    choices: [Choice]!
  }
  enum ROLE {
    assistant
    user
  }

  type Query {
    ChatCompletion(input: ChatCompletionInput): [CompletionChunk]! @skipAuth
  }

  input ChatCompletionInput {
    resume: String!
    aboutCompany: String!
    aboutJob: String!
  }
`
