import { vehicleList } from "@/data/vehicleMockData";
import { vehicleService } from "@/services/vehicleService";
import { VehicleResponse } from "@/types/Vehicle";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const VehiclePaginationSchema = z.object({
  page: z.number().min(1),
  filterData: z.object({
    manufacturer: z.string(),
    type: z.string(),
    year: z.string(),
  }),
});

export async function POST(request: NextRequest): Promise<NextResponse<VehicleResponse>> {
  const pageSize = 3;

  //Validate the request body
  const { page, filterData } = VehiclePaginationSchema.parse(await request.json());
  

  const filteredVehicles = await vehicleService.getFilteredVehicles(vehicleList, filterData);
  const totalVehicles = filteredVehicles.length;
  
  const vehicles = await vehicleService.getPaginatedVehicles(filteredVehicles, page, pageSize);
 
  const totalPages = Math.ceil(totalVehicles / pageSize);

  const response = {
    data: vehicles,
    totalPages,
  };

  return NextResponse.json(response);

}
