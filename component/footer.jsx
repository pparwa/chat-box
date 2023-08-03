import React,{Component} from "react";



export default class Footer extends Component
{
constructor(props)
{
    super(props)
    this.state ={
        input : ''
    }
    this.handelchange = this.handelchange.bind(this)
    this.handeltext = this.handeltext.bind(this)
}
handelchange(event)
{
    this.setState(
        {
            input : event.target.value
        }
    )
}
handeltext()
{
    this.props.messagemake(this.state.input)
   this.setState(
    {
        input:''
    }
   )

}



  render(){
    return(
        <>
       <div className="flexr">
        <input onChange={this.handelchange} type="text" placeholder="type your text" value={this.state.input}></input>
        <button className="btn" onClick={this.handeltext}>send</button>
       </div>

        </>
    )
  }
}