import React, {PropTypes} from "react";
import styled from 'styled-components';
//const styled                      = require('styled-components').default;


import Header from "./common/Header";
import MySideNav from "./common/navBar";

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
                        {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;