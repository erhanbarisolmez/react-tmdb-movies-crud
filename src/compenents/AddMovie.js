import React from "react";
import { Link } from "react-router-dom";
var serialize = require('form-serialize');

class AddMovie extends React.Component{
   

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        //console.log(newMovie);
        this.props.onAddMovie(newMovie);
        window.history.back('/');
    }


    render(){

        return(
            
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" 
            id="disabledInput" type="text" 
            placeholder="Fill The Form To Add A Movie" disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10 float-start">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" 
                        className="form-control"
                        name="name"
                        required/>                  
                     </div>
                     <div className="form-group col-md-2 float-end">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="text" 
                        className="form-control"
                        name="rating"/>  
                </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input type="text" 
                        className="form-control"
                        name="imageURL"/>     
                     </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextArea">Overview</label>
                        <textarea 
                        className="form-control"
                        name="overview" rows="5"/>   
                    </div>
                </div>
                
               
                <input  type="submit" className="btn btn-danger d-block w-100" value="Add Movie" />
                <Link to="/" type = "button"
                    className= "btn btn-md btn-secondary  float-end w-100"
                   > Movie List
                    </Link>
            </form>
            </div>
            
          )
        
    }
}

export default AddMovie;