import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterQuery } from 'redux/selectors';


export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterQuery);

  const filterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <FormControl>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        placeholder='Type a name'
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={filterChange}
      />
    </FormControl>
  );
}
