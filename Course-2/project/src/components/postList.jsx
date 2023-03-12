import React from "react";
import PostItem from "./item";
const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map(post =>
                <PostItem post={post} />
            )}
        </div>
    );
};
export default PostList;