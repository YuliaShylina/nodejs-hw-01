// import { updateContacts } from '../utils/updateContacts.js';
// import { getAllContacts } from './getAllContacts.js';

// export const removeLastContact = async () => {
//   const data = await getAllContacts();
//   data.pop();
//   await updateContacts(data);
// };

// removeLastContact();

import { readFile } from '../utils/readFile.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await readFile();
  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
