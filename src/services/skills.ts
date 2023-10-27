import app from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default class Skills {
  private db = getFirestore(app);
  private colRef = collection(this.db, 'skills');

  async list(): Promise<Record<string, string>[] | null> {
    try {
      const snapshot = await getDocs(this.colRef);
      console.log('hit');
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (ex) {
      console.error(ex);
    }
    return null;
  }
}
