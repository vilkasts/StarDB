import React, {Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";

export default class ItemDetails extends Component {

  swapiServise = new SwapiService();

  state = {
    item: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const {itemId} = this.props;
    if (!itemId) {
      return
    }
    this.swapiServise
      .getPerson(itemId)
      .then((item) => {
        this.setState({item});
      })
  }

  render() {
    const {item} = this.state;
    if (!item) {
      return <span className="item-details">Select a person from a list</span>;
    }

    const {id, name, gender, birthYear, eyeColor} = item;

    return (
      <div className="item-details card">
        <img className="item-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}