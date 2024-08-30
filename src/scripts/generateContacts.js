// import { createFakeContact } from '../utils/createFakeContact.js';
// import { updateContacts } from '../utils/updateContacts.js';
// import { getAllContacts } from './getAllContacts.js';

// export const generateContacts = async (number) => {
//   const constaсtsList = await getAllContacts();
//   const newContactsList = Array(number).fill(0).map(createFakeContact);

//   const data = [...constaсtsList, ...newContactsList];
//   await updateContacts(data);
// };

// generateContacts(5);

import { readFile } from '../utils/readFile.js';
import { updateContacts } from '../utils/updateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  const contacts = await readFile();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const newlistContacts = [...contacts, ...newContacts];
  await updateContacts(newlistContacts);
};

generateContacts(5);
