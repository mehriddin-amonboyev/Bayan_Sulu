import { List, ListItem, ListItemText, Stack } from "@mui/material"

export const Footer = () => {
    return (
        <>
            <Stack direction={"row"} paddingTop={"100px"}>
                <List>
                    <ListItem>
                        <ListItemText>Каталог товаров</ListItemText>
                    </ListItem>
                </List>
            </Stack>
        </>
    )
}