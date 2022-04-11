import React from "react";
import { 
    BrowserRouter as Router, 
    Switch,
    Route 
} from "react-router-dom";
import Navbar from '../../../components/HandsOn-8/Navbar'
import SearchGif from '../../../components/HandsOn-8/SearchGif'
import Trending from '../../../components/HandsOn-8/Trending'

function AppRoute() {
    
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/trending">
                    <Trending />
                </Route>
                <Route path="/search">
                    <SearchGif />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoute