import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {
    render() {

        return (
            <div>
                <AllUsers/>
                <AllPosts/>
            </div>
        );
    }
}

export default App;