import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  display: flex;
  background-color: var(--color-brown-dark);
  height: 50px;
  box-shadow: .2rem 0 1rem .4rem rgba(0, 0, 0, .15);
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const StyledNavItem = styled.li`
  padding: .6rem;
  font-size: 1.8rem;
  margin: 0 .7rem;
  border-radius: .2rem;
  &.active {
    background-color: var(--color-light);
    color: var(--color-text-dark);
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <div className="frow-container">
        <div className="frow gutters">
          <StyledH1 className="col-xs-1-2">
            Meet Up
          </StyledH1>
          <StyledNavList>
            <a href="/">
              <StyledNavItem className="active">
                Booking
              </StyledNavItem>
            </a>
            <a href="/">
              <StyledNavItem>
                Orders
              </StyledNavItem>
            </a>
          </StyledNavList>
        </div>
      </div>
    </StyledNav>
  );
}
