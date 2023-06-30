const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "getById":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({
  action: "add",
  name: "Alla Raymond",
  email: "alla.ante@vestibul.co.uk",
  phone: "(044) 914-3792",
});
invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
