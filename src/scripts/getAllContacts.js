import { getAllContacts } from '../utils/getAllContacts.js';

const displayContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

displayContacts();
