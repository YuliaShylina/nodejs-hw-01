// export const addOneContact = async () => {
//   const constaсtsList = await getAllContacts();
//   const newContactsList = createFakeContact();

//   const data = [...constaсtsList, newContactsList];
//   await updateContacts(data);
// };

// addOneContact();

import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const addOneContact = async () => {
  const contaсtsList = await getAllContacts();
  const newContactsList = createFakeContact();

  const data = [...contaсtsList, newContactsList];
  await updateContacts(data);
};

addOneContact();
