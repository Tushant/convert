import { LIVE_URL } from 'constants/url';

import CalendarIcon from 'assets/icons/dashboard-calendar.svg';
import ChatIcon from 'assets/icons/dashboard-chat.svg';
import EmailIcon from 'assets/icons/dashboard-email.svg';
import FilesIcon from 'assets/icons/dashboard-files.svg';
import GroupsIcon from 'assets/icons/dashboard-groups.svg';
import PeopleIcon from 'assets/icons/dashboard-people.svg';
import SocialIcon from 'assets/icons/dashboard-social.svg';
import TasksIcon from 'assets/icons/dashboard-tasks.svg';

import AdminIcon from 'assets/icons/dashboard-admin.svg';
import DossierIcon from 'assets/icons/dashboard-dossier.svg';
import ReportsIcon from 'assets/icons/dashboard-reports.svg';
import SalesIcon from 'assets/icons/dashboard-sale.svg';

import NetworkIcon from 'assets/icons/dashboard-network.svg';
import FinanceIcon from 'assets/icons/dashboard-finance.svg';
import ServiceIcon from 'assets/icons/dashboard-service.svg';
import TeamIcon from 'assets/icons/dashboard-team.svg';
import CMAIcon from 'assets/icons/dashboard-cma.svg';

export const connectMenu = [
  {
    label : 'Social',
    icon  : SocialIcon,
    anchor: `${LIVE_URL}social/news/category/all`
  },
  {
    label : 'People',
    icon  : PeopleIcon,
    anchor: `${LIVE_URL}people`
  },
  {
    label : 'Chat',
    icon  : ChatIcon,
    anchor: `${LIVE_URL}chat`
  },
  {
    label : 'Calendar',
    icon  : CalendarIcon,
    anchor: `${LIVE_URL}calendar/day`
  },
  {
    label : 'Tasks',
    icon  : TasksIcon,
    anchor: `${LIVE_URL}tasks/all`
  },
  {
    label : 'Groups',
    icon  : GroupsIcon,
    anchor: `${LIVE_URL}groups`
  },
  {
    label : 'Email',
    icon  : EmailIcon,
    anchor: `${LIVE_URL}social/emailhub/inbox`
  },
  {
    label : 'Files',
    icon  : FilesIcon,
    anchor: `${LIVE_URL}files/category/all`
  },
];

export const appsMenu = [
  {
    label : 'Sale',
    icon  : SalesIcon,
    anchor: `${LIVE_URL}sales/contacts`
  },
  {
    label : 'Dossier',
    icon  : DossierIcon,
    anchor: `${LIVE_URL}documents/category/all`
  },
  {
    label : 'Admin',
    icon  : AdminIcon,
    anchor: `${LIVE_URL}admin/home`
  },
  {
    label : 'Reports',
    icon  : ReportsIcon,
    anchor: `${LIVE_URL}reports/sales/list`
  },
];

export const demoMenu = [
  {
    label : 'Network',
    icon  : NetworkIcon,
    anchor: '/'
  },
  {
    label : 'Email',
    icon  : EmailIcon,
    anchor: `${LIVE_URL}transactions/table/index.html`
  },
  {
    label : 'Finance',
    icon  : FinanceIcon,
    anchor: `${LIVE_URL}transactions/table/index.html`
  },
  {
    label : 'Service',
    icon  : ServiceIcon,
    anchor: `${LIVE_URL}tickets/list/`
  },
  {
    label : 'Team',
    icon  : TeamIcon,
    anchor: `${LIVE_URL}team/dashboard`
  },
  {
    label : 'CMA',
    icon  : CMAIcon,
    anchor: `${LIVE_URL}CMA/list/index.html`
  },
];
