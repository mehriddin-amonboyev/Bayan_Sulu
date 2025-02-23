import { Box, Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom"
import { productData } from "../../data/productData";
import { ProductCard } from "./components/productCard";

export const Product = () => {
    const { id } = useParams();

    if (!productData.some((item) => item.id == id)) {
        return "not found"
    }
    return (
        <Container>
            <Box>
                {productData.map((item) => item.id == id  ? (
                    <ProductCard key={item.id} product = {item} />
                ) : null
                )}
            </Box>
        </Container>
    )
}