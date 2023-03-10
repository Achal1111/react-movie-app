import { SearchIcon } from "../Icons";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, TextField, InputAdornment, Collapse } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../../constants";
import { useTheme } from "@mui/material/styles";

const SearchBar = ({ setFilterText, setSelectedMovieName }) => {
  const theme = useTheme();

  const onInputChange = (e) => {
    setFilterText(e.target.value);
  };

  const [checked, setChecked] = useState(false);

  const onClearClick = () => {
    setFilterText("");
    setSelectedMovieName("");
    setChecked(!checked);
  };

  const customizedtextField = (
    <TextField
      id="outlined-basic"
      variant="outlined"
      placeholder="Title, Movies, Keyword"
      sx={{
        width: "550px",
        borderColor: COLORS.BLUE[200],
        backgroundColor: COLORS.BLUE[200],
        [theme.breakpoints.down("sm")]: {
          width: "220px",
        },
        input: {
          "&::placeholder": {
            color: COLORS.GREY[100],
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {<SearchIcon style={{ cursor: "pointer" }} />}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {
              <ClearIcon
                onClick={onClearClick}
                sx={{ color: COLORS.GREY[100], cursor: "pointer" }}
              />
            }
          </InputAdornment>
        ),
      }}
    />
  );

  const handleChange = () => {
    setSelectedMovieName("");
    setChecked((prev) => !prev);
  };
  return (
    <Box sx={{ marginBottom: "50px" }}>
      {!checked && (
        <SearchIcon onClick={handleChange} sx={{ cursor: "pointer" }} />
      )}

      <Collapse orientation="horizontal" in={checked} onChange={onInputChange}>
        {customizedtextField}
      </Collapse>
    </Box>
  );
};

export default SearchBar;
