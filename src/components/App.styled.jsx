import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin: 3px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  transition: color 0.3s ease, background-color 0.3s ease;

  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover {
    color: white;
    background-color: #ff591d;
  }
  @media (max-width: 767px) {
    padding: 6px 8px;
  }
`;
