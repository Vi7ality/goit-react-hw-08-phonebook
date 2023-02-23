import { Button } from '@chakra-ui/button';
import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';


export function Contacts() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
      <UnorderedList px='15px' py='10px' spacing='8px'>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id} display='flex'>
              <Text mr='5px'>{name}:</Text>
              <Text mr='10px' href={`tel: ${number}`}>{number}</Text>
              <Button size='sm'
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
  );
}
