import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
  return (
    <>
      <div>
        {props.post.map((post) => (
          <PostItem post={post} key={post.driverId} />
        ))}
      </div>
      {/* <Routes>
        <Route path="/driver" element={<Driver />} />
      </Routes> */}
    </>
  );
};

export default PostList;
