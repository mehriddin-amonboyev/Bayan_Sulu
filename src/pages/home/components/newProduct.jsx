import { Box, Container, Grid2, Stack, Typography } from "@mui/material"
import { productData } from "../../../data/productData"
import { Link } from "react-router-dom"
import { ProductCard } from "../../../components/productCard";
import { COLORS } from "../../../config/colors";

export const NewProduct = () => {
    return (
        <>
            <Box py={"100px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
                        <Typography variant="h2" fontFamily={"Ubuntu"}> Новинки </Typography>
                        <Typography
                            variant="h3"
                            lineHeight={"140%"}
                            sx={{
                                textDecoration: "underline",
                                textDecorationSkipInk: "none",
                                color: COLORS.green
                            }}
                        >Все новинки</Typography>
                    </Stack>
                    <Grid2 container spacing={"40px"} marginTop={"29px"}>
                        {productData.map((item) =>
                            (item.status === "new" && item.id < 5) ? (
                                <Grid2 size={{ xs: 12, sm: 6, md: 4, xl: 3 }} key={item.id}>
                                    <Link sx={{ textDecoration: "none" }}
                                        to={`/product/${item.id}`}>
                                        <ProductCard
                                            key={item.id}
                                            product={item}
                                        />
                                    </Link>
                                </Grid2>
                            ) : null
                        )}
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}