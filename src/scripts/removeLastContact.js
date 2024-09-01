import { readFile } from '../utils/readFile.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await readFile();
  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
