import React, { FC } from 'react';

import { useNavigate } from "react-router-dom";

import { IPost } from "../../types/types";

import classes from "./PostItem.module.css";

import { Button, Card, Typography } from "antd";

const { Text } = Typography;

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
    const navigate = useNavigate();

    return (
        <Card
            title={post.title}
            extra={<Button type="link" onClick={ () => navigate(`/posts/${post.id}`)}>More</Button>}
            style={{ maxWidth: 640 }}
            className={classes.postItem}
        >
            <Text strong>{post.id}</Text>. {post.body}
        </Card>
    );
};

export default PostItem;
