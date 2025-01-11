import { Config } from '@stencil/core';

// import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    // reactOutputTarget({ outDir: '../dist/react-wrapper/components' }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../dist',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      dir: '../dist',
    },
    {
      type: 'docs-readme',
      dir: '../dist',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir: '../dist',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
