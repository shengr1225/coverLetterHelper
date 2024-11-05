import type { Completion } from '@prisma/client'

import {
  completions,
  completion,
  createCompletion,
  updateCompletion,
  deleteCompletion,
} from './completions'
import type { StandardScenario } from './completions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('completions', () => {
  scenario('returns all completions', async (scenario: StandardScenario) => {
    const result = await completions()

    expect(result.length).toEqual(Object.keys(scenario.completion).length)
  })

  scenario(
    'returns a single completion',
    async (scenario: StandardScenario) => {
      const result = await completion({ id: scenario.completion.one.id })

      expect(result).toEqual(scenario.completion.one)
    }
  )

  scenario('creates a completion', async () => {
    const result = await createCompletion({
      input: { resume: 'String', aboutCompany: 'String', aboutJob: 'String' },
    })

    expect(result.resume).toEqual('String')
    expect(result.aboutCompany).toEqual('String')
    expect(result.aboutJob).toEqual('String')
  })

  scenario('updates a completion', async (scenario: StandardScenario) => {
    const original = (await completion({
      id: scenario.completion.one.id,
    })) as Completion
    const result = await updateCompletion({
      id: original.id,
      input: { resume: 'String2' },
    })

    expect(result.resume).toEqual('String2')
  })

  scenario('deletes a completion', async (scenario: StandardScenario) => {
    const original = (await deleteCompletion({
      id: scenario.completion.one.id,
    })) as Completion
    const result = await completion({ id: original.id })

    expect(result).toEqual(null)
  })
})
