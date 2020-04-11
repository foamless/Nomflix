import React from "react";
// withRouter 다른 컴포넌트를 감싸는 컴포넌트 . Router에 대한 정보를 줌
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

// 각각 style components를 직접 생성
// CSS처럼 활용

const Header = styled.header`
color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

// SC에 props를 전달하여 값을 지정할 수 있음.
const Item = styled.li`
width: 80px;
height: 50px;
text-align: center;
border-bottom: 3px solid
  ${props => (props.current ? "#3498db" : "transparent")};
transition: border-bottom 0.5s ease-in-out;
`;

// a tag를 안쓰고 react router dom 라이브러리에서 가져온 Link에 style을 먹히고 싶을 때.
const SLink = styled(Link)`
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
// className은 랜덤하게 배정
// cuurnt 값에 따라 스타일 적용
<Header>
    <List>
        <Item current={pathname === "/"}>
            <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/TV"}>
            <SLink to="/TV">TV</SLink>
        </Item>
        <Item current={pathname === "/Search"}>
            <SLink to="/Search">Search</SLink>
        </Item>
    </List>
</Header>
));