import React, { FC } from 'react';

import { Pagination } from 'antd';

import classes from "./Pagination.module.css";

interface PaginationProps {
    totalPages: number;
    page: number;
    changePage: (num: number) => void;
}

const MyPagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
    return (
        <div className={classes.pagination}>
            <Pagination
                total={totalPages * 10}
                current={page}
                onChange={changePage}
                showSizeChanger={false}
            />
        </div>
    );
};

export default MyPagination;
