import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const FeedbackButtonListItem = styled.button`
  padding: 5px;
  border: solid 1px #bdbdbd;
  border-radius: 25px;
  box-shadow: 0px 8px 10px -9px rgba(66, 68, 90, 1);
  margin-left: 10px;
  background-color: white;

  &:active {
    background-color: #335cff;
  }
`;
