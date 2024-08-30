// import { updateContacts } from '../utils/updateContacts.js';

// export const removeAllContacts = async () => {
//   await updateContacts([]);
// };

// removeAllContacts();

import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
};

removeAllContacts();
