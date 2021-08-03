import './ViewRenderer.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ViewRenderer() {

    const repeater = () => {
        let arr = [];
        for(let i = 0 ;i<100;i++) {
            arr.push(
                <div className="preview-view-container">
                    <div className="preview-image-container">
                        <img alt="preview" src="https://i.ytimg.com/vi/jdNrrrjJeos/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA1ttFJ2orCE1QRU87Po2Niw8dyFg" />
                    </div>
                    <div className="preview-detail-container">
                        <div className="channel-icon">
                            <img alt="preview" src="https://yt3.ggpht.com/ytc/AKedOLRKnXAsBRH6rEruo1ws8oGVyXfn_4RieTd_lfFN=s68-c-k-c0x00ffffff-no-rj" />
                        </div>
                        <div className="channel-detail">
                            <div className="video-title">50 வருடங்களுக்கு முன்... சார்பட்டா பற்றி நாகேஷ் பேச்சு</div>
                            <div className="channel-title">Raj News Tamil</div>
                            <div className="view-detail">
                                <span>204k Views .</span>
                                <span>4 days ago</span>
                            </div>
                        </div>
                        <div className="menu-icon-container">
                            <MoreVertIcon style={{color:'#fff'}} />
                        </div>
                    </div>
                </div>
            )
        }

        return arr;
    }

    return(
        repeater()
    )
}

export default ViewRenderer;