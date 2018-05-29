import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import CoursesPage from "./course/CoursesPage";


import Header from "./common/Header";
import MySideNav from "./common/navBar";

let testingStatelessFunctionComponent = () => {
    return (
        <h1> Something something loans stuff and stuff</h1>
    );
};

class App extends React.Component {
    render () {
        return (
            <div style={{

                display: 'flex',
                flexFlow: 'row'
            }}>
                <div style={{
                        height: '100%',
                        flex: '1 content',
                        order: '1',
                        backgroundColor:'gold',
                        boxShadow: '5px 10px white'
                    }}>
                    <MySideNav/>
                </div>
                <div style={{
                        order:'2',
                        flex:'1 auto',
                        display: 'flex',
                        flexFlow: 'column'
                    }}>
                    <div style = {{
                        height: '72px',
                        backgroundColor: '#1a2229',
                        verticalAlign:'middle',
                        padding: '20px',
                        color: '#E5E5E5',
                        fontSize: "30px"
                    }}>ARES</div>

                    <div style = {{
                        backgroundColor: '#1D2932',
                        flex: '1 auto',
                        padding: '30px'
                    }}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path = "/ladder" component = {AboutPage}/>
                            <Route path = "/otc" component = {CoursesPage}/>
                            <Route path = "/loans" component = {testingStatelessFunctionComponent}/>
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

// App.propTypes = {
//     history: PropTypes.object.isRequired
// };

export default App;