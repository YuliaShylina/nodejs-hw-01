import { getAllContacts } from '../utils/getAllContacts.js';

export const countContacts = async () => {
  const contacts = await getAllContacts();
  return contacts.length;
};

const count = await countContacts();
console.log(count);
