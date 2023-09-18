import HomeOutlinedIcon from '@mui/icons-material/Home';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayList';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TwitterOutlinedIcon from '@mui/icons-material/Twitter';
import TwitterIcon from '@mui/icons-material/Twitter';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentity';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHoriz';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkOutlinedIcon from '@mui/icons-material/Bookmark';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const IconsDef = [
  {
    key: 'Home',
    Component: HomeOutlinedIcon,
    SelectedComponent: HomeIcon,
  },
  {
    key: 'Search',
    Component: SearchOutlinedIcon,
    SelectedComponent: SearchIcon,
  },
  {
    key: 'NotificationsNoneOutlined',
    Component: NotificationsNoneOutlinedIcon,
    SelectedComponent: NotificationsNoneIcon,
  },
  {
    key: 'Email',
    Component: EmailOutlinedIcon,
    SelectedComponent: EmailIcon,
  },
  {
    key: 'FeaturedPlayList',
    Component: FeaturedPlayListOutlinedIcon,
    SelectedComponent: FeaturedPlayListIcon,
  },
  {
    key: 'Bookmark',
    Component: BookmarkOutlinedIcon,
    SelectedComponent: BookmarkIcon,
  },
  {
    key: 'Twitter',
    Component: TwitterOutlinedIcon,
    SelectedComponent: TwitterIcon,
  },
  {
    key: 'PermIdentity',
    Component: PermIdentityOutlinedIcon,
    SelectedComponent: PermIdentityIcon,
  },
  {
    key: 'MoreHoriz',
    Component: MoreHorizOutlinedIcon,
    SelectedComponent: MoreHorizIcon,
  },
];

export const buttonTitle = {
  Home: 'ホーム',
  Search: '話題を検索',
  NotificationsNoneOutlined: '通知',
  Email: 'メッセージ',
  FeaturedPlayList: 'リスト',
  Bookmark: 'ブックマーク',
  Twitter: '認証済み',
  PermIdentity: 'プロフィール',
  MoreHoriz: 'もっと見る',
};
