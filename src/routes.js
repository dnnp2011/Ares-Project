import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/async.component';
import Classic from './layouts/layout-classic/layout-classic.component';
import Compact from './layouts/layout-compact/layout-compact.component';
import Toolbar from './layouts/layout-toolbar/layout-toolbar.component';
import Boxed from './layouts/layout-boxed/layout-boxed.component';
import Funky from './layouts/layout-funky/layout-funky.component';
import Tabbed from './layouts/layout-tabbed/layout-tabbed.component';
import NoLayout from './layouts/layout-none/layout-none.component';

// DASHBOARD ROUTE
const AsyncAnalyticsDashboard = asyncComponent(() => import('./containers/dashboards/analytics/analytics.component'));
const AsyncEcommerceDashboard = asyncComponent(() => import('./containers/dashboards/ecommerce/ecommerce.component'));
const AsyncCryptoDashboard = asyncComponent(() => import('./containers/dashboards/crypto/crypto.component'));
const AsyncProjectDashboard = asyncComponent(() => import('./containers/dashboards/project/project.component'));
const AsyncTheming = asyncComponent(() => import('./containers/theming/theming.component'));

// APP ROUTES
const AsyncEmailApp = asyncComponent(() => import('./containers/apps/email/email.component'));
const AsyncTodoApp = asyncComponent(() => import('./containers/apps/todo/todo.component'));
const AsyncMapsApp = asyncComponent(() => import('./containers/apps/maps/maps.component'));
const AsyncNotesApp = asyncComponent(() => import('./containers/apps/notes/notes.component'));
const AsyncContactsApp = asyncComponent(() => import('./containers/apps/contacts/contacts.component'));
const AsyncChatApp = asyncComponent(() => import('./containers/apps/chat/chat.component'));
const AsyncCalendarApp = asyncComponent(() => import('./containers/apps/calendar/calendar.component'));

// EXAMPLE ROUTES
const AsyncAutocompleteExample = asyncComponent(() => import('./containers/elements/autocomplete/autocomplete.component'));
const AsyncSelectionControlsExample = asyncComponent(() => import('./containers/elements/selection-controls/selection-controls.component'));
const AsyncPickerExample = asyncComponent(() => import('./containers/elements/picker/picker.component'));
const AsyncSelectExample = asyncComponent(() => import('./containers/elements/select/select.component'));
const AsyncTextFieldExample = asyncComponent(() => import('./containers/elements/text-field/text-field.component'));
const AsyncAppBarExample = asyncComponent(() => import('./containers/elements/app-bar/app-bar.component'));
const AsyncMenuExample = asyncComponent(() => import('./containers/elements/menu/menu.component'));
const AsyncListExample = asyncComponent(() => import('./containers/elements/list/list.component'));
const AsyncCardExample = asyncComponent(() => import('./containers/elements/card/card.component'));
const AsyncPaperExample = asyncComponent(() => import('./containers/elements/paper/paper.component'));
const AsyncAvatarExample = asyncComponent(() => import('./containers/elements/avatars/avatars.component'));
const AsyncSteppersExample = asyncComponent(() => import('./containers/elements/steppers/steppers.component'));
const AsyncButtonExample = asyncComponent(() => import('./containers/elements/button/button.component'));
const AsyncProgressExample = asyncComponent(() => import('./containers/elements/progress/progress.component'));

// AUTHENTICATION ROUTES
const AsyncLogin = asyncComponent(() => import('./containers/authentication/login/login.component'));
const AsyncRegister = asyncComponent(() => import('./containers/authentication/register/register.component'));
const AsyncProfile = asyncComponent(() => import('./containers/authentication/profile/profile.component'));
const AsyncLock = asyncComponent(() => import('./containers/authentication/lock/lock.component'));
const AsyncForgot = asyncComponent(() => import('./containers/authentication/forgot-password/forgot-password.component'));

// ERROR ROUTES
const AsyncError404 = asyncComponent(() => import('./containers/errors/404.component'));
const AsyncError500 = asyncComponent(() => import('./containers/errors/500.component'));

const AsyncNotFound = asyncComponent(() => import('./containers/not-found/not-found.component'));

// PAGES ROUTES
const AsyncTypography = asyncComponent(() => import('./containers/pages/typography.component'));
const AsyncColors = asyncComponent(() => import('./containers/pages/colors.component'));


/**
 * CUSTOM AIRES ROUTES
 * Declare Async variable imports for the aires pages here
 */

/* -------------------------------------------------------------------------------------------------------------------------- */

// CUSTOM AIRES ROUTES
const AsyncLaunchICO = asyncComponent(() => import('./containers/aires/ico-admin-pages/launch-ico/launchICO.component'));
const AsyncCollectKYC = asyncComponent(() => import('./containers/aires/client-pages/invest-kyc/collectKYC.component'));

