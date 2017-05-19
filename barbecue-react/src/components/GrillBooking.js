/**
 * Created by Flo on 15.05.2017.
 */
    import * as React from "react";
    import Layout from "./Layout";




class GrillBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", prename: "", mail: "", standort: "", grillArt: "", mietpreis: "" };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        fetch("http://localhost:3000/api/",
        {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: this.state
        })
            .then(function(res){ console.log(res); })
            .catch(function(res){ console.log(res); });

    }

    handlePrenameChange(event){
        this.setState({prename: event.target.prename});
    }

    handleMailChange(event){
        this.setState({mail: event.target.mail});
    }

    handleStandortChange(event){
        this.setState({standort: event.target.standort});
    }

    handleGrillartChange(event){
        this.setState({grillArt: event.target.grillArt});

    }

    handleMietpreisChange(event){
        this.setState({mietpreis: event.target.mietpreis});
    }



    render() {
        return (
            <Layout>
            <div style={{backgroundImage: "./data/summer-garden-dinner-eating.jpg"}}>
            <form onSubmit={this.handleSubmit} style={{maxWidth: "300", marginLeft: 700,marginTop: 50, padding: 100, backgroundColor: "grey", borderRadius: 15, alignContent: "center", align: "center"}}>
                <div style={{maxWidth: 300, top: 120,  left: 200, alignContent: "center", alignItems: "center"}}>
                <fieldset style={{borderRadius: 15}}>


                    <div style={{textAlign: "center", backgroundColor: "white", padding: 10, margin: 10, maxWidth: "match-parent", borderRadius: 15}}>
                <h1 style={{textAlign: "center", font: "Nunito"}} className="title">Einen Grill Verleihen</h1>


                <label>
                    Name: <p></p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                    <p></p>

                <label>Vorname:
                    <p></p>
                    <input type="text" value={this.state.prename} onChange={this.handlePrenameChange} />
                </label>
                        <p></p>
                        <label>Standort:<p></p>
                            <input type="text" value={this.state.standort} onChange={this.handleStandortChange} />
                        </label>
                        <p></p>
                        <label>Grillart: <p></p>
                        <select style={{borderRadius: 5, height: 25, width: 175}} onChange={this.handleGrillartChange}>
                            <option value={"---------"}> </option>
                            <option value={"Kugelgrill"}>Kugelgrill</option>
                            <option value={"Gasgrill"}>Gasgrill</option>
                            <option value={"Smoker"}>Smoker</option>
                            <option value={"Gartengrill"}>Gartengrill</option>
                        </select></label>

                        <p></p>
                        <label>Mietpreis pro Tag:<p></p>
                            <input type="money" value={this.state.mietpreis} onChange={this.handleMietpreisChange} />
                        </label>

                        <p></p>

                <label>Email:<p></p>
                    <input type="email" value={this.state.mail} onChange={this.handleMailChange}/>
                </label>
                </div>
                <div>
                <input style={{width: "100", backgroundColor: "white", color: "black", borderRadius: 5, border: "black", marginLeft: 80, height: 40}} className="submit" type="submit" value={"Buchen"}/>
                </div>
                    </fieldset>
                </div>


            </form>
            </div>
            </Layout>
        )
}

}
export default GrillBooking;