// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/contacts.js';

// export const getAllContacts = async () => {
//   const data = (await fs.readFile(PATH_DB)).toString();
//   return JSON.parse(data);
// };

// console.log(await getAllContacts());

import { readFile } from '../utils/readFile.js';

export const getAllContacts = async () => {
  const contacts = await readFile();
  return contacts;
};
const contacts = await getAllContacts();
console.log(contacts);
