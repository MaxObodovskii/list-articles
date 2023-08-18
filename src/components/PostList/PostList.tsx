import React, { FC } from 'react';

import { IPost } from "../../types/types";

import PostItem from "../PostItem/PostItem";

import classes from "./PostList.module.css";

import { Typography } from 'antd';

const { Title } = Typography;

interface PostListProps {
    posts: IPost[];
    title: string;
}

const PostList: FC<PostListProps> = ({ posts, title }) => {

    return (
        <div className={classes.list}>
            <Title level={2}>
                {title}
            </Title>

            {
                posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )
            }
        </div>
    );
};

export default PostList;
