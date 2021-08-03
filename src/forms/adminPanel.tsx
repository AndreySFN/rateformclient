import React from "react";
import CommentsBrowser from "./admin/commentsBrowser";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import './adminPanel.scss'

const AdminPanel = () => {
    return <div className='admin-panel'>
        <HashRouter>
            <Switch>
                <Route path={'/'} component={CommentsBrowser}/>
            </Switch>
        </HashRouter>
    </div>
};

export default AdminPanel;