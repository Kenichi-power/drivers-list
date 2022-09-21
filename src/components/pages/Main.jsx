import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header, Footer, Avatar, Title, Descr, Range } from "..";
import PostItem from "../PostItem";
import axios from "axios";
import { object } from "prop-types";
import PostService from "../../API/PostService";
import PostList from "../PostList";

const WrMainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? "center" : "start")};
  margin: 2rem 0;
`;

const Sidebar = styled.div`
  flex: 1rem;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;

const Main = () => {
  const [f1Drivers, setF1Drivers] = useState([]);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setF1Drivers(posts);
    // const dt = response.data;
    // console.log();
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="ui-wrMainer">
      <Header />
      <div className="ui-content-wrMainer">
        <div className="ui-container">
          <Row itemsCenter>
            <Content>
              {/* {f1Drivers.map((post) => (
                <PostItem post={post} key={post.driverId} />
              ))} */}
              <PostList post={f1Drivers} />
            </Content>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
