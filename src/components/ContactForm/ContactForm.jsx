import { useState } from 'react';

// import { Form, FormButton, FormInput, Label, LabelText } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Text, VStack } from '@chakra-ui/layout';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name} is already exist in your contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing="10px" alignItems="flex-start">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            size='md' 
            placeholder="John Doe"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
          
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Number</FormLabel>
          <Input
            size='md'
            placeholder="+380 67 111 1111"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit">Add contact</Button>
      </VStack>
    </form>
  );
}
