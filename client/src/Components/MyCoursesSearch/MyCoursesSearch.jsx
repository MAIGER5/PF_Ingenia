import { InputAdornment, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getCoursesSearch } from "../../Redux/Actions/SerchcCourses";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function MyCoursesSearch() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCoursesSearch(searchString));
    navigate("/SerchCardResults");
  }

  function handleCLICK(event) {
    event.preventDefault();
    dispatch(getCoursesSearch(searchString));
    navigate("");
  }

  return (
    <>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <TextField id="search2" label="Buscar Mis Cursos" variant="filled" type="search"
            sx={{ background: 'white', }}
            inputProps={{ style: { color:"grey", background: "white", } }}
            InputLabelProps={{ style: { color: 'grey', },}}

            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Button variant="text" onClick={handleCLICK} sx={{ color: 'grey' }}>
                    <NavLink to="">
                    <SearchIcon style={{ color: 'grey' }} />
                    </NavLink>
                  </Button>
                </InputAdornment>
                ),}}/>
      </form>
    </>
  );
}