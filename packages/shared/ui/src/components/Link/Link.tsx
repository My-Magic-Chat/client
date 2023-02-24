import React from 'react';

import { IProps } from './interface';

import './Link.scss';

const Link = ({ children, url, target, isExternal = false, click }: IProps) => {
    const getInternalElem = () => <a className="ds-link" href={url} target={target}>{children}</a>;
    const getExternalElem = () => <p className="ds-link" onClick={click}>{children}</p>;

    return isExternal
        ? getExternalElem()
        : getInternalElem();
};

export default Link;
