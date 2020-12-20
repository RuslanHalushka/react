import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>
                    <div className={'toShow'}>
                        <Switch>
                            <Route path={'/posts'}>
                                <AllPosts/>
                            </Route>

                            <Route path={'/comments'}>
                                <AllComments/>
                            </Route>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;