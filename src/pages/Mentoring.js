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

const Mentoring = () => (
  <Root>
    <Center>
      <Explanation>
        Code review is a good time between exchanging knowledge. It is where developers something new about a language,
        a framework, or general software design principles. Sharing knowledge is part of improving the code health of a
        system over time.
        Always try to leave comments helping or congratulating the other team members work, even because bad comments
        generate bad environments.
      </Explanation>
      <Img
        src="https://p47.f4.n0.cdn.getcloudapp.com/items/Jru7AmRD/AAAABceL_FxRrEg1Jm2LyiYugCJwBkJ2v4GmCBWQ_JNLBXCu1tpO1CMoOxGk9R74PCzrCR0FLIrjdgZlyIHnZEuiHArY6C9G.jpg?v=911e489d5257850f7505cc27b892afa1"
        alt="mountain devs"
        width="63%"
      />
    </Center>
  </Root>
);

export default Mentoring;
