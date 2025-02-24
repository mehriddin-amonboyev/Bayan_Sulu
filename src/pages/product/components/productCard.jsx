import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import { COLORS } from "../../../config/colors"
import { Valyuta, Valyuta2 } from "../../../assets/svg/export"

export const ProductCard = ({ product }) => {

    return (
        <Box >
            <Typography
                variant="h5"
                color={COLORS.titleColor}
                mt={"16px"}
            >
                Elexus Semerkant 1763 Coken Orta Beige
            </Typography>
            <Stack position={"relative"} direction={"row"} spacing={2} alignItems={"center"} pt={1} >
                <Typography variant="h4" color={COLORS.greyText} display={"flex"} alignItems={"center"} gap={1}><Rating readOnly value={product.rating} /> {product.commentary} отзывов</Typography>
                <Typography variant="h4" color={COLORS.greyText}>В наличии: 10 штук</Typography>
                <Typography position={"absolute"} variant="h4" color={COLORS.greyText} bottom={2} right={0}>Код товара: BAL733</Typography>
            </Stack>
            <hr />
            <Stack direction={"row"} spacing={5} pt={3}>
                <Stack direction={"column"} spacing={5}>
                    {product.img.slice(0, 3).map((src, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={src}
                            alt={`Image ${index + 1}`}
                            sx={{
                                width: "180px",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    ))}
                </Stack>
                <Box
                    key={product.img[3]}
                    component={"img"}
                    src={product.img[3]}
                    alt={`Image 4`}
                    sx={{
                        width: "620px",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
                <Box> 
                    <Stack direction={'row'} spacing={6}>
                        <Box>
                            <Typography variant="h4" color={COLORS.greyText}>Цена:</Typography>
                            <Typography variant="h5" >{product.price} <Valyuta2 color={"#1d1d1d"} /> </Typography>
                            <Typography variant="h4" color={COLORS.greyText} pt={3}>Размер: {product.size} см</Typography>
                            <Typography variant="h4" color={COLORS.green} pt={2}>Перейти к описанию</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" color={COLORS.greyText}>В рассрочку</Typography>
                            <Typography variant="h5" >{product.installment.price} <Valyuta2 color={"#1d1d1d"} /> </Typography>
                            <Typography variant="h4" color={COLORS.greyText} pt={3}>Количество: {product.size} см</Typography>
                            <Typography variant="h4" color={COLORS.green} pt={2}>Подробнее о рассрочке</Typography>
                        </Box>
                    </Stack>
                    <Button />
                </Box>
            </Stack >
        </Box >
    )
}