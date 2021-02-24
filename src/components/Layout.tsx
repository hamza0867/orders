import * as React from "react";

import styled from "styled-components";
import SideMenu from "./SideMenu";

const Wrapper = styled.div`
  background: #f3f6f9;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  .body {
    flex: 3;
    display: flex;
    flex-direction: column;
    background: grey;
    margin-left: 320px;
    width: 1600px;
    height: 98px;
    padding: 0 12px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <SideMenu elements={[{ name: "Orders", path: "/orders" }]} />
      <div className="body">
        <div>
          <Header>Icon1 Icon2 UserInfo</Header>
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

export default Layout;

