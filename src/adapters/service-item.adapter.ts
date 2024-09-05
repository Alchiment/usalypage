import { ServiceItemApiInterface } from "../models/api/service-item-api.model";
import { ServiceItemInterface } from "../models/service-item.model";

export class ServiceItemAdapter {
    static adapt(item: ServiceItemApiInterface): ServiceItemInterface {
        return {
            title: item.title,
            description: item.description,
            isActive: item.active
        };
    }
}