/* --- Shared Pages --- */
// const AsyncAiresLogin = asyncComponent(() => import('./containers/aires/shared-pages/login/login.component'));
 const AsyncAiresForgotPass = asyncComponent(() => import('./containers/aires/shared-pages/forgot-password/forgot-password.component'));
// const AsyncAiresRegister = asyncComponent(() => import('./containers/aires/shared-pages/register/register.component'));
// const AsyncRegistrationComplete = asyncComponent(() => import('./containers/aires/shared-pages/register-complete/register-complete.component'));
// const AsyncInviteFriend = asyncComponent(() => import('./containers/aires/shared-pages/invite-friend/invite-friend.component'));
const AsyncCryptoMarketDashboard = asyncComponent(() => import('./containers/aires/shared-pages/crypto-market-dashboard/crypto-market-dashboard.component'));
// const AsyncCryptoLocalDashboard = asyncComponent(() => import('./containers/aires/shared-pages/crypto-local-dashboard/crypto-local-dashboard.component'));

/* --- User Pages --- */
 const AsyncWallet = asyncComponent(() => import('./containers/aires/client-pages/wallet/wallet.component'));
 const AsyncNewFundSource = asyncComponent(() => import('./containers/aires/client-pages/new-fund-source/new-fund-source.component'));
 const AsyncInvestments = asyncComponent(() => import('./containers/aires/client-pages/investments/investments.component'));
 const AsyncInvestmentDetail = asyncComponent(() => import('./containers/aires/client-pages/investment-detail/investment-detail.component'));
 const AsyncIcoList = asyncComponent(() => import('./containers/aires/client-pages/ico-list/ico-list.component'));
 const AsyncIcoDetail = asyncComponent(() => import('./containers/aires/client-pages/ico-detail/ico-detail.component'));
 const AsyncInvest = asyncComponent(() => import('./containers/aires/client-pages/invest/invest.component'));
 const AsyncInvestKyc = asyncComponent(() => import('./containers/aires/client-pages/invest-kyc/invest-kyc.component'));
 const AsyncInvestConfirm = asyncComponent(() => import('./containers/aires/client-pages/invest-confirm/invest-confirm.component'));

/* --- ICO Admin Pages --- */
// const AsyncIcoProjectDashboard = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-dash/ico-project-dash.component'));
// const AsyncIcoProjectInvestorAnalytics = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-investor-analytics/ico-project-investor-analytics.component'));
// const AsyncIcoProjectInvestorList = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-investor-list/ico-project-investor-list.component'));
// const AsyncInvestorDetail = asyncComponent(() => import('./containers/aires/ico-admin-pages/investor-detail/investor-detail.component'));
// const AsyncIcoProjectWallet = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-wallet/ico-project-wallet.component'));
// const AsyncLaunchIco = asyncComponent(() => import('./containers/aires/ico-admin-pages/launch-ico/launch-ico.component'));
// const AsyncMyIcos = asyncComponent(() => import('./containers/aires/ico-admin-pages/my-icos/my-icos.component'));

/* --- Site Admin Pages --- */
// const AsyncIcoMasterDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/ico-master-dashboard/ico-master-dashboard.component'));
// const AsyncInvestorMasterDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/investor-master-dashboard/investor-master-dashboard.component'));
// const AsyncSiteAnalytics = asyncComponent(() => import('./containers/aires/site-admin-pages/site-analytics/site-analytics.component'));
// const AsyncTransactionsMasterDashboard = asyncComponent('./containers/aires/site-admin-pages/transactions-master-dashboard/transactions-master-dashboard.component');

/* --------------------------------------------------------------------------------------------------------------------------- */

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const ClassicLayout = props => (
  <Classic>{props.children}</Classic>
);

const CompactLayout = props => (
  <Compact>{props.children}</Compact>
);

const ToolbarLayout = props => (
  <Toolbar>{props.children}</Toolbar>
);

const BoxedLayout = props => (
  <Boxed>{props.children}</Boxed>
);

const FunkyLayout = props => (
  <Funky>{props.children}</Funky>
);

const TabbedLayout = props => (
  <Tabbed>{props.children}</Tabbed>
);

