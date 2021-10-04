import base from './jest.config.base';

export default {
  ...base,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/packages/ui'],
};
