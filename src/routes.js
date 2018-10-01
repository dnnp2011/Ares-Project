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
const AsyncLock = asyncComponent(() => import('./containers/authentication/lock/lock.component'));

// ERROR ROUTES
const AsyncError404 = asyncComponent(() => import('./containers/errors/404.component'));
const AsyncError500 = asyncComponent(() => import('./containers/errors/500.component'));

const AsyncNotFound = asyncComponent(() => import('./containers/errors/404.component'));

// PAGES ROUTES
const AsyncTypography = asyncComponent(() => import('./containers/pages/typography.component'));
const AsyncColors = asyncComponent(() => import('./containers/pages/colors.component'));


/**
 * CUSTOM Ares ROUTES
 * Declare Async variable imports for the ares pages here
 */

/* -------------------------------------------------------------------------------------------------------------------------- */

/* --- Non Authenticated Pages --- */
const AsyncIndexPage = asyncComponent(() => import('./containers/aires/non-auth-pages/landing-page/landing-page.component'));
const AsyncLogin = asyncComponent(() => import('./containers/aires/non-auth-pages/login/login.component'));
const AsyncTokenSaleLogin = asyncComponent(() => import('./containers/aires/non-auth-pages/login-ico-admin/login-ico-admin.component'));
const AsyncSiteAdminLogin = asyncComponent(() => import('./containers/aires/non-auth-pages/login-site-admin/login-site-admin.component'));
const AsyncRegister = asyncComponent(() => import('./containers/aires/non-auth-pages/register/register.component'));
const AsyncRegistrationComplete = asyncComponent(() => import('./containers/aires/non-auth-pages/register-complete/register-complete.component'));
const AsyncForgotPassword = asyncComponent(() => import('./containers/aires/non-auth-pages/forgot-password/forgot-password.component'));
// const AsyncNotAuthorized = asyncComponent(() => import('./containers/authentication/lock/lock.component')); //TODO: Migrate this page

/* --- Shared Pages --- */
const AsyncReferrals = asyncComponent(() => import('./containers/aires/shared-pages/invite-friend/invite-friend.component'));
const AsyncMarketData = asyncComponent(() => import('./containers/aires/shared-pages/crypto-market-dashboard/crypto-market-dashboard.component'));
const AsyncAresData = asyncComponent(() => import('./containers/aires/shared-pages/crypto-local-dashboard/crypto-local-dashboard.component'));

/* --- Client Pages --- */

const AsyncDashboard = asyncComponent(() => import('./containers/aires/client-pages/client-dashboard/clientDashboard.component'));
const AsyncProfile = asyncComponent(() => import('./containers/aires/client-pages/profile/profile.component'));
const AsyncWallet = asyncComponent(() => import('./containers/aires/client-pages/wallet/wallet.component'));
// const AsyncNewFundSource = asyncComponent(() => import('./containers/aires/client-pages/new-fund-source/new-fund-source.component'));
const AsyncTokenSales = asyncComponent(() => import('./containers/aires/client-pages/ico-list/ico-list.component'));
const AsyncTokenDetails = asyncComponent(() => import('./containers/aires/client-pages/ico-detail/ico-detail.component'));
const AsyncInvestorKyc = asyncComponent(() => import('./containers/aires/client-pages/invest-kyc/invest-kyc.component'));
const AsyncInvestorPayment = asyncComponent(() => import('./containers/aires/client-pages/invest-payment/invest-payment.component'));
const AsyncInvestorConfirmation = asyncComponent(() => import('./containers/aires/client-pages/invest-confirm/invest-confirm.component'));
const AsyncContributions = asyncComponent(() => import('./containers/aires/client-pages/investments/investments.component'));
const AsyncContributionDetails = asyncComponent(() => import('./containers/aires/client-pages/investment-detail/investment-detail.component'));

/* --- ICO Admin Pages --- */

const AsyncLaunchTokenSale = asyncComponent(() => import('./containers/aires/ico-admin-pages/launch-ico/launch-ico.component'));
const AsyncTokenSaleDashboard = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-dash/ico-project-dash.component'));
const AsyncTokenSaleData = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-investor-analytics/ico-project-investor-analytics.component'));
// const AsyncTokenSaleContributions = asyncComponent(() => import(''));
const AsyncTokenContributionDetails = asyncComponent(() => import('./containers/aires/ico-admin-pages/investor-detail/investor-detail.component'));
const AsyncTokenSaleGoals = asyncComponent(() => import('./containers/aires/ico-admin-pages/ico-project-wallet/ico-project-wallet.component'));

