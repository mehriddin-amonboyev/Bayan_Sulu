import { Container } from "@mui/material"
import { Header } from "../header/header"

export const MainLayout = ({ children }) => {
    return (
        <Container spacing={{padding:0}}>
            <Header />
            {children}
            {/* <footer>Fuuuuuuuuuter</footer> */}
        </Container>
    )
}