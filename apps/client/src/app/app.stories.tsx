import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './app';

export default {
  component: App,
  title: 'App',
};

const Template = () => (
  <MemoryRouter initialEntries={['/rest']}>
    <App />
  </MemoryRouter>
);

export const primary = Template.bind({});
