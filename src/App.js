import YouTubeHeader from './components/YouTubeHeader/YouTubeHeader';
import YouTubeSideMenu from './components/YouTubeSideMenu/YouTubeSideMenu';
import { HOME_SECTION, PERSONAL_SECTION, MORE_FROM_YOUTUBE, OTHERS, GUIDE_LINKS_1, GUIDE_LINKS_2 } from './constants/SideMenuConstant';
import './App.scss';

function App() {
  return (
    <div className="App">
      <YouTubeHeader />
      <div className="youtube-home-body-container">
        <div className="youtube-side-bar-container-parent">
          <div className="spacer"></div>
          <div className="youtube-side-bar-container">
              <YouTubeSideMenu menuItems={HOME_SECTION} />
              <YouTubeSideMenu menuItems={PERSONAL_SECTION} />
              <YouTubeSideMenu menuItems={MORE_FROM_YOUTUBE} title="MORE FROM YOUTUBE"/>
              <YouTubeSideMenu menuItems={OTHERS} title="MORE FROM YOUTUBE"/>
              <div className="copyright-content-footer">
                  <div className="guid-link-group">
                    {GUIDE_LINKS_1.map((item, index) => <a href="#" key={index}>{item}</a>)}
                  </div>
                  <div className="guid-link-group">
                    {GUIDE_LINKS_2.map((item, index) => <a href="#" key={index}>{item}</a>)}
                  </div>
                  <div className="copy-right">© 2021 Google LLC</div>
              </div>
           </div>
        </div>  
        <div className="youtube-content-box-container">

        </div>
      </div>
    </div>
  );
}

export default App;
