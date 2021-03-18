import React, {Component} from 'react';
import GlobalMap from '../pages/GlobalMap'
import USMap from '../pages/USMap'

//React Router
import { Route, Switch } from 'react-router-dom';

class Routes extends Component{
    render(){
        return(
            <section className="conten main-content">
                <Switch>
                    <Route exact path='/' component={GlobalMap} />
                    <Route exact path='/GlobalMap' component={GlobalMap} />
                    <Route exact path='/USMap' component={USMap} />

                    
                </Switch>
            </section>
        );
    }
}
export default Routes;