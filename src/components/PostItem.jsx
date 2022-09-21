import React from "react";
import styled from "styled-components";
import Title from "./UI/title/Title";
import Descr from "./UI/descr/Descr";
import { Routes, Route, Link } from "react-router-dom";
import Driver from "./pages/Driver";

const WrMainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding-left: 50px;
  /* padding: 3rem 2rem; */
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`;
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? "center" : "start")};
  margin: 15px 0;
  padding-top: 20px;
  padding-left: 15px;
`;

const Sidebar = styled.div`
  flex: 4;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;
const MyButton = styled.a`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  border: 1px solid none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 5px 7px 10px 4px #bcbbbb;
  /* margin-left: 100px; */
  color: black;
`;

const PostItem = (props) => {
  return (
    <>
      <WrMainer>
        <Row>
          <Sidebar>
            <Title size="5">Driver Name</Title>
            <Title>{props.post.givenName + " " + props.post.familyName}</Title>
          </Sidebar>
          <Content>
            <Title size="5">Date of Birth</Title>
            <Title size="2">{props.post.dateOfBirth}</Title>
          </Content>
          <Content>
            <Title size="5">Nationality</Title>

            <Title size="2">{props.post.nationality}</Title>
          </Content>
          <Content>
            <Title size="5">
              <MyButton
                href={props.post.url}
                className="ui-link"
                rel="noreferrer"
              >
                More
              </MyButton>
            </Title>
          </Content>
        </Row>
      </WrMainer>
      <Routes>
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </>
  );
};

export default PostItem;
