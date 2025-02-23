import { Box, Container, Stack, } from "@mui/material";
import { navbarLinks } from "./heroData";
import { Navbar } from "./components/navbar";
import { HeaderSearch } from "./components/header-search";
import { HeaderButtons } from "./components/header-buttons";

export const Header = () => {
    return (
        <Container maxWidth="xl">
            <Stack direction={"row"}>
                <HeaderSearch />
                <HeaderButtons />
            </Stack>
            <Box >
                <Navbar ></Navbar>
            </Box>

        </Container>
    )
}
