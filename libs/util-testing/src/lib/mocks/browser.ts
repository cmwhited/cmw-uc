import { setupWorker, SetupWorkerApi } from 'msw';

import { handlers } from './handlers';

// this configures a broswer service work with our mocked request handlers
export const worker: SetupWorkerApi = setupWorker(...handlers);
