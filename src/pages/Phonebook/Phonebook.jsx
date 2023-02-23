import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';


 function Phonebook() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   return (

    <Flex justify='center'>
 
      <VStack w='full' h='full' spacing='10px' px='15px' alignItems='flex-start'>
        <Heading size='xl'>Phonebook</Heading>
        <ContactForm></ContactForm>
      </VStack>
      <VStack bg='gray.50' w='full' h='full' spacing='10px' padding='10px' alignItems='flex-start'>
        <Heading size='xl'>Contacts</Heading>
        <Filter></Filter>
        <Contacts></Contacts>
        {isLoading && !error && <Text>Loading...</Text>}
      </VStack>

    </Flex>
  );
}

export default Phonebook;
