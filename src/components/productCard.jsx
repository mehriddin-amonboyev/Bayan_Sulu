import React from "react";
import img from "../assets/image/gilam3.png";
import styled from "@emotion/styled";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { LikeIcon } from "../assets/svg/likeIcon";

const ProductWrapper = styled.div`
  border-radius: 10px;
  height: 524px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  padding-top: 68px;
  padding-bottom: 21px;
  padding-left: 20px;
  padding-right: 20px;
`;

const CardBadge = styled.span`
  background: #618c78;
  padding: 3px 20px;
  display: inline-block;
  position: absolute;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #fff;
  top: 20px;
  left: 0;
`;
const Like = styled.span`
  padding:3px;
  position:absolute;
  top:20px;
  right:20px;

`

export const ProductCard = ({product}) => {
  return (
    <ProductWrapper>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <CardBadge> Новинка </CardBadge>
        <Like > <LikeIcon /> </Like>
      </Stack>
      <Box mx={"37px"} mb={"20px"} textAlign={"center"} width={"176px"} height={"236px"} overflow={"hidden"}>
        <img width={"100%"} height={"100%"} objectFit={"cover"} src={img} alt="img" />
      </Box>
      <Stack spacing={1}>
        <Typography variant="h3" maxWidth={"175px"}> Aster Q893A LVIZON LVIZON</Typography>
        <Typography variant="h4"> Размер: 60x100 </Typography>
        <Typography variant="h4"> Производитель: Казахстан </Typography>
      </Stack >
      <Rating readOnly value={4} /> </ProductWrapper>
  );
};