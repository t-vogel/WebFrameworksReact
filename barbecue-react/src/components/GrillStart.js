import React, { Component } from 'react';
import Layout from './Layout';
import {Map, Marker, GoogleApiWrapper }from 'google-maps-react';

class GrillStart extends Component {
    render() {
        return (

        <Layout>

            <div className="GrillStart">

                <p>Heisse Grills in deiner nähe</p>

                <Map style={{height:"300px"}} google={this.props.google} zoom={14}>

                </Map>



                <p className="Grill-intro">
                </p>
            </div>

    <p style={{paddingTop:"350px"}}>Liste mit Grills mit deiner Nähe:</p>
    <li> Grill Dummy </li>
</Layout>

        );
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBVD27r1AY8j4VH19kZoOIQRkjLuqoXelY'

})(GrillStart);
