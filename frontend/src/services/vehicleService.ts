import { Vehicle, VehicleFilterData } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleMockData";


class VehicleService {

  async getPaginatedVehicles(vehicles : Vehicle[], page: number, pageSize: number) {
    return vehicles.slice((page - 1) * pageSize, page * pageSize);
  }

}

export const vehicleService = new VehicleService();