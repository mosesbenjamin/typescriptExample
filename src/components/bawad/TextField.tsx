import React, { useState } from 'react';

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

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({ text, person })=>{
    const {firstName, lastName} = person

    // useState Hook
    // // A number
    // const [count, setCount] = useState(5);
    // setCount(5)

    // // Multiple types
    // const [count, setCount] = useState<number | null | undefined>(5);
    // setCount(null)

    // // Object
    // const [count, setCount] = useState<{text: string}>({ text: 'hello' });
    // setCount({text})

    // // Interface
    // const [count, setCount] = useState<TextNode>({ text: 'hello' });
    // setCount({text})

    return(
        <div>
            <label>{firstName}, {lastName}</label>
            <input placeholder={`${text}`}/>
        </div>
    );
};

export default TextField;