import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EmailIcon from '@material-ui/icons/Email';
import ExtensionIcon from '@material-ui/icons/Extension';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';
import DateRangeIcon from '@material-ui/icons/DateRange';

import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredKYC = {
  first: '',
  last: 'Configured initial state',
  ico: '',
  amount: ''
};

export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};


export const menuItems = [{
  title: 'Ares',
  type: 'header',
}/* --Ares Header */, {
  title: 'Non Auth',
  icon: <CheckCircleIcon style={iconStyle} />,
  children: [{

    title: 'Index',
    href: '/',
  }, {
    title: 'Login',
    href: '/login',
  }, {
    title: 'Token Sale Login',
    href: '/login/token-sale',
  }, {
    title: 'Site Admin Login',
    href: '/admin',
  }, {
    title: 'Register',
    href: '/register',
  }, {
    title: ' Registration Complete',
    href: '/register/complete',
  }, {
    title: 'Forgot Password',
    href: '/login/forgot-password',

  }]}/* --Non Auth */, {
  title: 'Shared',
  icon: <DesktopWindowsIcon style={iconStyle} />,
  children: [{

    title: 'Referrals',
    href: '/referrals',
  }, {
    title: 'Market Data',
    href: '/data/market',
  }, {
    title: 'Ares Data',
    href: '/data/ares',

  }]}/* --Shared */, {
  title: 'Client',
  icon: <PersonIcon style={iconStyle} />,
  children: [{

    title: 'Dashboard',
    href: '/dashboard',
  }, {
    title: 'Profile',
    href: '/profile',
  }, {
    title: 'Wallet',
    href: '/wallet',
  }, {
    //  New Fund Source?
    title: 'Token Sales',
    href: '/tokens',
  }, {
    title: 'Token Details',
    href: '/tokens/details',
  }, {
    title: 'Investor KYC',
    href: '/tokens/contribute/kyc',
  }, {
    title: 'Investor Payment',
    href: '/tokens/contribute/transfer',
  }, {
    title: 'Investor Confirmation',
    href: '/tokens/contribute/confirm',
  }, {
    title: 'Contributions',
    href: '/contributions',
  }, {
    title: 'Contribution Details',
    href: '/contributions/details',

  }]}/* --Client Pages */, {
  title: 'Token Sale Admin',
  icon: <BuildIcon style={iconStyle} />,
  children: [{

    title: 'Launch Token Sale',
    href: '/tokens/launch-token',
  }, {
    title: 'Token Sale Dashboard',
    href: '/tokens/my-token/dashboard',
  }, {
    title: 'Token Sale Data',
    href: '/tokens/my-token/data',
  }, {
    title: 'Token Sale Contributions',
    href: '/tokens/my-token/contributions',
  }, {
    title: 'Token Contribution Details',
    href: '/tokens/my-token/contribution/details',
  }, {
    title: 'Token Sale Goals',
    href: '/tokens/my-token/goals',

  }]}/* --ICO Admin Pages */, {
  title: 'Site Admin',
  icon: <EventNoteIcon style={iconStyle} />,
  children: [{

    title: 'Admin Token Dashboard',
    href: '/admin/token-sales',
  }, {
    title: 'Admin Transaction Dashboard',
    href: '/admin/transactions',
  }, {
    title: 'Admin User Dashboard',
    href: '/admin/users',
  }, {
    title: 'Admin Site Dashboard',
    href: '/admin/site',

  }]}/* --Site Admin Pages */, {
  /* --Ares Pages */

  title: 'Other',
  type: 'header',
}, {
  title: 'Development',
  icon: <BuildIcon style={iconStyle} />,
  children: [{

      title: 'Dashboards',
      icon: <HomeIcon style={iconStyle} />,
      children: [{
        title: 'Analytics',
        href: '/dashboards/analytics',
        icon: <DashboardIcon style={iconStyle} />
      }, {
        title: 'Ecommerce',
        href: '/dashboards/ecommerce',
        icon: <ShoppingCartIcon style={iconStyle} />
      }, {
        title: 'Crypto',
        href: '/dashboards/crypto',
        icon: <EuroSymbolIcon style={iconStyle} />
      }, {
        title: 'Project',
        href: '/dashboards/project',
        icon: <EventNoteIcon style={iconStyle} />
      }]}, {
    title: 'Theming',
    href: '/theming',
    icon: <BuildIcon style={iconStyle} />
  }, {
    title: 'Apps',
    icon: <DesktopWindowsIcon style={iconStyle} />,
    children: [{
      title: 'Email',
      href: '/apps/email',
      icon: <EmailIcon style={iconStyle} />
    }, {
      title: 'Todo',
      href: '/apps/todo',
      icon: <CheckCircleIcon style={iconStyle} />
    }, {
      title: 'Maps',
      href: '/apps/maps',
      icon: <PinDropIcon style={iconStyle} />
    }, {
      title: 'Calendar',
      href: '/apps/calendar',
      icon: <DateRangeIcon style={iconStyle} />
    }, {
      title: 'Notes',
      href: '/apps/notes',
      icon: <EventNoteIcon style={iconStyle} />
    }, {
      title: 'Contacts',
      href: '/apps/contacts',
      icon: <FaceIcon style={iconStyle} />
    }, {
      title: 'Chat',
      href: '/apps/chat',
      icon: <ChatIcon style={iconStyle} />
    }]}, {
    title: 'Typography',
    href: '/pages/typography',
    icon: <TextFormatIcon style={iconStyle} />
  }, {
    title: 'Colors',
    href: '/pages/colors',
    icon: <PaletteIcon style={iconStyle} />
  }, {
    title: 'Form Controls',
    icon: <ExtensionIcon style={iconStyle} />,
    children: [{
      title: 'Autocomplete',
      href: '/elements/autocomplete'
    }, {
      title: 'Selection Controls',
      href: '/elements/selection-controls'
    }, {
      title: 'Picker',
      href: '/elements/picker'
    }, {
      title: 'Text Fields',
      href: '/elements/text-fields'
    }, {
      title: 'Selects',
      href: '/elements/selects'
    }]
  }, {
    title: 'Navigation',
    icon: <MenuIcon style={iconStyle} />,
    children: [{
      title: 'App Bar',
      href: '/elements/app-bar'
    }, {
      title: 'Menu',
      href: '/elements/menu'
    }]
  }, {
    title: 'Layout',
    icon: <ViewModuleIcon style={iconStyle} />,
    children: [{
      title: 'List',
      href: '/elements/list'
    }, {
      title: 'Cards',
      href: '/elements/cards'
    }, {
      title: 'Paper',
      href: '/elements/paper'
    }, {
      title: 'Avatars',
      href: '/elements/avatars'
    }, {
      title: 'Steppers',
      href: '/elements/steppers'
    }]
  }, {
    title: 'Buttons & Indicators',
    icon: <InfoIcon style={iconStyle} />,
    children: [{
      title: 'Buttons',
      href: '/elements/buttons'
    }, {
      title: 'Progress',
      href: '/elements/progress'
    }]
  }, {
    title: 'Authentication',
    icon: <PersonIcon style={iconStyle} />,
    children: [{
      title: 'Lock Screen',
      href: '/lock'
    }]}, {
    title: 'Errors',
    icon: <InfoIcon style={iconStyle} />,
    children: [{
      title: '404',
      href: '/errors/404'
    }, {
      title: '500',
      href: '/errors/500'
    }]},

  ]}/* --Development */

]/* --Menu Items */;
