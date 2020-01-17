import React from 'react';
import styled from 'styled-components'
import { Appear } from 'mdx-deck'
import { Img, Question } from '../components'

import goodCommentImg from '../img/cl-comments/good-comment.png'
import writingImg from '../img/writing-bible.jpg'

export const Root = styled.div([], {
  width: '70vw',
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
const Text = styled.p`
  color: slategray;
  font-size: 1.6rem;
  margin: 0;
`;

export const Cover = () => (
  <Root>
   <Img src={writingImg} width={980} />
  </Root>
)

export const WritingCommentsCourtesy = () => (
  <Root>
    <div>
      <Question>Courtesy</Question>
      <Text>Be sure that you are always making comments about the code and never making comments about the developer</Text>
    </div>
    <Appear>
      <div>
        <h5>Good</h5>
        <Img src={goodCommentImg} width={750} />
      </div>
    </Appear>
  </Root>
);

export const WritingCommentsRest = () => (
  <Root>
    <div>
      <Question>Explain Why</Question>
      <Text>Helps the developer understand why you are making your comment.</Text>
    </div>
    <Appear>
      <div>
        <Question>Giving Guidance</Question>
        <Text>
          In general, you should strike an appropriate balance between pointing out problems and providing direct
            guidance. You are not required to do a detailed design of a solution or write code for the developer.
        </Text>
      </div>
      <div>
        <Question>Accepting Explanations</Question>
        <Text>
          Ask a developer to explain a piece of code that you don’t understand.
        </Text>
        <Text>
          <b>Explanations written only in the code review tool are not helpful to future code readers.</b>
        </Text>
      </div>
    </Appear>
  </Root>
);
