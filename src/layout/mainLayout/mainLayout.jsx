import { Box, Container } from "@mui/material"
import { Header } from "../header/header"

export const MainLayout = ({ children }) => {
    return (
        <Box >
            <Header />
            {children}
            {/* <footer>Fuuuuuuuuuter</footer> */}
        </Box>
    )
}