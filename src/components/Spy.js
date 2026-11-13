import React,{Component} from 'react'
import preview from '../preview.gif'

export class Spy extends Component {
  render(){  
  return (
    <div className="text-centre">
      <img src={preview} alt="loading.."/>

    </div>
  )
  }


}
export default Spy;
