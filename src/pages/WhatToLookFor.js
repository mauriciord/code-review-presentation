import React from 'react';
import styled from 'styled-components'
import { Appear } from 'mdx-deck'
import { space, width } from 'styled-system';
import { Root, Center, Img } from '../components';

import { defaultTheme as theme } from '../theme';

const Explanation = styled.span`
  font-size: 20px;
  color: black;
  margin: 10px 0;
`;

const List = styled.ul`
  text-align: left;
`;
const Item = styled.li`
  color: black;
  margin: 3px 0;
  font-size: 0.7em;
`;

const WhatToLookFor = () => (
  <Root>
    <List>
      <Appear>
        <Item>The code is well-designed.</Item>
        <Item>Code has appropriate unit tests</Item>
        <Item>Tests are well-designed.</Item>
        <Item>The code conforms to our style guides.</Item>
        <Item>Any UI changes are sensible and look good.</Item>
        <Item>The developer isn’t implementing things they might need in the future but don’t know they need now.</Item>
        <Item>The developer used clear names for everything.</Item>
        <Item>Any parallel programming is done safely.</Item>
        <Item>The code isn’t more complex than it needs to be.</Item>
        <Item>Code is appropriately documented.</Item>
        <Item>The functionality is good for the users of the code.</Item>
        <Item>Comments are clear and useful, and mostly explain why instead of what.</Item>
      </Appear>
    </List>
  </Root>
);

export default WhatToLookFor;
