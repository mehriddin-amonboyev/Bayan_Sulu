import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/siteLogo.png";
import { LocationIcon, SearchIcon } from "../../../assets/svg/export";

export const HeaderSearch = () => {
  return (
    <Stack alignItems={"center"} direction={"row"} gap={"60px"} flexGrow={1}>
      <Link to={"/"}>
        <img src={logo} alt="img" />
      </Link>
      <Stack alignItems={"center"} direction={"row"}>
        <IconButton>
          <LocationIcon />
        </IconButton>
        <Typography>Алматы</Typography>
      </Stack>
      <Stack flexGrow={1}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment sx={{ mb: "10px" }} position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          placeholder="Поиск по товарам"
          variant="standard"
          size="small"
        />
      </Stack>
    </Stack>
  );
};
