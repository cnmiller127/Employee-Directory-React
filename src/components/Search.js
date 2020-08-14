import React, {Component} from "react";
import "../style.css"

class Search extends Component {
state = {value: ""};

constructor(props) {
    super(props);
}
    render(){

   return(
       <form className = "mx-3 mt-3">
           <input className = "search" placeholder="Employee Search" />
           <label>🔍</label>
       </form>
   )
    
    }

}

export default Search;