/* --- Site Admin Pages --- */
const AsyncAdminTokenDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/ico-master-dashboard/ico-master-dashboard.component'));
const AsyncAdminTransactionDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/transactions-master-dashboard/transactions-master-dashboard.component'));
const AsyncAdminUserDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/investor-master-dashboard/investor-master-dashboard.component'));
const AsyncAdminSiteDashboard = asyncComponent(() => import('./containers/aires/site-admin-pages/site-wide-analytics/site-wide-analytics.component'));

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
      <AppRoute path="/dashboards/analytics" exact component={AsyncAnalyticsDashboard} props={childProps} layout={activeLayout} />
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
      <AppRoute path="/lock" exact component={AsyncLock} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/404" exact component={AsyncError404} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/500" exact component={AsyncError500} props={childProps} layout={NoLayout} />
      <AppRoute path="/pages/typography" exact component={AsyncTypography} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/colors" exact component={AsyncColors} props={childProps} layout={activeLayout} />


      {/* --- Aires Project Paths --- */}
      {/* ------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* --- Non-Auth Pages --- */}
      <AppRoute path="/" exact component={AsyncIndexPage} props={childProps} layout={activeLayout} />
      <AppRoute path="/login" exact component={AsyncLogin} props={childProps} layout={activeLayout} />
      <AppRoute path="/login/token-sale" exact component={AsyncTokenSaleLogin} props={childProps} layout={activeLayout} />
      <AppRoute path="/admin" exact component={AsyncSiteAdminLogin} props={childProps} layout={activeLayout} />
      <AppRoute path="/register" exact component={AsyncRegister} props={childProps} layout={activeLayout} />
      <AppRoute path="/register/complete" exact component={AsyncRegistrationComplete} props={childProps} layout={activeLayout} />
      <AppRoute path="/login/forgot-password" exact component={AsyncForgotPassword} props={childProps} layout={activeLayout} />

      {/* --- Shared Pages --- */}
      <AppRoute path="/referrals" exact component={AsyncReferrals} props={childProps} layout={activeLayout} />
      <AppRoute path="/data/market" exact component={AsyncMarketData} props={childProps} layout={activeLayout} />
      <AppRoute path="/data/ares" exact component={AsyncAresData} props={childProps} layout={activeLayout} />

      {/* --- Client Pages --- */}
      <AppRoute path="/dashboard" exact component={AsyncDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/profile" exact component={AsyncProfile} props={childProps} layout={activeLayout} />
      <AppRoute path="/wallet" exact component={AsyncWallet} props={childProps} layout={activeLayout} />
      {/*<AppRoute path="/wallet/new-source" exact component={AsyncNewFundSource} props={childProps} layout={activeLayout} />*/}
      <AppRoute path="/tokens" exact component={AsyncTokenSales} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/details" exact component={AsyncTokenDetails} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/contribute/kyc" exact component={AsyncInvestorKyc} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/contribute/transfer" exact component={AsyncInvestorPayment} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/contribute/confirm" exact component={AsyncInvestorConfirmation} props={childProps} layout={activeLayout} />
      <AppRoute path="/contributions" exact component={AsyncContributions} props={childProps} layout={activeLayout} />
      <AppRoute path="/contributions/details" exact component={AsyncContributionDetails} props={childProps} layout={activeLayout} />

      {/* --- ICO Admin Pages --- */}
      <AppRoute path="/tokens/launch-token" exact component={AsyncLaunchTokenSale} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/my-token/dashboard" exact component={AsyncTokenSaleDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/tokens/my-token/data" exact component={AsyncTokenSaleData} props={childProps} layout={activeLayout} />
      {/*<AppRoute path="/tokens/my-token/contributions" exact component={AsyncInvestorDetail} props={childProps} layout={activeLayout} />*/}
      {/*<AppRoute path="/tokens/my-token/contribution/details" exact component={AsyncInvestorDetail} props={childProps} layout={activeLayout} />*/}
      <AppRoute path="/tokens/my-token/goals" exact component={AsyncTokenSaleGoals} props={childProps} layout={activeLayout} />

      {/* --- Site Admin Pages --- */}
      <AppRoute path="/admin/token-sales" exact component={AsyncAdminTokenDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/admin/transactions" exact component={AsyncAdminTransactionDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/admin/users" exact component={AsyncAdminUserDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/admin/site" exact component={AsyncAdminSiteDashboard} props={childProps} layout={activeLayout} />

      {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
    </Switch>);
};
