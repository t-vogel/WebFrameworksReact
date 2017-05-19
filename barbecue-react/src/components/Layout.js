/**
 * Created by Flo on 15.05.2017.
 */
import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    Test
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Layout;