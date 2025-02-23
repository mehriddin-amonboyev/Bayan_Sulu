import React from "react";
import styled from "@emotion/styled";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { LikeIcon } from "../assets/svg/likeIcon";
import { Valyuta } from "../assets/svg/valyuta";
import { COLORS } from "../config/colors";

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

export const ProductCard = ({ product }) => {

    return (
        <ProductWrapper>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <CardBadge> Новинка </CardBadge>
                <Like > <LikeIcon /> </Like>
            </Stack>
            <Box mx={"37px"} mb={"20px"} textAlign={"center"} width={"176px"} height={"236px"} overflow={"hidden"}>
                <img width={"100%"} height={"100%"} objectFit={"cover"} src={product.img} alt="img" />
            </Box>
            <Stack spacing={1}>
                <Typography variant="h3" maxWidth={"175px"}>{product.name} </Typography>
                <Typography variant="h4"> {product.size} </Typography>
                <Typography variant="h4"> Производитель: {product.manuFacturer} </Typography>
            </Stack >
            <Stack direction={"row"} spacing={1}>
                <Rating readOnly value={product.rating} />
                <Typography variant="h4">{product.commentary} отзывов</Typography>
            </Stack>
            <Stack direction={"row"} mt={2} spacing={2}>
                <Stack direction='column' spacing={1}>
                    <Typography variant="h4" color={COLORS.greyText} >Цена</Typography>
                    <Typography variant="h3">{product.price} <Valyuta sx={{ paddingLeft: "4px" }} /></Typography>
                </Stack>
                <Stack direction='column' spacing={1}>
                    <Typography variant="h4" sx={{ color: COLORS.greyText }} >В рассрочку</Typography>
                    <Stack direction={"row"} spacing={0.5}>
                        <Typography variant="h4" lineHeight={"100%"} color={COLORS.white} bgcolor={COLORS.primary} padding={"2px 7px"} display={"flex"} gap={"4px"} alignItems={"center"}>
                            {product.installment.price}
                            <Valyuta color={COLORS.white} sx={{ paddingLeft: "4px" }} />
                        </Typography>
                        <Typography variant="h4" sx={{ color: COLORS.greyText }} py={"1px"}>x {product.installment.monthlyPayment} мес</Typography>
                    </Stack>

                </Stack>
            </Stack>

        </ProductWrapper>
    );
};