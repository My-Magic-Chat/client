import React from 'react';

import { BoardWrapper } from '@fragments/BoardWrapper';

import { IProps } from './interface';

import './Dashboard.scss';

const Dashboard = ({ goToInitial, handleClick }: IProps) => {
    return (
        <BoardWrapper handleClick={handleClick} goToInitial={goToInitial}>
            <h1>bolo</h1>
        </BoardWrapper>
    );
};

export default Dashboard;
