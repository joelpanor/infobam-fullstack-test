import { vehicleList } from "@/data/vehicleMockData";
import { vehicleService } from "@/services/vehicleService";
import { VehicleResponse } from "@/types/Vehicle";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const VehiclePaginationSchema = z.object({
  page: z.number().min(1),
});

export async function POST(request: NextRequest): Promise<NextResponse<VehicleResponse>> {

  //Validate the request body
  const { page } = VehiclePaginationSchema.parse(await request.json());
  
  const pageSize = 3;
  const vehicles = await vehicleService.getPaginatedVehicles(vehicleList, page, pageSize);
  const totalVehicles = vehicleService.getTotalVehicles();
 
  const totalPages = Math.ceil(totalVehicles / pageSize);

  const response = {
    data: vehicles,
    totalPages,
  };

  return NextResponse.json(response);

}
