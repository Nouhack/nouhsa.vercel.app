import React from "react";

const Post = ({ meta, children }: any) => {
    return (
        <div>
            <h1>{meta.title}</h1>
            <p>By : {meta.author}</p>
            <p className="post_date">{meta.date}</p>
            {children}
        </div>
    );
};

export default Post;
