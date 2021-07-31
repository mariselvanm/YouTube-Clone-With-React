import React from 'react';
import './YouTubeSideMenu.scss';

const YouTubeSideMenu = (props) => {
    const { menuItems, title } = props;

    return (
      <div className="menu-items-container">
          {title ? <div className="container-title">{title}</div>:null}
          {menuItems.map((menuItem, index) => {
              return (
                <div className="menu-item-container" key={index}>
                   {menuItem.ICON} 
                   <div className="menu-title">{menuItem.TITLE}</div>
                </div>
              )
          })}
      </div>
    );
};


export default YouTubeSideMenu;
