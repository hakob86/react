import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGwdk4u8vdc6kpgEsVJzBPLfTxUS5vwYgow&usqp=CAU" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
