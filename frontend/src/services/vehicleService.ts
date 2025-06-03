import { Vehicle, VehicleFilterData } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleMockData";


class VehicleService {

  getPaginatedVehicles(vehicles : Vehicle[], page: number, pageSize: number) : Vehicle[] {
    return vehicles.slice((page - 1) * pageSize, page * pageSize);
  }

  getTotalVehicles() : number {
    return vehicleList.length;
  }

}

export const vehicleService = new VehicleService();