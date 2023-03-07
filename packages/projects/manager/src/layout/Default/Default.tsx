import { Fragment } from '@client/ui';

import { IProps } from './';

const Default = ({ children }: IProps) => {
    return (
        <Fragment.BoardWrapper
            goTo={() => console.log('goTo')}
            goToInitial={() => console.log('goToInitial')}
            handleClick={() => console.log('handleClick')}
        >
            {children}
        </Fragment.BoardWrapper>
    );
};

export default Default;
