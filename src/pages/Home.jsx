import { Heading, Link, VStack } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <VStack py='90px'>
            <Heading size='xl'>
                Welcome to Phonebook App
            </Heading>
            {!isLoggedIn && <Heading size='md'>Please <Link color='teal.400'><NavLink to={'/register'}>register</NavLink></Link> or <Link color='teal.400'><NavLink to={'/login'}>login</NavLink></Link> if you already have an account.</Heading>}
         </VStack>   
    )
}

export default Home