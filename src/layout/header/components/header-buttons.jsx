import { Badge, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { ProfileIcon } from "../../../assets/svg/profileIcon";
import { LikeIcon } from "../../../assets/svg/likeIcon";
import { SavatIcon } from "../../../assets/svg/savatIcon";
import { Link } from "react-router-dom";

export const HeaderButtons = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={5.375}>
      <Link to={"/profile"}>
        <IconButton>
          <ProfileIcon />
        </IconButton>
      </Link>
      <Link to={"/like"}>
        <IconButton>
          <Badge badgeContent={5} color="error">
            <LikeIcon />
          </Badge>
        </IconButton>
      </Link>
      <Link to={"/savat"}>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <SavatIcon />
          </Badge>
        </IconButton>
      </Link>

    </Stack>
  );
};
