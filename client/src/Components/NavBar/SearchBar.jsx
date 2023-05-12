import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
    console.log(searchString);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Cadena de búsqueda: ${searchString}`);
    //dispatch(getByName(searchString)); // envío el string a la función de búsqueda;
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
            marginLeft: "-100px",
          }}
          
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
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
