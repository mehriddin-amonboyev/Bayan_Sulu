import { Container, Stack } from "@mui/material";
import { Navbar } from "./components/navbar";
import { HeaderSearch } from "./components/header-search";
import { HeaderButtons } from "./components/header-buttons";
import { COLORS } from "../../config/colors";

export const Header = () => {
    return (
        <Container maxWidth="xl">
            <Stack direction={"row"} py={"31px"} >
                <HeaderSearch />
                <HeaderButtons />
            </Stack>

            <Navbar bgcolor={COLORS.lightGrey} />

        </Container>
    )
}
