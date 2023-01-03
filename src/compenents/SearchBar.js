import React from "react";
import { Link } from "react-router-dom";
class SearchBar extends React.Component{

   handleForSubmit = (event) =>{
    event.preventDefault();
   }
    render(){
   
        return(
            <form onSubmit={this.handleForSubmit}>
                <div className="container">
            <div className="form row">
                <div className="col-10 float-start">
                    <input
                     onChange={this.props.searchMovieProp} 
                     type="text" className="form-control"
                     placeholder="Seach a movie" />
                     </div>
                     <div className = "col-2 float-end">
                    <Link to="/add" type = "button"
                    className= "btn btn-md btn-danger float-end w-90"
                   > Add Movie
                    </Link>
                </div>
                </div>  
              
             
            </div>  
        </form>
          )
        
    }
}

export default SearchBar;