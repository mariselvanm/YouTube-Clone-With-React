import React from 'react';
import './YouTubeHeader.scss';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const YouTubeHeader = () => (
  <div className="YouTubeHeader">
    <div className="left-container">
      <MenuIcon style={{color:"#fff", fontSize: 23}}/>
      <div className="youtube-icon-container">
        <YouTubeIcon style={{color:"red", fontSize: 30}}/>
        <div className="title">YouTube</div>
        <sup>IN</sup>
      </div>
    </div>
    <div className="middle-container">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-box"/>
          <button class="search-button">
            <SearchIcon />
          </button>
        </div>
        <MicIcon style={{color:"#fff", fontSize: 23}}/>
    </div>
    <div className="right-container">
      <div className="button-container">
        <VideoCallIcon style={{color:"#fff", fontSize: 23}}/>
        <AppsIcon style={{color:"#fff", fontSize: 23}}/>
        <NotificationsIcon style={{color:"#fff", fontSize: 23}}/>
        <AccountCircleIcon style={{color:"#fff", fontSize: 23}}/>
      </div>
    </div>
  </div>
);


export default YouTubeHeader;
