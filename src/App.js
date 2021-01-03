import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {
    return (
        <div className="App">
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </main>

        </div>
    );
}

export default App;
