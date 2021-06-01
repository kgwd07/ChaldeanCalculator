import React from 'react';

// import React from 'react'

const PeopleComp = ({firstName,number}) => {

    return (
        <div className='item'>
            <h4>{firstName}</h4>
                    <p>{number}</p>
        </div>
    )
}

export default PeopleComp
