import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: { target: './api/spec.yaml' },
    output: {
      client: 'swr',
      mock: true,
      mode: 'tags-split',
      prettier: true,
      schemas: 'api/generated/models',
      target: 'api/generated/services',
      override: {
        mock: {
          properties: {
            abbreviation: 'BST',
            client_ip: '110.137.157.1',
            datetime: '2023-09-30T09:34:10.911408+01:00',
            day_of_week: 6,
            day_of_year: 273,
            dst: true,
            dst_from: '2023-03-26T01:00:00+00:00',
            dst_offset: 3600,
            dst_until: '2023-10-29T01:00:00+00:00',
            raw_offset: 0,
            timezone: 'Europe/London',
            unixtime: 1696062850,
            utc_datetime: '2023-09-30T08:34:10.911408+00:00',
            utc_offset: '+01:00',
            week_number: 39,
          },
        },
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
