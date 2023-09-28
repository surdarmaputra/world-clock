import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: { target: './api/spec.yaml' },
    output: {
      client: 'swr',
      mock: false,
      mode: 'tags-split',
      prettier: true,
      schemas: 'api/generated/models',
      target: 'api/generated/services',
      override: {
        mutator: {
          path: './api/utils/request.ts',
          name: 'request',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'yarn lint --fix api',
    },
  },
});
