import React from "react";

import { Navigate } from "react-router-dom";

import Posts from "../pages/Posts/Posts";
import PostIdPage from "../pages/PostIdPage/PostIdPage";
import Error from "../pages/Error/Error";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    POSTS = '/posts',
    POST_BY_ID = '/posts/:id',
    INCORRECT_PATH_ENTERED = `*`,
    BASE = '/',
    ERROR = '/error',
}

export const routes: IRoute[] = [
    { path: RouteNames.POSTS, element: <Posts/> },
    { path: RouteNames.POST_BY_ID, element: <PostIdPage/> },
    { path: RouteNames.INCORRECT_PATH_ENTERED, element: <Navigate to={ RouteNames.ERROR } replace /> },
    { path: RouteNames.BASE, element: <Navigate to={ RouteNames.POSTS } replace /> },
    { path: RouteNames.ERROR, element: <Error/> },
];
