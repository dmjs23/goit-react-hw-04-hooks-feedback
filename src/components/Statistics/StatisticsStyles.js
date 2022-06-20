import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style-type: none;
  display: flex;
  align-content: center;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const StatisticsListItem = styled.li`
  margin-left: 10px;
  text-decoration: none;
  padding: 0.75rem 1.65rem;
  text-align: center;
  border: #bdbdbd solid 1px;
  border-radius: 25px;
  box-shadow: 0px 8px 10px -9px rgba(66, 68, 90, 1);
`;
