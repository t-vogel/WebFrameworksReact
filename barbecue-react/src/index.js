import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GrillStart from "./components/GrillStart";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import GrillBooking from "./components/GrillBooking";

ReactDOM.render(
    <Router>
        <div>

            <Route exact path="/" component={GrillStart}/>
            <Route exact path="/add" component={GrillBooking}/>

        </div>
    </Router>
,
  document.getElementById('root')
);
