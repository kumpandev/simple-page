import { DASHBOARD } from '../../routes';
import { 
  DashboardIcon, 
  SearchIcon, 
  ProfileIcon,
  SettingsIcon,
  NotificationIcon
} from '../../components/icons';

export default [
  {
    title: 'Dashboard',
    link: DASHBOARD.ROOT,
    icon: DashboardIcon
  },
  {
    title: 'Search Test',
    link: '',
    icon: SearchIcon
  },
  {
    title: 'Profile',
    link: '',
    icon: ProfileIcon
  },
  {
    title: 'Settings',
    link: '',
    icon: SettingsIcon
  },
  {
    title: 'Notifications',
    link: '',
    icon: NotificationIcon
  }
]