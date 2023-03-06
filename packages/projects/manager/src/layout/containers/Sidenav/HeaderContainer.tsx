import { Fragment } from '@client/ui';

import { BUTTONS, BUTTONS_SUPPORT } from './const';

const HeaderContainer = () => {
    return (
        <Fragment.MANAGER.Sidenav
            buttons={BUTTONS}
            buttonsSupport={BUTTONS_SUPPORT}
            goToInitial={() => console.log('goto')}
            handleClick={(path) => console.log('path', path)}
        />
    );
};

export default HeaderContainer;
