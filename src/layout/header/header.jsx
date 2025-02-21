import {
    Badge,
    Box,
    Container,
    Icon,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material"
import logo from "../../assets/image/siteLogo.png"
import {
    SvgLikeIcon,
    SvgLocation,
    SvgProfileIcon,
    SvgSavatIcon
} from "../../assets/svg/export"

export const Header = () => {
    return (
        <Container padding={0}>
            <Box padding={0}>
                <Stack paddingTop={3.75} direction="row" spacing={7.5} alignItems={"center"}>
                    <Box pl={0} component="img" src={logo} alt="logo" width={220} />
                    <Stack direction="row">
                        <IconButton>
                            <SvgLocation aliginItems={"center"} spacing={8} />
                        </IconButton>
                        <Typography paddingY={1.625} sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "100%",
                            color: "#1d1d1d"
                        }}>Алматы</Typography>
                    </Stack >
                    <Stack width={602}>
                        <TextField
                            id="outlined-basic"
                            placeholder="Поиск по товарам"
                            variant="standard"
                            size="small"
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={4} alignContent={"center"}>
                        <IconButton>
                            <SvgProfileIcon />
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={5} color="error">
                                <SvgLikeIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color="error">
                                <SvgSavatIcon />
                            </Badge>
                        </IconButton>
                    </Stack>
                </Stack>
            </Box >
            <Box>
                <Stack paddingY={4.125} spacing={9} direction={"row"}>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Ковры</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Коврики</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Для ванной</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Дорожки</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Особенные ковры</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Центр поддержки</Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#1d1d1d",
                    }}>Контакты</Typography>
                </Stack>
            </Box>
        </Container>
    )
}
