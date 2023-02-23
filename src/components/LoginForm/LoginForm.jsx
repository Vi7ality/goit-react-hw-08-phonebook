import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(logIn({email: email, password: password}))

    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <VStack align='flex-start' py="10px" px="15px" maxW='md'>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" required/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" required/>
            </FormControl>
            <Button type="submit">Login</Button>
            </VStack>
        </form>
    )
}