const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await getAll();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

module.exports = {
  getAll,
  getContactById,
};
