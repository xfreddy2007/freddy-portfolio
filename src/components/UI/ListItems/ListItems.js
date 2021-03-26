import React from 'react';

import ListItem from './ListItem/ListItem';

const listItems = props => {
    const items = props.value.map(element => {
        return <ListItem key={element} value={element}/>;
    });

    return items
};

export default listItems;