import type { Prisma, Completion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompletionCreateArgs>({
  completion: {
    one: {
      data: { resume: 'String', aboutCompany: 'String', aboutJob: 'String' },
    },
    two: {
      data: { resume: 'String', aboutCompany: 'String', aboutJob: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<Completion, 'completion'>
