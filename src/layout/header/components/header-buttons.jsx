import { Badge, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { ProfileIcon } from "../../../assets/svg/profileIcon";
import { LikeIcon } from "../../../assets/svg/likeIcon";
import { SavatIcon } from "../../../assets/svg/savatIcon";

export const HeaderButtons = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} ml={"61px"}>
      <IconButton>
        <ProfileIcon />
      </IconButton>
      <Box ml={"48px"} mr={"38px"}>
        <IconButton>
          <Badge badgeContent={5} color="error">
            <LikeIcon />
          </Badge>
        </IconButton>
      </Box>
      <Badge badgeContent={2} color="error">
        <IconButton>
          <SavatIcon />
        </IconButton>
      </Badge>

    </Stack>
  );
};
