import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors"

export const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
    <Flex align='center'>
            <Text mr='10px'>Welcome, {name}</Text>
            <Button size='sm' type="button" onClick={()=>dispatch(logOut())}>Logout</Button>
     </Flex>
 )
}