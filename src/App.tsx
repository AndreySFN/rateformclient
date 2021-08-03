import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FeedbackForm from "./forms/feedbackForm";
import AdminPanel from "./forms/adminPanel";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/comments' component={AdminPanel}/>
                <Route path='/' component={FeedbackForm}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
