import React, { FC } from 'react';

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Helmet } from "react-helmet";

const Error: FC = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"/>
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage/>
        </div>
    );
};

export default Error;
