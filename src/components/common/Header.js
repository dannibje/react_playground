import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/danni" activeClassName="active">AukaDæmi</Link>
        </nav>
    );
};

export default Header;