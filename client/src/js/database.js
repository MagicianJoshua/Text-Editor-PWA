import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Putting to Jate");

  const JateDb = await openDB("jate", 1);

  const transaction = JateDb.transaction("jate", "readwrite");

  const store = transaction.objectStore("jate");

  const request = store.add({id:1, value: content });

  const result = await request;

  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");

<<<<<<< HEAD
  const JateDb = await openDB("jate", 1); 
=======
  const JateDb = await openDB("jate", 2);
>>>>>>> be655ad49c78039c7d3e32bb7038c2171e316888

  const transaction = JateDb.transaction("jate", "readonly");

  const store = transaction.objectStore("jate");

  const request = store.getAll();

  const result = await request;

  console.log("Getting from database", result);

  return result;
};

initdb();
