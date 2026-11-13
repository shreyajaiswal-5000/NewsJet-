import React, { Component } from 'react';

export class Newsitem extends Component {
  
  render() {
     let {title,description,imageUrl,newsUrl,author,date}= this.props;
    return (
      <div className="my-3">

        <div className="card" style={{ backgroundColor : "#000" , color:"#c7a6a6"}}>
          < img src={imageUrl?imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_OLkO2JEC5DSI1Ql-KBkE6J11NDd8-JUwKwn8joxNw&s=10" } className="card-img-top" alt="..."
          style= {{height:"200px", objectFit:"cover"}} />
          <div className="card-body">
            <h4 className="card-title">{title}<span class="badge badge-subtle theme-primary">New</span></h4>
            <p className="card-text">{description}...</p>
            <p className="card-text fg-2"><small className="fg-3">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  };
}

export default Newsitem;
