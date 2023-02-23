import { Flex, Link } from '@chakra-ui/layout';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Flex px="15px" py="10px" align="center" justify='space-between' bg='teal.50'>
        <Flex>
          <Link mr='10px'>
            <NavLink to={'/'}>Home</NavLink>
          </Link>
          {isLoggedIn && <Link><NavLink to={'/phonebook'}>Phonebook</NavLink></Link>}
        </Flex>

        {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
      </Flex>
    </header>
  );
};
