import React from "react";
import {Link} from "react-router";
import styled from 'styled-components';

const homeContainer = styled.div`
    display: flex;
    background-color: #1D2932;
    border: none;
`;

class HomePage extends React.Component {
    render() {
        return (
            <homeContainer>
                <h1 style={{color:'#E5E5E5'}}> Main Ares Site</h1>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </homeContainer>
        );
    }
}

export default HomePage;


