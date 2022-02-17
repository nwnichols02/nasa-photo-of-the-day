import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondColor};
`;

const Header = (props) => {
  const { head, close } = props;

  return (
    <StyledHeader className="header">
      <h1>NASA Photo Of The Day</h1>
      <p>At NASA, we make Air and Space available for everyone.</p>
    </StyledHeader>
  );
};

export default Header;
