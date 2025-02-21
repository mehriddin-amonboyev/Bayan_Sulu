import { Box, Button, Container, Stack, Typography } from "@mui/material";
import gilam1 from "../../assets/image/gilam1.png";
import gilam2 from "../../assets/image/gilam2.png";

export const NewProduct = () => {
    return (
        <>

            <Box padding={0} sx={{ background: "#618c78" }}>
                <Container>
                    <Stack direction="row" alignItems="center">
                        <Box width={524}>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "60px",
                                lineHeight: "130%",
                                color: "#f9f9f9",
                                marginBottom: "32px"
                            }}>
                                Новая коллекция ковров Venetta
                            </Typography>
                            <Button sx={{
                                color: "#fff",
                                padding: "13px 38px",
                                borderRadius: "10px",
                                background: "#cb4a4a",
                            }}
                                variant="text">
                                Смотреть все
                            </Button>
                        </Box>
                        <Stack maxWidth={96.5} paddingY={6} direction={"row"} >
                            <img src={gilam1} alt="new product" />
                            <img src={gilam2} alt="new product" />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{paddingTop:"99px"}}>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "130%",
                    color: "#1d1d1d",
                }}>
                    Новинки
                    <Typography sx={{
                        paddingLeft: "32px",
                        display: "inline-block",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "140%",
                        textDecoration: "underline",
                        textDecorationSkipInk: "none",
                        color: "#648e7a",
                    }}>
                        Все новинки
                        </Typography>
                </Typography>
                
            </Container>
        </>
    )
}