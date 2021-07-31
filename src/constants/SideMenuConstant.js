import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SportsIcon from '@material-ui/icons/Sports';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const HOME_SECTION = [
    {
        ICON: <HomeIcon style={{color:"#fff", fontSize: 21}}/>,
        TITLE: "Home"
    },
    {
        ICON: <ExploreIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Explore"
    },
    {
        ICON: <SubscriptionsIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Subscriptions"
    }
];

const PERSONAL_SECTION = [
    {
        ICON: <VideoLibraryIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Library"
    },
    {
        ICON: <HistoryIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "History"
    },
    {
        ICON: <OndemandVideoIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Your Videos"
    },
    {
        ICON: <WatchLaterIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Watch Later"
    },
    {
        ICON: <ThumbUpAltIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Liked Videos"
    }
]

const MORE_FROM_YOUTUBE = [
    {
        ICON: <YouTubeIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "YouTube Premium"
    },
    {
        ICON: <TheatersIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Movies"
    },
    {
        ICON: <SportsEsportsIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Gaming"
    },
    {
        ICON: <RssFeedIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Live"
    },
    {
        ICON: <FastfoodIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Fashion & Beauty"
    },
    {
        ICON: <ImportContactsIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Learning"
    },
    {
        ICON: <SportsIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Sports"
    }
]

const OTHERS = [
    {
        ICON: <SettingsIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Setting"
    },
    {
        ICON: <FlagIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Report History"
    },
    {
        ICON: <HelpIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Help"
    },
    {
        ICON: <FeedbackIcon style={{color:"#909090", fontSize: 21}}/>,
        TITLE: "Send feedback"
    }
]

const GUIDE_LINKS_1 = [
    "About", "Press", "Copyright", "Contact us", "Creators", "Advertise", "Developers"
]

const GUIDE_LINKS_2 = [
    "Terms", "Privacy", "Policy & Safety", "How YouTube Works", "Test new features"
]

export { HOME_SECTION, PERSONAL_SECTION, MORE_FROM_YOUTUBE, OTHERS, GUIDE_LINKS_1, GUIDE_LINKS_2};