import { Wrapper } from '@client/ui';

import Sidenav from '../containers/Sidenav';
import { IProps } from './';

const Default = ({ children }: IProps) => {
    return (
        <Wrapper>
            <Sidenav />

            <main>
                {children}
            </main>
        </Wrapper>
    );
};

export default Default;
