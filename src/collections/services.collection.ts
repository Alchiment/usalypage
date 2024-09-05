import { collection, getDocs } from "firebase/firestore";
import { ServiceItemApiInterface } from "../models/api/service-item-api.model";
import { ServiceItemAdapter } from "../adapters/service-item.adapter";
import db from "../utils/firebase/database.util";

export async function getServiceItems() {
    const querySnapshot = await getDocs(collection(db, "services"));
    const items = querySnapshot.docs.map((doc) => doc.data() as ServiceItemApiInterface);
    return items.map((item) => ServiceItemAdapter.adapt(item));
}
