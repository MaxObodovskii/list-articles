import axios, { AxiosResponse } from "axios";

import { IPost } from "../types/types";

export default class ArticleService {
    static async getAllPosts(page: number = 1): Promise<AxiosResponse> {
        const response = await axios.get<IPost[]>('https://gorest.co.in/public-api/posts', {
            params: {
                page: page,
            },
        });

        return response;
    }

    static async getArticleById(id: number): Promise<AxiosResponse> {
        const response = await axios.get<IPost[]>('https://gorest.co.in/public-api/posts', {
            params: {
                id: id,
            },
        });

        return response;
    }

    static async getCommentsByPostId(id: number): Promise<AxiosResponse>  {
        const response = await axios.get(`https://gorest.co.in/public-api/comments?post_id=${id}`);

        return response;
    }
}
