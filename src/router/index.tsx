import React, {lazy , Suspense} from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import Layout from '../layout/Layout';

const Home = lazy(() => import('../pages/Home'));

const App = () => {
    return (
        <Suspense fallback={<div />}>
            <Router>
                <Switch>
                    <Layout>
                        <Route path="/" exact component={Home} />
                    </Layout>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
