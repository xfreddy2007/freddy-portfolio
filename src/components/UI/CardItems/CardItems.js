import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Card from './Card/Card';

const cardItems = props => {
    const cards = props.items.map(element => {
        return <Card key={element.title} title={element.title} ins={element.institute} link={element.link}/>
    });

    return (
        <Aux>
            <h2 class="text-md my-3 xl:text-xl md:text-lg">{props.title}</h2>
            {cards}
        </Aux>

        );
};

export default cardItems;