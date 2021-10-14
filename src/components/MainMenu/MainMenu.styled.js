import styled from "@emotion/styled";

export const Header = styled.header`
  margin-bottom: 250px;
`;

export const Title = styled.h1`
  color: #121086;
  font-size: 50px;
  line-height: 120%;
  font-weight: 500;

  :hover,
  :focus {
    color: #b4a70b;
  }
`;

export const Navbar = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  box-sizing: border-box;
  outline: currentcolor none medium;
  width: 1140px;
  height: 100px;
  margin: 0px;
  justify-content: space-around;
  align-items: center;
  background: rgb(102, 184, 108);
  background: radial-gradient(
    circle,
    rgba(102, 184, 108, 1) 0%,
    rgba(57, 103, 141, 1) 50%,
    rgba(86, 156, 120, 1) 73%,
    rgba(26, 46, 164, 1) 100%
  );
  /* background: #082bff none repeat scroll 0% 0%; */
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

export const MenuLink = styled.a`
  position: relative;
  display: inline;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  margin-left: 250px;
  margin-right: auto;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #121086;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover,
  :focus {
    color: #b4a70b;
    background-position: 90% 50%;
  }
`;

export const NavLink = styled.a`
  &.link {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #121086;
    font-size: 18px;
  }

  &.activeLink {
    composes: link;
    color: #008a73;
    font-weight: bolder;
  }
`;
