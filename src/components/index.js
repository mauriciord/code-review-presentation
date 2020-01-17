import React from 'react';
import styled from 'styled-components'
import { space, width } from 'styled-system';

export const Root = styled.div([], {
  width: '80vw',
  height: '70vh',
});

export const Split = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  align-self: center;
  & > * {
    flex: 1;
  }
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  ${width}
`;

export const Text = styled.p`
  color: slategray;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`;

export const Question = styled.p`
  color: black;
  font-size: 2.4rem;
  margin: 0.8em 0 0.3em 0;
  padding: 0;
`
