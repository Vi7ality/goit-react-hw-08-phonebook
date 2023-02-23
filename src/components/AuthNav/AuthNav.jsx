import { Flex, Link } from '@chakra-ui/layout';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Flex align="center">
      <Link mr='10px'>
        <NavLink to={'/register'}>Register</NavLink>
      </Link>
      <Link>
        <NavLink to={'/login'}>Login</NavLink>
      </Link>
    </Flex>
  );
};
