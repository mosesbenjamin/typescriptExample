import React from 'react';

interface UserMessage {
    name: string,
    message: string
}

const Message = (props: UserMessage): any=>{
    return(
        <div>
            <p>{props.name}, {props.message}</p>
        </div>
    )
        
}

export default Message;