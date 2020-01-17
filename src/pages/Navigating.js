import React from 'react';
import styled from 'styled-components'
import { Appear } from 'mdx-deck'
import { space, width } from 'styled-system';

import { defaultTheme as theme } from '../theme';

export const Root = styled.div([], {
  width: '80vw',
  height: '70vh',
});

const List = styled.ul`
  text-align: left;
  list-style-type: decimal;
`;
const Item = styled.li`
  color: black;
  margin: 4rem 0;
`;

const Navigating = () => (
  <Root>
    <List>
      <Appear>
        <Item>Full view of the Pull Request.</Item>
        <Item>
          Find the file or files that are the “main” part or
          ask the developer what you should look at first
        </Item>
        <Item>
          Look the rest of the sequence or try to read the tests before
         read the main code
        </Item>
      </Appear>
    </List>
  </Root>
);

export default Navigating;
