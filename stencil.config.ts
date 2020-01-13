import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stenciljs-es5-bug-report',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
