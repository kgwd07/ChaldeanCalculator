import React from 'react';
import {useState} from 'react';
import { TiSortNumericallyOutline } from "react-icons/ti";
import { MdError } from "react-icons/md";
import Chaldean from './Chaldean';
import PeopleComp from './PeopleComp';

 const Calc = () => {

    const [firstName,setFirstName] = useState('');
    const [people,setPeople] = useState([]);
    const [isError,setIsError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName){
        setIsError(false)
        let number =  Chaldean(firstName);
        
       const person = {id: new Date().getTime().toString(),firstName,number }
       setPeople((people) => {
           return [...people, person]
       })
       setFirstName('')
       }

       else{
        setIsError(true)   
       }
    }

    

    return (
        <>
        <article>

            {isError && <span className='btn-icon'> <MdError/></span> }

            {!isError && <h1 className='btn-icon'>please enter your name  </h1>}
            

            <form className='form' onSubmit = {handleSubmit}> 
                <div className="form-control">
                    <label htmlFor="firstName">NAME : </label>
                        <input type="text" id='firstName' name='firstName' value = {firstName} onChange = {(e)=> setFirstName( e.target.value)} required minLength='3' maxLength='100' pattern = '^[a-zA-Z]*$'/>
                </div>

                <button type='submit'>find no</button>
            </form>

            { people.map((person) => {
                return <PeopleComp key = {person.id}{...person}/>
            })}


        </article>
        </>
    );
};

export default Calc;