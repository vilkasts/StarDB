import React from 'react';
import {PersonList} from '../sw-components/item-lists';
import PersonDetails from "../sw-components/person-details";
import Row from '../row/row';
import {useNavigate, useParams} from "react-router-dom";

const PeoplePage = () => {

  const navigate = useNavigate();
  const {id} = useParams();


  return (
    <Row
      left={<PersonList onItemSelected={(itemId) => navigate(`/people/${itemId}`)}/>}
      right={<PersonDetails itemId={id}/>}
    />
  );
}
export default PeoplePage;