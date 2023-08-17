import React, { FC } from 'react';

import { Link } from "react-router-dom";

import { Result } from 'antd';

const ErrorMessage: FC = () => {
    return (
        <Result
            status="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link
                    to='/'
                >
                    Back to main page
                </Link>
            }
        />
    );
};

export default ErrorMessage;
