import { collection, getDocs } from "firebase/firestore"; 
import { PortfolioItemApiInterface } from "../models/api/portfolio-item-api.model";
import { PortfolioItemAdapter } from "../adapters/portfolio-item.adapter";
import db from "../utils/firebase/database.util";

export async function getPortfolioItems() {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    const items = querySnapshot.docs.map((doc) => doc.data() as PortfolioItemApiInterface);
    return items.map((item) => PortfolioItemAdapter.adapt(item));
}