import React from 'react';

import { environment } from '../../environments/environment';
import CharactersListRest, { CharactersListRestProps } from './characters-list-rest';

const characterUrls = {
  default: `${environment.rickAndMortyRestApiBaseUrl}/character`,
  largeList: `${environment.rickAndMortyRestApiBaseUrl}/character/large-list`,
  smallList: `${environment.rickAndMortyRestApiBaseUrl}/character/small-list`,
  error: `${environment.rickAndMortyRestApiBaseUrl}/character/error`,
};

export default {
  component: CharactersListRest,
  title: 'Components / Characters List / REST',
  argTypes: {
    url: {
      control: {
        type: 'select',
        options: {
          'Default (Passthrough)': characterUrls.default,
          'Large Character List': characterUrls.largeList,
          'Small Character List': characterUrls.smallList,
          Error: characterUrls.error,
        },
      },
    },
  },
};

const Template = (args: CharactersListRestProps) => <CharactersListRest {...args} />;

export const CharactersListRestDemo = Template.bind({});
CharactersListRestDemo.args = {
  url: characterUrls.default,
};
