import React, { FC, useEffect, useState } from 'react';

import { Helmet } from "react-helmet";

import ArticleService from "../../API/ArticleService";

import { useFetching } from "../../hooks/useFetching";

import { IPost } from "../../types/types";

import PostList from "../../components/PostList/PostList";

import Spinner from "../../components/UI/Spinner/Spinner";
import MyPagination from "../../components/UI/Pagination/Pagination";

import { Alert } from "antd";

import classes from "./Posts.module.css";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const [page, setPage] = useState<number>(() => {
        const savedPage = localStorage.getItem('PageNumber');

        return savedPage ? parseInt(savedPage) : 1;
    });

    const [totalPages, setTotalPages] = useState<number>(0);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (page: number) => {
        const response = await ArticleService.getAllPosts(page);

        setPosts(response.data.data);

        setTotalPages(response.data.meta.pagination.pages);
    });

    useEffect(() => {
        if (page > 0) {
            fetchPosts(page);
        }
    }, [page]);

    const changePage = (page: number) => {
        setPage(page);

        localStorage.setItem('PageNumber', page.toString());
    }

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="List of articles"/>
                <title>List of articles</title>
            </Helmet>

            {
                isPostsLoading
                    ? <Spinner/>
                    : <>
                        {
                            postError
                                ?
                                <div className={classes.blockWithError}>
                                    <Alert
                                        message="Error: something went wrong with the list of articles"
                                        description={`${postError}`}
                                        type="error"
                                        showIcon
                                    />
                                </div>
                                :
                                <>
                                    <PostList
                                        posts={posts}
                                        title='ARTICLES LIST'
                                    />

                                    <MyPagination
                                        totalPages={totalPages}
                                        page={page}
                                        changePage={changePage}
                                    />
                                </>
                        }
                    </>
            }
        </div>
    );
};

export default Posts;
