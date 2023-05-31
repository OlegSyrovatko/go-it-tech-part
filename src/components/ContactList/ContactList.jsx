import { useSelector } from 'react-redux';

import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';

import ContactListItem from '../ContactListItem';
import Filter from '../Filter';

import { UL } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerFilter)
  );

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      {filteredContacts.length > 0 && (
        <UL>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </UL>
      )}
    </>
  );
};
export default ContactList;
