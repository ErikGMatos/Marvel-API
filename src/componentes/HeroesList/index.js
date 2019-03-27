import React from 'react';

import HeroItem from './HeroItem';

const HeroesList = (props) => (
    <HeroItem herois={props.herois}/>
);

export default HeroesList;
