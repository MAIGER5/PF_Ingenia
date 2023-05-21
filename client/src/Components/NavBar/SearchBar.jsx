import { InputAdornment, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getCoursesSearch } from "../../Redux/Actions/SerchcCourses";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const  dispatch =useDispatch()

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
    
  }
 
  function handleSubmit(event) {
    event.preventDefault();
   dispatch(getCoursesSearch(searchString)); 
  }
  function handleCLICK(event) {
    event.preventDefault();
   dispatch(getCoursesSearch(searchString)); 
  }
  return (
    <>
      {" "}
      <form onChange={handleChange}>
        <TextField
          id="search"
          label="Buscar"
          type="search"
          variant="outlined"
          sx={{
            width: {
              sm: "200px",
              md: "200px",
              lg: "400px"
            },            
          }}
          
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Button variant="text" color="primary" onClick={handleCLICK}>
                <Link to="/SerchCardResults" style={{color:"orange"}}> <SearchIcon/></Link>
                </Button>
                
              
              </InputAdornment>
            ),
            style: {
               borderRadius: "40px",
               alignItems: "center",
               justifyContent:"center",
            }   
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        />
      </form>
    </>
  );
}
