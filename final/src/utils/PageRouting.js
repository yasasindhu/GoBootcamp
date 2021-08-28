import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from '../../src/components/Pages/DashboardPage/index';
import TradePage from '../../src/components/Pages/TradePage';
import WalletPage from '../../src/components/Pages/WalletPage';
import CheckOutPage from '../../src/components/Pages/PurchasePage';
import PaymentSuccessfulPage from '../components/Pages/PaymentSuccessfulPage';
import BuyCryptoPage from '../components/Pages/BuyCyptoPage';
import SellCryptoPage from '../components/Pages/SellCryptoPage';
import UserWalletPage from '../components/Pages/UserWalletPage';
import LoginPage from '../components/Pages/LoginPage';
const PageRouting = () => (
  <Switch>
    <Route exact path = "/">
        {<LoginPage/>}
    </Route>
    <Route exact path = "/dashboardScreen">
        {<DashboardPage/>}
    </Route>
    <Route exact path="/showTradeScreen">
        {<TradePage/>}
    </Route>
    <Route exact path="/showWalletScreen">
        {<WalletPage/>}
    </Route>
    <Route exact path="/buyCrypto">
        {<BuyCryptoPage/>}
    </Route>
    <Route exact path="/sellCrypto">
        {<SellCryptoPage/>}
    </Route>
    <Route exact path = "/showPaymentSuccessfulPage">
        {<PaymentSuccessfulPage/>}
    </Route>
    <Route exact path="/showUserWalletScreen">
        {<UserWalletPage/>}
    </Route>
       
    <Redirect exact from="/" to="/welcome"/>
  </Switch>
);

export default PageRouting;