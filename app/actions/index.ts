import { db } from 'core/firebase';
import { get, ref } from 'firebase/database';

export default async function getGlobalDataHandler() {
  const snapshot = await get(ref(db, '/introduction'));

  return snapshot.exists() ? snapshot.val() : null;
}
