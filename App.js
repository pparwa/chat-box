import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import React,{Component} from 'react';

export default class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          chatlist:[
              {type:'send',message:'hello',time:'11:40'},
              {type:'recive',message:"im busy",time:'11:42'}
          ]
          ,
          pic:{
              user1:"https://bootdey.com/img/Content/avatar/avatar1.png",
              user2:"https://bootdey.com/img/Content/avatar/avatar2.png"
  
          }
  
      }
      this.messagemake=this.messagemake.bind(this)
  }

 messagemake(message)
 {
  console.log(message)
  this.setState(state =>
    {
      return{
        ...state,
                chatlist: [
                    ...state.chatlist,
                    { type: 'send', message, time: new Date().toLocaleTimeString() },
                ]
      }
    })
   
 }

  render(){
  return (
    <div className='box'>
      <h2>chat</h2>
       <Body chatlist={this.state.chatlist} pic={this.state.pic} />
       <Footer messagemake={this.messagemake} />
    </div>
    
  );
}

}


