
import { Container } from '@chakra-ui/react'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Container maxW='container.xl' padding={0}>
        <AppBar></AppBar>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Container>
  );
};
