import React, { useState } from "react";
import Posts from "./Posts";
import SocialFeed from "./SocialFeed";
function Wrapper({}) {
  const [reload, setReload] = useState(false);
  return (
    <div>
      <SocialFeed setReload={setReload} />
      <Posts reload={reload} setReload={setReload} />
    </div>
  );
}

export default Wrapper;
