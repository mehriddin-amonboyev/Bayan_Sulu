import { Box, Container, Grid2 } from "@mui/material"
import { ProductCard } from "../../../components/productCard"

export const NewProduct = () => {
    return (
        <>
            <Box py={"100px"}>
                <Container maxWidth="xl">
                    <Grid2 container spacing={"40px"}>
                        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <ProductCard />
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}