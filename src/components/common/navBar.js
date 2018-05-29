import React from 'react';
import PropTypes from 'prop-types';

import history from '../../history';

import SideNav, { Nav, NavIcon, NavText } from './sideNavLib';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

const styled                     = require('styled-components').default;
const { keyframes }              = require('styled-components');


const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const onItemSelected = (id, parent) => {
    console.log('trying to redirect to: ' + id);
    history.push('/'+id);
};

const MySideNav = () => {
    return (
        <div style={{
            fontSize: 18,
            background: '#2d353c',
            color: '#a8acb1',
            paddingTop: 0,
            position: 'relative',
            width:300,
            height:850}}>
            <div style={{ display: 'flex', padding: 16, background: '#1a2229' }}>
                <div style={{ width: 40, height: 40 }}>
                    <img
                        src="https://european-esports.net/files/FSBxGSFs-1522670857.jpeg"
                        style={{ borderRadius: '30px', width: 40, height: 40 }}
                    />
                </div>
                <div style={{ paddingLeft: 20, paddingTop: 6 }}>
                    <div style={{ fontSize: 12, color: '#E5E5E5' }}>
                        {' '}Dannibjé{' '}
                    </div>
                    <div style={{ fontSize: 11 }}> role: trader </div>
                </div>
            </div>
            <SideNav
                hoverBgColor="#232a2f"
                hoverColor="red"
                highlightBgColor="#00acac"
                defaultSelected="about"
                highlightColor="#FFF"
                onItemSelection={onItemSelected}
            >
                <div />
                <Nav id="">
                    <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
                    <NavText> Overview </NavText>
                </Nav>
    
                <Nav id="ladder">
                    <NavIcon><Icon20 icon={ic_business_center} /></NavIcon>
                    <NavText> Ladder </NavText>
                </Nav>
                <Nav id="otc">
                    <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
                    <NavText>OTC</NavText>
                </Nav>
    
                <Nav id="loans">
                    <NavIcon><Icon20 icon={ic_people} /></NavIcon>
                    <NavText> Loans </NavText>
                    <Nav id="dashboard2" isSubNav={true}>
                        <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                        <NavText> Request </NavText>
                    </Nav>
                    <Nav id="sales2" isSubNav={true}>
                        <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                        <NavText> Status </NavText>
                    </Nav>
                    <Nav id="products2" isSubNav={true}>
                        <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                        <NavText> My Loans </NavText>
                    </Nav>
                </Nav>
                <Nav id="log">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon>
                    <NavText> Log </NavText>
                </Nav>
            </SideNav>
        </div>
    );
};



export default MySideNav;