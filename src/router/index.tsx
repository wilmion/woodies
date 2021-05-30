import React, {lazy , Suspense} from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

const App = () => {
    return (
        <Suspense fallback={<div />}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
