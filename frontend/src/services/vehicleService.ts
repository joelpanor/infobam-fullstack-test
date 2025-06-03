import { Vehicle, VehicleFilterData } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleMockData";
import { vehicleManufacturerOptions } from "@/data/vehicleManufacturerOptions";
import { vehicleTypeOptions } from "@/data/vehicleTypeOptions";
import { vehicleYearOptions } from "@/data/vehicleYearOptions";
import { vehicleSortByOptions } from "@/data/vehicleSortByOptions";


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

  async getSortedVehicles(vehicles: Vehicle[], sortBy: string) {
    
    if(sortBy === "Lower price") {
      return vehicles.sort((a, b) => a.price - b.price);
    }
    if(sortBy === "Higher price") {
      return vehicles.sort((a, b) => b.price - a.price);
    }
    if(sortBy === "Older") {
      return vehicles.sort((a, b) => a.year - b.year);
    }
    if(sortBy === "Newer") {
      return vehicles.sort((a, b) => b.year - a.year);
    }

    return vehicles;
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

  async getVehicleSortByOptions() {
    return vehicleSortByOptions;
  }

  getTotalVehicles() : number {
    return vehicleList.length;
  }

}

export const vehicleService = new VehicleService();