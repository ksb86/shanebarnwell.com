import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import routes from './routes'
import NoMatch from './NoMatch'
import NavBar from './NavBar';

import '../less/main.less';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    {routes.map(({
                        path,
                        exact,
                        component: Comp,
                        ...rest
                    }) => {
                        return (
                            <Route key={path} path={path} exact={exact} render={(props) => (<Comp {...props} {...rest} />)}/>
                        );
                    })}
                    <Route render={(props) => <NoMatch {...props} />} />
                </Switch>
            </div>
        );
    }
};

export default App;
