import React, { FC } from 'react';

import { Spin } from 'antd';

import classes from "./Spinner.module.css";

const Spinner: FC = () => {
    return (
        <Spin className={classes.spinner} size="large"/>
    );
};

export default Spinner;
