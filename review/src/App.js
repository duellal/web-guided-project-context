import React, { useReducer, useContext, createContext } from 'react';
import data from './data'

import { reducer, setName, setLocation } from './reducer';

const PersonContext = createContext()

const App = () => {
    const [person, dispatch] = useReducer(reducer, data)

    return (
        <PersonContext.Provider value={[person, dispatch]}>
            <div className="App component">
                <h1>Main App</h1>
                <SubComp1 />
            </div>
        </PersonContext.Provider>
    );
};

const SubComp1 = () => {
    const [person] = useContext(PersonContext)
    const { title, first, last } = person.name

    return (
        <div className='component'>
            <h1>Sub Comp 1</h1>
            <p>{title} {first} {last}</p>

            <SubComp2 />
        </div>
    )
}

const SubComp2 = () => {
    const [person, dispatch] = useContext(PersonContext)

    const handleName = () => {
        dispatch(setName({
            title: "Ms.",
            first: 'Alex',
            last: 'Stormwind'
        }))
    }

    return (
        <div className='component'>
            <h1>Sub Comp 2</h1>
            <button onClick={handleName}>Change Name</button>

            <SubComp3 />
        </div>
    )
}

const SubComp3 = () => {
    const [person, dispatch] = useContext(PersonContext)
    const { street, city, state, postcode } = person.location

    const handleLocation = () => {
        dispatch(setLocation({
            street: '1234 Cottonwood Lane',
            city: 'Raleigh',
            state: 'North Carolina',
            postcode: '64892'
        }))
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