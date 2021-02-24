import * as React from "react";

import styled from "styled-components";

const SideMenuWrapper = styled.div`
  width: 320px;
  height: 98;
  position: fixed;
  top: 0;
  left: 0;
  right: 83.33;
  bottom: 90.93;
  .menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    flex: 1;
    background: #aaa;
    height: 100vh;
    margin: 0;
    li {
      list-style: none;
    }
  }
`;

type SideMenuElementType = {
  name: string;
  path: string;
};

interface SideMenuInterface {
  elements: Array<SideMenuElementType>;
}

const SideMenu: React.FC<SideMenuInterface> = ({ elements }) => {
  return (
    <SideMenuWrapper>
      <div className="menu-header">
        <span>Icon InstaBox</span>
      </div>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
    </SideMenuWrapper>
  );
};

export default SideMenu;

