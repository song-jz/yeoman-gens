import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './home/home'
import ServicePage from './service/service'
import InfoPage from './info/info'
import MangerPage from './manger/manger'
import VoterPage from './voter/voter'
import infoDetailPage from './info/infodetail'


class Router extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>

                <Route path='/service' component={ServicePage} />
                <Route path='/info' component={InfoPage} />
                <Route path='/home' component={HomePage} />
                <Route path='/manger' component={MangerPage} />
                <Route path='/voter' component={VoterPage} />
                <Route path='/infoDetail' component={infoDetailPage} />
                <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Router