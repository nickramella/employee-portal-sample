"use client"
import React, { useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { redirect } from "next/navigation";

interface SearchProps {
    label: string,
    options: string[]
}

interface Option {
    id: number,
    label: string,
    value: string,
    link: string
}

const Search = ({label, options}: SearchProps) => {
  const [value, setValue] = useState<Option|null>(null);
  const [inputValue, setInputValue] = useState("");

  const searchOptions = [
  { id: 1, label: "Personal Information", value: "personalInfo", link: "/personal-info" },
];

  return (
    <AppRouterCacheProvider>
        <Box sx={{ display: "flex", alignItems: "center", borderRadius: "10px", width: "60%", bgcolor: "white", p: "5px" }}>
            <Autocomplete
                value={value}
                onChange={(event, value) => {
                    setValue(value);
                    if (value) redirect(value.link);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                options={searchOptions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search widgets..."
                        variant="standard"
                    />
                )}
                // Recommended props for a combo box-like experience:
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                sx={{ flexGrow: 1 }}
            />
        </Box>
    </AppRouterCacheProvider>
  );
};

export default Search