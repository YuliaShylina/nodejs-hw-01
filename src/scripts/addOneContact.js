import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from '../utils/getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const addOneContact = async () => {
  const contactsList = await getAllContacts();
  const newContact = createFakeContact();

  const updatedContactsList = [...contactsList, newContact];

  await updateContacts(updatedContactsList);
};

addOneContact();
