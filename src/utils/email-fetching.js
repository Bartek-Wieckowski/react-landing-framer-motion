import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig";

async function fetchUniqueEmailsFromFirebase() {
  const database = getDatabase(app);

  try {
    const snapshot = await get(ref(database));
    const allData = snapshot.val();

    const uniqueEmailsSet = new Set();

    for (const webinarKey in allData) {
      const webinarData = allData[webinarKey];
      for (const firebaseKey in webinarData) {
        const fbKey = webinarData[firebaseKey];
        for (const emailKey in fbKey) {
          const email = fbKey[emailKey].email;
          uniqueEmailsSet.add(email);
        }
      }
    }

    const allEmailsInDB = Array.from(uniqueEmailsSet);

    return allEmailsInDB;
  } catch (error) {
    console.log(error);
  }
}
fetchUniqueEmailsFromFirebase();
