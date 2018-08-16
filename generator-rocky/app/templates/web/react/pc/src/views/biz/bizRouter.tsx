import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import SimpleEnter from '@components/simpleenter/simpleenter'
// import loginPage from './login/login'



class BizRouter extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>
                <Route path='/simpleEnter' component={SimpleEnter} />

                {/* <Redirect to="/biz" /> */}
            </Switch>
        )
    }
}

export default BizRouter