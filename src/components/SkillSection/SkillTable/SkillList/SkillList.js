import React from 'react';

const skillList = props => {
    const listItem = props.list.map(item => {
        return <li key={item} className="text-sm my-3 xl:text-lg md:text-md">- {item}</li>
    });

    return (
        <div>
            <h2 className="text-md my-3 xl:text-xl md:text-lg">{props.title}</h2>
            <ul className="font-serif">
                {listItem}
            </ul>
        </div>
    );
};

export default skillList;