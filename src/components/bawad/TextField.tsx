import React, {  useRef } from 'react';

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
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TextField: React.FC<Props> = ({ text, person, handleChange, handleSubmit })=>{
    const {firstName, lastName} = person

    // useRef
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    

    return(
        <div ref={divRef}>
            <label>{firstName}, {lastName}</label>
            <input placeholder={`${text}`} ref={inputRef} onChange={handleChange}/>
            <button
                onClick={handleSubmit}
            >
                Click Me!!
            </button>
        </div>
    );
};

export default TextField;