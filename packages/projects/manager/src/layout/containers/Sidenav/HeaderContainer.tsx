import { Fragment } from '@client/ui';

import { BUTTONS } from './const';

const HeaderContainer = () => {
    return (
        <Fragment.Sidenav
            buttons={BUTTONS}
            goToInitial={() => console.log('goto')}
            handleClick={(path) => console.log('path', path)}
        />
    );
};

export default HeaderContainer;
