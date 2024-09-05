import { PortfolioItemApiInterface } from "../models/api/portfolio-item-api.model";
import { PortfolioItemInterface } from "../models/portfolio-item.model";

export class PortfolioItemAdapter {
    static adapt(item: PortfolioItemApiInterface): PortfolioItemInterface {
        return {
            title: item.title,
            description: item.description,
            imageUrl: item.imageUrl
        };
    }
}