import React from 'react';
import styled from 'styled-components'
import { Appear } from 'mdx-deck'
import { space, width } from 'styled-system';
import { Root, Split } from '../components';

import { defaultTheme as theme } from '../theme';

const Img = styled.img`
  ${width}
  padding: 10px;
`;

export const Before = () => (
  <Root>
    <Split>
      <Img
        src="https://images-na.ssl-images-amazon.com/images/I/51Q4yWLfH1L._SX345_BO1,204,203,200_.jpg"
        alt="vin moraes"
      />
      <Img
        src="https://images-na.ssl-images-amazon.com/images/I/51Mh9bErRwL.jpg"
        alt="fel neto"
      />
    </Split>
  </Root>
);
