import { Vehicle, VehicleFilterData } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleMockData";
import { vehicleManufacturerOptions } from "@/data/vehicleManufacturerOptions";
import { vehicleTypeOptions } from "@/data/vehicleTypeOptions";
import { vehicleYearOptions } from "@/data/vehicleYearOptions";


class VehicleService {

  getPaginatedVehicles(vehicles : Vehicle[], page: number, pageSize: number) : Vehicle[] {
    return vehicles.slice((page - 1) * pageSize, page * pageSize);
  }

  getFilteredVehicles(vehicles : Vehicle[],filterData: VehicleFilterData) : Vehicle[] {
    console.log(vehicles);
    return vehicles.filter((vehicle) => {
      if(filterData.manufacturer.length > 0 && !filterData.manufacturer.includes(vehicle.manufacturer)) {
        return false;
      }
      if(filterData.type.length > 0 && !filterData.type.includes(vehicle.type)) {
        return false;
      }
      if(filterData.year.length > 0 && !filterData.year.includes(vehicle.year.toString())) {
        return false;
      }
      return true;
    });
  }


  async getVehicleManufacturers() {
    return vehicleManufacturerOptions;
  }

  async getVehicleTypes() {
    return vehicleTypeOptions;
  }

  async getVehicleYears() {
    return vehicleYearOptions;
  }

  getTotalVehicles() : number {
    return vehicleList.length;
  }

}

export const vehicleService = new VehicleService();