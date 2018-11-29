import React from 'react';
import PropTypes from 'prop-types';

const Header = React.memo(function Header({name}){
    return(
        <header className={'header'}>{name}</header>
    );
});

Header.propTypes = {
    name: PropTypes.string
}
export default Header;