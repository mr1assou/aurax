import React, { useState } from "react";
import Posts from "./Posts";
import SocialFeed from "./SocialFeed";
import Post from "./Post";
function Wrapper() {
  const [reload, setReload] = useState(false);
  return (
    <div>
      {/* <SocialFeed setReload={setReload} /> */}
      <Posts reload={reload} />
    </div>
  );
}

export default Wrapper;
