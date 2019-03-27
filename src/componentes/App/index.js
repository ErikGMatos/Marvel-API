import React, { Fragment, Component } from "react";
import api from "../services/api";
import "./styles.scss";
import Header from "../Header";
//import Button from "../Button";
import Herolist from "../HeroesList";

class App extends Component {
    state = {
        herois: {}
    };

    componentDidMount() {
        console.log(this.state.herois)

        api.get().then(response => {
            
            this.setState({ herois: response.data.data.results });
            console.log(this.state.herois)
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="row container box-button">
                    <div className="col s12">
                        <div className="box-button-container">
                            {/* <Button>Homem Aranha</Button>
                            <Button>Homem de Ferro</Button> */}
                        </div>
                    </div>
                </div>
                <Herolist herois={this.state.herois} />
            </Fragment>
        );
    }
}

export default App;
