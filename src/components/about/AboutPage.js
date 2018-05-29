import React from "react";
import {connect} from 'react-redux';

class AboutPage extends React.Component {
    render() {
        return (
            <div style={{color:'#E5E5E5'}}>
                <h1> Þetta er about síða</h1>
                <p> notar react, react-router, redux og fullt af vitleysu</p>
            </div>
        );
    }  
}

function mapStateToProps (state, ownProps){
    console.log('calling mapStateToProps in AboutPage');
    return {
        someRandom: "yoyoyo"
    };
}

export default connect(mapStateToProps)(AboutPage);