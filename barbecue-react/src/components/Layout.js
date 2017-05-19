/**
 * Created by Flo on 15.05.2017.
 */
import React, { Component } from 'react';
import './Layout.css';
import Background from '../../public/BBQ.png';

let styles = {
    div: {
        backgroundImage: "url("+ Background +")",
        height: "100vh",
    },
    text:{
        color: '#FFFFFF'
    }
};

class Layout extends Component {

    render() {

        return (
            <section style={styles.div}>
                <div style={styles.text}>
                    { this.props.children }
                </div>
            </section>
        );
    }
}

export default Layout;