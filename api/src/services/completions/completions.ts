import { chatCompletion } from 'src/lib/openai'

export const ChatCompletion = ({ input }) => {
  return chatCompletion(input)
}
