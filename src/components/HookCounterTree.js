import React, {useState} from "react";

function HookCounterTree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <input type="text" name="" id="" value={name.firstName}
                   onChange={event => setName({...name, firstName: event.target.value})}/>
            <input type="text" name="" id="" value={name.lastName}
                   onChange={event => setName({...name, lastName: event.target.value})}/>
            <h2>Your First name is - {name.firstName}</h2>
            <h2>Your First name is - {name.lastName}</h2>
        </div>
    )
}

export default HookCounterTree;