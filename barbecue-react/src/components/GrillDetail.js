import React, { Component } from 'react';
import Layout from './Layout';

class GrillDetail extends Component
{
    render ()
    {
        return (
        <div className="GrillDetail">
            <h1 className="GrillDetail">HIER GIBTS GEILE GRILLINFOS</h1>
                <ul>
                    <li>Standort</li>
                    <li>Besitzer</li>
                    <li>Mietpreis</li>
                    <li>Grillart</li>
                </ul>
        </div>
     );
    }

}

export default GrillDetail;