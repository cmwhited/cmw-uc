import React from 'react';
import { addDecorator } from '@storybook/react';
// my custom material-ui ThemeProvider/theme
import { AppThemeProvider } from '../src/theme';

// wrap all of our stories in our AppThemeProvider
addDecorator((story) => <AppThemeProvider>{story()}</AppThemeProvider>);

// Storybook executes this module in both bootstap phase (Node)
// and a story's runtime (browser). However, cannot call `setupWorker`
// in Node environment, so need to check if we're in a browser.
if (typeof global.process === 'undefined') {
  // note: we must use relative imports here
  const { worker } = require('../../../libs/util-testing/src/lib/mocks/browser');
  // Start the mocking when each story is loaded.
  // Repetitive calls to the `.start()` method do not register a new worker,
  // but check whether there's an existing once, reusing it, if so.
  worker.start();
}
