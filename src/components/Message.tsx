import React from 'react';
import messageHOC from './Hoc';


const example = (props: any): any => <p>{props.name}, {props.message}</p>

const Message = messageHOC(example);

export default Message;