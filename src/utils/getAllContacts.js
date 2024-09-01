import { readFile } from './readFile.js';

export const getAllContacts = async () => {
  const contacts = await readFile();
  return contacts;
};
