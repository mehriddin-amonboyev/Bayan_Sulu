import { Box, Button, Typography } from "@mui/material"

export const NewProduct = () => {
    return (
        <Box sx={{ background: "#618c78" }}>
            <Typography sx={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "100%",
            }}>
                Новая коллекция ковров Venetta
            </Typography>
<Button color="#cb4a4a">Смотреть все</Button>
        </Box>
    )
}