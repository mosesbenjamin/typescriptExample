import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    someBoolean?: boolean;
    someNumber?: number;
    fn?: (name: string)=> string;
    person: Person;
}

const TextField: React.FC<Props> = ({ text, person })=>{
    const {firstName, lastName} = person

    return(
        <div>
            <label>{firstName}, {lastName}</label>
            <input placeholder={`${text}`}/>
        </div>
    );
};

export default TextField;