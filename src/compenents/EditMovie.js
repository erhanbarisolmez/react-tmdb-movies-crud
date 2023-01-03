import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
class EditMovie extends React.Component{
    state = {
        imageURL : "",
        name : "",
        overview : "",
        rating : ""
    }
    
    componentDidMount = async() => {
        
        const id = window.location.pathname.replace("/edit/", "");
        console.log(id);
        const response = await axios.get(`http://localhost:3003/movies/${id}`);
        const movie = response.data;
        this.setState({
            imageURL : movie.imageURL,
            name : movie.name,
            overview : movie.overview,
            rating : movie.rating
        })

      }
    
    onInputChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    this.setState({
        [e.target.name] : e.target.value
    })
     }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const {name, imageURL, overview, rating} =  this.state;
        const id = window.location.pathname.replace("/edit", "");
        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }
         this.props.onEditMovie(id, updatedMovie);
        
         window.history.back('/');
    }


    render(){

        return(
            
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" 
            id="disabledInput" type="text" 
            placeholder="EDIT The Form To UPDATE A Movie" disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10 float-start">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" 
                        className="form-control"
                        name="name"
                        defaultValue={this.state.name}
                        onChange = {this.onInputChange}
                        required/>                  
                     </div>
                     <div className="form-group col-md-2 float-end">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="text" 
                        className="form-control"
                        name="rating"
                        defaultValue={this.state.rating}
                        onChange = {this.onInputChange}
                        required/>     
                </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input type="text" 
                        className="form-control"
                        name="imageURL"
                        defaultValue={this.state.imageURL}
                        onChange = {this.onInputChange}
                        required/>         
                     </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextArea">Overview</label>
                        <textarea 
                        className="form-control"
                        name="overview" rows="5"
                        defaultValue={this.state.overview}
                        onChange = {this.onInputChange}
                        required/>      
                    </div>
                </div>
                
               
                <input  type="submit" className="btn btn-danger d-block w-100" value="Edit Movie" />
                <Link to="/" type = "button"
                    className= "btn btn-md btn-secondary  float-end w-100"
                   > Movie List
                    </Link>
            </form>
            </div>
            
          )
        
    }
}

export default EditMovie;