import { createFakeContact } from '../utils/createFakeContact.js';
import { updateContacts } from './updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const generateContacts = async (number) => {
  const constaсtsList = await getAllContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);

  const data = [...constaсtsList, ...newContactsList];
  await updateContacts(data);
};

generateContacts(5);
