import React from 'react';
import {PlanetList} from '../sw-components/item-lists';
import PlanetDetails from '../sw-components/planet-details';
import Row from '../row/row';
import {useNavigate, useParams} from "react-router-dom";

const PlanetsPage = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <Row
      left={<PlanetList onItemSelected={(itemId) => navigate(`/planets/${itemId}`)}/>}
      right={<PlanetDetails itemId={id}/>}/>
  );
}

export default PlanetsPage;