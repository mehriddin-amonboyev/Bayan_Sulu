import { Box, Container, Stack, Typography } from "@mui/material"
import { COLORS } from "../../../config/colors"
import { SecondaryButton } from "../../../components/secondaryButton"
import product1 from "../../../assets/image/gilam1.png"
import product2 from "../../../assets/image/gilam2.png"
export const Collection = () => {
    return (
        <>
            <Box bgcolor={COLORS.primary} py={"98px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Box  >
                            <Typography
                                mb={"32px"}
                                variant="h2"
                                fontSize={"60px"}
                                color="#f9f9f9"
                            >
                                Новая коллекция ковров Venetta
                            </Typography>
                            <SecondaryButton>Смотреть все</SecondaryButton>
                        </Box>
                        <Stack direction={"row"} spacing={5} paddingL={"50px"}>
                            <Box width={"303px"} >
                                <img width={"100%"} height={"100%"} src={product1} alt="img" />
                            </Box>
                            <Box width={"293px"} >
                                <img width={"100%"} height={"100%"} src={product2} alt="img" />
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}