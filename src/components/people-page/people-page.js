import React, {Component} from "react";
import './people-page.css'
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: 5
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData = {this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId={this.state.selectedPerson}/>
        </div>
      </div>

    )
  }
}