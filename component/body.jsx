import React from "react";
import Chat from "./chat";


export default function Body(props)
{
    const chats = props.chatlist.map(chat =>
        {
            return <Chat type={chat.type} message={chat.message} time ={chat.time} pic={chat.type === 'send' ? props.pic.user1 :props.pic.user2}/>
        })
    
    
    return(
        <>
          {chats}
        </>
    )
}

