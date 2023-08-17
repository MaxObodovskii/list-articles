import React, { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";

import { IComment, IPost } from "../../types/types";

import { useFetching } from "../../hooks/useFetching";

import ArticleService from "../../API/ArticleService";

import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./PostIdPage.module.css";

import { Alert, Button, Card, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

type PostIdPageParams = {
    id: string;
}

const PostIdPage: FC = () => {
    const navigate = useNavigate();
    const params = useParams<PostIdPageParams>();

    const parsedId = typeof params.id === 'string' ? parseInt(params.id) : null;

    const [post, setPost] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    const [fetchPostById, isPostIdLoading, postIdError] = useFetching(async (id: number) => {
        const response = await ArticleService.getArticleById(id);

        if (!response.data.data.length) {
            navigate('/error');
        }

        setPost(response.data.data);
    });

    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id: number) => {
        const response = await ArticleService.getCommentsByPostId(id);

        setComments(response.data.data);
    });

    useEffect(() => {
        if (typeof parsedId === 'number') {
            fetchPostById(parsedId);
            fetchCommentsById(parsedId);
        }
    }, []);

    const isComment = comments.length ? 'Comments:' : 'There are not comments in this article';

    return (
        <div className={classes.postId}>
            <Helmet>
                <meta
                    name="description"
                    content="The article"/>
                <title>The article</title>
            </Helmet>

            <Button
                className={classes.myBtn}
                type="primary"
                icon={<LeftOutlined/>}
                onClick={ () => navigate('/') }
            >
                Back
            </Button>

            {
                isPostIdLoading
                    ?
                    <Spinner/>
                    :
                    post.map(p =>
                        <Card
                            key={p.id}
                            title={p.title}
                            style={{ maxWidth: 800 }}
                        >
                            <Text>{p.body}</Text>
                        </Card>
                    )
            }

            {
                postIdError
                &&
                <div className={classes.blockWithError}>
                    <Alert
                        message="Error: something went wrong with the description of this article"
                        description={`${postIdError}`}
                        type="error"
                        showIcon
                    />
                </div>
            }

            {
                isCommentsLoading
                    ?
                    <Spinner/>
                    :
                    <>
                        {<Title level={2}>{isComment}</Title>}

                        {comments.map(comm =>
                        <Card
                            style={{ maxWidth: 800 }}
                            key={comm.id}
                        >
                            <Title level={3}>{comm.name}</Title>
                            <Text>{comm.body}</Text>
                        </Card>
                        )}
                    </>
            }

            {
                commentsError
                &&
                <div className={classes.blockWithError}>
                    <Alert
                        message="Error: something went wrong with the comments"
                        description={`${postIdError}`}
                        type="error"
                        showIcon
                    />
                </div>
            }
        </div>
    );
};

export default PostIdPage;
