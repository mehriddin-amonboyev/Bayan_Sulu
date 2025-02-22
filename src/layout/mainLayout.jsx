import { Box, Container, Stack } from "@mui/material"
import { Header } from "./header/header"
import { Outlet } from "react-router-dom"
import { Footer } from "./footer/footer"

export const MainLayout = ({ children }) => {
    return (
        <Stack >
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Stack>
    )
}