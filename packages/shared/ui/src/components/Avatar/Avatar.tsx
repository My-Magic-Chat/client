import React from 'react';

import { IProps } from './interface';

import './Avatar.scss';

const Avatar = ({ name, image, handleClick }: IProps) => {

    const getImage = () => {
        return <img src={image} alt="" />;
    };

    const getInitials = () => {
        if (name) {
            const names: string[] = name.trim().split(' ');
            const firstInitial = names[0].charAt(0).toUpperCase();
            const secondInitial = names.length > 1
                ? names[names.length - 1].charAt(0).toUpperCase()
                : names[0].charAt(1).toUpperCase();

            return <h4>{firstInitial + secondInitial}</h4>;
        }
    };

    const getContent = () => {
        return image ? getImage() : getInitials();
    };

    return (
        <div className="ds-avatar" onClick={handleClick}>
            {getContent()}
        </div>
    );
};

export default Avatar;
