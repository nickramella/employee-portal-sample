"use client"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface SearchProps {
    label: string,
    options: string[]
}

const Search = ({label, options}: SearchProps) => {
  return (
    <Autocomplete
      options={options}
      sx={{ width: 300, bgcolor:"white", minWidth: "60%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default Search