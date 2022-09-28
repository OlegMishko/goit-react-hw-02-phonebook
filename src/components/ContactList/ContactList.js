import PropTypes from 'prop-types';
import { List, DeleteBtn, ListItem ,} from './Contact.styled.jsx';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}: </p>
          <p>{number}:</p>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};