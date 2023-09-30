/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * World Time API
 * A simple API to get the current time based on a request with a timezone.
 * OpenAPI spec version: 20210108
 */
import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const getGetTimezoneAreaMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.random.word());

export const getGetTimezoneAreaTxtMock = () => faker.random.word();

export const getGetTimezoneAreaLocationMock = () => ({
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
});

export const getGetTimezoneAreaLocationTxtMock = () => faker.random.word();

export const getGetTimezoneAreaLocationRegionMock = () => ({
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
});

export const getGetTimezoneAreaLocationRegionTxtMock = () =>
  faker.random.word();

export const getGetIpMock = () => ({
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
});

export const getGetIpTxtMock = () => faker.random.word();

export const getGetIpIpv4Mock = () => ({
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
});

export const getGetIpIpv4TxtMock = () => faker.random.word();

export const getDefaultMSW = () => [
  rest.get('*/timezone', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/timezone.txt', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/timezone/:area', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetTimezoneAreaMock()),
    );
  }),
  rest.get('*/timezone/:area.txt', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.text(getGetTimezoneAreaTxtMock()),
    );
  }),
  rest.get('*/timezone/:area/:location', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetTimezoneAreaLocationMock()),
    );
  }),
  rest.get('*/timezone/:area/:location.txt', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.text(getGetTimezoneAreaLocationTxtMock()),
    );
  }),
  rest.get('*/timezone/:area/:location/:region', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetTimezoneAreaLocationRegionMock()),
    );
  }),
  rest.get('*/timezone/:area/:location/:region.txt', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.text(getGetTimezoneAreaLocationRegionTxtMock()),
    );
  }),
  rest.get('*/ip', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetIpMock()),
    );
  }),
  rest.get('*/ip.txt', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.text(getGetIpTxtMock()),
    );
  }),
  rest.get('*/ip/:ipv4', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetIpIpv4Mock()),
    );
  }),
  rest.get('*/ip/:ipv4.txt', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.text(getGetIpIpv4TxtMock()),
    );
  }),
];
