import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { AppUseState } from './use-state/AppUseState';
import { AppContext } from './context/AppContext';
import { AppMobX } from './mobx/AppMobX';
import { AppRecoil } from './recoil/AppRecoil';
import { AppRedux } from './redux/AppRedux';

export const App = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route path="/use-state">
                <AppUseState />
            </Route>
            <Route path="/context">
                <AppContext />
            </Route>
            <Route path="/recoil">
                <AppRecoil />
            </Route>
            <Route path="/redux">
                <AppRedux />
            </Route>
            <Route path="/mobx">
                <AppMobX />
            </Route>
        </Switch>
    </Router>
);
