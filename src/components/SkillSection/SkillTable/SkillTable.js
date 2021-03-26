import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import SkillList from './SkillList/SkillList';

const skillTable = props => {
    const skillListTable = Object.keys(props.table).map(title => {
        return <SkillList key={title} title={title} list={props.table[title]}/>
    });

    return (
        <Aux>
            <h3 className="text-md my-3 xl:text-xl md:text-lg">{props.title}</h3>
            <div className="grid gap-4 grid-cols-4">
                {skillListTable}
            </div>
        </Aux>
    );
};

export default skillTable;