// TODO: Consider looping through an object containing all routes
export default ({ childProps, layout }) => {
  let activeLayout;
  switch (layout.currentLayout) {
  case 'classic':
    activeLayout = ClassicLayout;
    break;
  case 'compact':
    activeLayout = CompactLayout;
    break;
  case 'toolbar':
    activeLayout = ToolbarLayout;
    break;
  case 'boxed':
    activeLayout = BoxedLayout;
    break;
  case 'funky':
    activeLayout = FunkyLayout;
    break;
  case 'tabbed':
    activeLayout = TabbedLayout;
    break;
  default:
    activeLayout = ClassicLayout;
  }

  return (
    <Switch>
      <AppRoute path="/" exact component={AsyncAnalyticsDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/ecommerce" exact component={AsyncEcommerceDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/crypto" exact component={AsyncCryptoDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/project" exact component={AsyncProjectDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/theming" exact component={AsyncTheming} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/email" exact component={AsyncEmailApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/todo" exact component={AsyncTodoApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/maps" exact component={AsyncMapsApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/notes" exact component={AsyncNotesApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/contacts" exact component={AsyncContactsApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/chat" exact component={AsyncChatApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/calendar" exact component={AsyncCalendarApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/autocomplete" exact component={AsyncAutocompleteExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/selection-controls" exact component={AsyncSelectionControlsExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/picker" exact component={AsyncPickerExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/selects" exact component={AsyncSelectExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/text-fields" exact component={AsyncTextFieldExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/app-bar" exact component={AsyncAppBarExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/menu" exact component={AsyncMenuExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/list" exact component={AsyncListExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/cards" exact component={AsyncCardExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/paper" exact component={AsyncPaperExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/avatars" exact component={AsyncAvatarExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/steppers" exact component={AsyncSteppersExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/buttons" exact component={AsyncButtonExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/progress" exact component={AsyncProgressExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/login" exact component={AsyncLogin} props={childProps} layout={NoLayout} />
      <AppRoute path="/register" exact component={AsyncRegister} props={childProps} layout={NoLayout} />
      <AppRoute path="/profile" exact component={AsyncProfile} props={childProps} layout={activeLayout} />
      <AppRoute path="/lock" exact component={AsyncLock} props={childProps} layout={NoLayout} />
      <AppRoute path="/forgot-password" exact component={AsyncForgot} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/404" exact component={AsyncError404} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/500" exact component={AsyncError500} props={childProps} layout={NoLayout} />
      <AppRoute path="/pages/typography" exact component={AsyncTypography} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/colors" exact component={AsyncColors} props={childProps} layout={activeLayout} />
      <AppRoute path="/launch" exact component={AsyncLaunchICO} props={childProps} layout={activeLayout} />
      <AppRoute path="/investorKYC" exact component={AsyncCollectKYC} props={childProps} layout={activeLayout} />


      /* --- Aires Project Paths --- */
      /* ------------------------------------------------------------------------------------------------------------------------------------- */

      /* --- Shared Pages --- */
      {/*<AppRoute path="/login" exact component={AsyncAiresLogin} props={childProps} layout={activeLayout}/>*/}
      {<AppRoute path="/forgot-password" exact component={AsyncAiresForgotPass} props={childProps} layout={activeLayout}/>}
      {/*<AppRoute path="/register" exact component={AsyncAiresRegister} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/register/registration-complete" exact component={AsyncRegistrationComplete} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/invite-friend" exact component={AsyncInviteFriend} props={childProps} layout={activeLayout}/>*/}
      <AppRoute path="/dashboard/crypto-market" exact component={AsyncCryptoMarketDashboard} props={childProps} layout={activeLayout} />
      {/*<AppRoute path="/dashboard/crypto-market-local" exact component={AsyncCryptoLocalDashboard} props={childProps} layout={activeLayout}/>*/}

      /* --- Client Pages --- */
      {<AppRoute path="/my-wallet" exact component={AsyncWallet} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/my-wallet/new-fund-source" exact component={AsyncNewFundSource} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/my-investments" exact component={AsyncInvestments} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/my-investments/details" exact component={AsyncInvestmentDetail} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/browse-icos" exact component={AsyncIcoList} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/browse-icos/details" exact component={AsyncIcoDetail} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/browse-icos/invest" exact component={AsyncInvest} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/browse-icos/invest/kyc" exact component={AsyncInvestKyc} props={childProps} layout={activeLayout}/>}
      {<AppRoute path="/browse-icos/invest/confirm" exact component={AsyncInvestConfirm} props={childProps} layout={activeLayout}/>}

      /* --- ICO Admin Pages --- */
      {/*<AppRoute path="/dashboard/ico/project" exact component={AsyncIcoProjectDashboard} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/dashboard/ico/project/analytics" exact component={AsyncIcoProjectInvestorAnalytics} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/ico/investors" exact component={AsyncIcoProjectInvestorList} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/ico/investors/detail" exact component={AsyncInvestorDetail} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/ico/project/wallet" exact component={AsyncIcoProjectWallet} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/launch-ico" exact component={AsyncLaunchIco} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/my-icos" exact component={AsyncMyIcos} props={childProps} layout={activeLayout}/>*/}

      /* --- Site Admin Pages --- */
      {/*<AppRoute path="/admin/dashboard/icos" exact component={AsyncIcoMasterDashboard} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/admin/dashboard/investors" exact component={AsyncInvestorMasterDashboard} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/admin/dashboard/transactions" exact component={AsyncTransactionsMasterDashboard} props={childProps} layout={activeLayout}/>*/}
      {/*<AppRoute path="/admin/analytics/site" exact component={AsyncSiteAnalytics} props={childProps} layout={activeLayout}/>*/}

      /* ------------------------------------------------------------------------------------------------------------------------------------- */
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
    </Switch>);
};
