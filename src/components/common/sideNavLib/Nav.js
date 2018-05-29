import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SvgIcon from 'react-icons-kit';
import {ic_details} from 'react-icons-kit/md/ic_details'



export const NavIcon = () => {
    throw new Error('Should not render');
};
export const NavText = () => {
    throw new Error('Should not render');
};

const findComponent = ComponentToFind => children => {
    return Children.toArray(children).reduce((found, next) => {
        if (found === null && next !== null && next.type === ComponentToFind) {
            return next;
        }
        return found;
    }, null);
};

const findIcon = findComponent(NavIcon);
const findText = findComponent(NavText);
const identity = () => {};

const NavItemStyled = styled.div`
    padding: 20px 20px;
    cursor: pointer;
    position: relative;
    background: ${props =>
        props.isHighlighted ? props.highlightBgColor : 'inherit'};
    color: ${props =>
        props.isHighlighted ? props.highlightColor : 'inherit'};

    &:hover {
        color: ${props =>
        props.hoverColor || props.highlightColor || 'inherit'} !important;
        background: ${props =>
        props.hoverBgColor || props.highlightBgColor || 'inherit'} !important;
    }
`;


const SubNavItemStyled = styled.div`
    padding: 15px;
    padding-left: 40px;
    cursor: pointer;
    position: relative;
    background: ${props =>
        props.isHighlighted ? props.highlightBgColor : 'inherit'};
    color: ${props =>
        props.isHighlighted ? props.highlightColor : 'inherit'};

    &:hover {
        color: ${props =>
        props.hoverColor || props.highlightColor || 'inherit'} !important;
        background: ${props =>
        props.hoverBgColor || props.highlightBgColor || 'inherit'} !important;
    }
`;

const NavIconCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    padding-left: 10px;
    width: 42px;
`;
const NavTextCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    padding-left: 10px;
`;

const hasChildNav = children => {
    return Children.toArray(children).reduce((partial, next) => {
        return partial === false ? next.type === Nav : partial;
    }, false);
};

const CollapsedIndicator = styled.div`
    &:before {
        content: '';
        display: inline-block;
        height: 20px;
        transform: rotate(${props => (!props.collapsed ? '0deg' : '90deg')});
        vertical-align: top;
        width: ${props => props.size};
    }
`;

const collectStyleAndClsName = comp => {
    const { className = undefined, style = {} } = comp && comp.props
        ? comp.props
        : {};
    return { className, style };
};

export class Nav extends Component {
  static contextTypes = {
      highlightColor: PropTypes.string,
      highlightBgColor: PropTypes.string,
      hoverBgColor: PropTypes.string,
      hoverColor: PropTypes.string
  };

  static propTypes = {
      children: PropTypes.node,
      highlightColor: PropTypes.string,
      highlightBgColor: PropTypes.string,
      isHighlighted: PropTypes.bool,
      id: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.number.isRequired
      ]),
      onClick: PropTypes.func,
      onNavClick: PropTypes.func,
      highlightedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      renderSubNavIndicator: PropTypes.func,
      hoverBgColor: PropTypes.string,
      hoverColor: PropTypes.string,
      expanded: PropTypes.bool,
      isSubNav: PropTypes.bool
  };

  static defaultProps = {
      onNavClick: identity,
  };

  constructor(props) {
        super(props);
        this.state = {
            collapsed: !props.expanded
        };
    }

  onNavItemClicked = () => {
      const { onClick = identity, onNavClick } = this.props;
      this.setState(
          {
              collapsed: !this.state.collapsed
          },
          () => {
              onNavClick(this.props.id, null);
              onClick(this.props.id, null);
              if (this.subNavEl && !this.s) {
                  this.subNavEl.style.maxHeight = !this.state.collapsed
                      ? null
                      : '0px';
              }
          }
      );
  };

  childClicked = childId => {
      const { onNavClick } = this.props;
      onNavClick(childId, this.props.id);
      this.props.onClick(childId, this.props.id);
  };

  setSubNavRef = subNavEl => {
      this.subNavEl = subNavEl;
  };

  renderSubNavIndicator = () => {
      const { renderSubNavIndicator } = this.props;
      if (renderSubNavIndicator) {
          const subNavInd = renderSubNavIndicator(this.state.collapsed);
          if (!subNavInd && typeof console !== 'undefined') {
              console.warn('subNavIndicator returned undefined or null');
          }
          return subNavInd || null;
      }
      return (  
            <CollapsedIndicator collapsed={this.state.collapsed}>
                <SvgIcon size={20} icon={ic_details} />
            </CollapsedIndicator>
                );
  };

  render() {
        const {
            hoverBgColor,
            hoverColor,
            highlightColor,
            highlightBgColor,
            children,
            highlightedId,
            onNavClick = identity,
            id,
        } = this.props;
        const icon = findIcon(children);
        const text = findText(children);
        const itemProps = {
            hoverBgColor: hoverBgColor || this.context.hoverBgColor,
            hoverColor: hoverColor || this.context.hoverColor,
            onClick: this.onNavItemClicked,
            onNavClick,
            isHighlighted: id === highlightedId,
            highlightColor: highlightColor || this.context.highlightColor,
            highlightBgColor: highlightBgColor || this.context.highlightBgColor,
            isSubNav: this.props.isSubNav || false
        };

        return (
            <div>
                <NavItemStyled className="__rsnav___item" {...itemProps}>
                    <NavIconCont {...collectStyleAndClsName(icon)}>
                        {icon && icon.props ? icon.props.children : null}
                    </NavIconCont>
                    <NavTextCont {...collectStyleAndClsName(text)}>
                        {text && text.props ? text.props.children : null}
                    </NavTextCont>
                    {
                        hasChildNav(children)
                        ? <div
                            style={{
                                position: 'absolute',
                                right: '16px',
                                bottom: '4px'
                            }}
                        >
                            {this.renderSubNavIndicator()}{' '}
                        </div>
                        : null}
                </NavItemStyled>
                <div
                    ref={this.setSubNavRef}
                    style={{
                        maxHeight: this.state.collapsed ? 0 : null,
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    {Children.toArray(children)
                        .filter(child => child.props.isSubNav && !this.state.collapsed)
                        .map((child, idx) => {
                            const sicon = findIcon(child.props.children);
                            const stext = findText(child.props.children);
                            const isItemHighlighted =
                highlightedId === `${id}/${child.props.id}`;
                            return (
                                <SubNavItemStyled
                                    className={'__rsnav___itemchild'}
                                    key={idx}
                                    {...itemProps}
                                    onClick={() => {
                                        child.props.onNavClick(),
                                        this.childClicked(`${id}/${child.props.id}`);
                                    }}
                                    isHighlighted={isItemHighlighted}
                                >
                                    <NavIconCont {...collectStyleAndClsName(sicon)}>
                                        {sicon ? sicon.props.children : null}
                                    </NavIconCont>
                                    <NavTextCont {...collectStyleAndClsName(stext)}>
                                        {stext ? stext.props.children : null}
                                    </NavTextCont>
                                </SubNavItemStyled>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Nav;
