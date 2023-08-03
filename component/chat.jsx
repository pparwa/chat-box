import React from "react";


export default function Chat(props)
{

return(
    <>
<div className={`${props.type === 'send' && 'flexs'} ${props.type === 'recive' && 'flexr'}`}>
<div className={`chat ${props.type === 'send' && 'chatleft'}`}>

<h4 className={`${props.type === 'recive' && 'rightchat'}`}>{props.message}</h4>
<p className={`${props.type === 'recive' && 'rightchat'}`}>{props.time}</p>
</div>
<img className={`${props.type === 'recive' && 'right'}`} src={props.pic}/>
    </div>
    </>

);







}