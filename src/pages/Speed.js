import React from 'react';
import styled from 'styled-components'
import { Img } from '../components'
import sonic from '../img/sonic.jpg'
import { Root, Center } from '../components'

const List = styled.ul`
  text-align: left;
  list-style-type: decimal;
`;
const Item = styled.li`
  color: black;
  margin: 4rem 0;
`;

const Text = styled.p`
  color: slategray;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`;

const Question = styled.p`
  color: black;
  font-size: 2.4rem;
  margin: 0.8em 0 0.3em 0;
  padding: 0;
`

export const Cover = () => (
  <Root>
    <Center>
      <Img src={sonic} width={920} />
    </Center>
  </Root>
)

const Speed = () => (
  <Root>
      <Question>Why Should Code Reviews Be Fast?</Question>
      <Text>Instead of giving speed to an individual developer, we should give speed to team, to build a product
        with speed</Text>
      <Question>How Fast Should Code Reviews Be?</Question>
      <Text>If you are not in the middle of a focused task, <b>you should do a code review shortly after it comes in.</b></Text>
      <Question>Speed vs. Interruption</Question>
      <Text>Interrupting yourself while coding is actually more expensive to the team than making another developer wait a bit for a code review.</Text>
  </Root>
);

export default Speed;
