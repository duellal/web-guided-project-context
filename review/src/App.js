import React, { useState } from 'react';
import data from './data'

const App = () => {
    const [person, setPerson] = useState(data)

    return (<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson} />
    </div>);
};

const SubComp1 = (props) => {
    const { title, first, last } = props.person.name
    return (
        <div className='component'>
            <h1>Sub Comp 1</h1>
            <p>{title} {first} {last}</p>

            <SubComp2 person={props.person} setPerson={props.setPerson} />
        </div>
    )
}

const SubComp2 = (props) => {
    const handleName = () => {
        props.setPerson({
            ...props.person,
            name: {
                title: "Ms.",
                first: 'Alex',
                last: 'Stormwind'
            }
        })
    }

    return (
        <div className='component'>
            <h1>Sub Comp 2</h1>
            <button onClick={handleName}>Change Name</button>

            <SubComp3 person={props.person} setPerson={props.setPerson} />
        </div>
    )
}

const SubComp3 = (props) => {
    const { street, city, state, postcode } = props.person.location

    const handleLocation = () => {
        props.setPerson({
            ...props.person,
            location: {
                street: '1234 Cottonwood Lane',
                city: 'Raleigh',
                state: 'North Carolina',
                postcode: '64892'
            }
        })
    }

    return (
        <div className='component'>
            <h1>Sub Comp 3</h1>
            <p>{street}, {city}, {state} {postcode}</p>
            <button onClick={handleLocation}>Change Location</button>
        </div>
    )
}

export default App;