"use client";

import { useEffect } from "react";
import { VehicleFilterData, VehicleResponse } from "@/types/Vehicle";
import { useFetch } from "@/hooks/useFetch";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/pagination/Pagination";
import { FaInbox } from "react-icons/fa";
import VehiculeCard from "./VehicleCard";
import { Vehicle } from "@/types/Vehicle";
import Loader from "../ui/Loader";
import VehicleFilter from "./VehicleFilter";
import useVehicleFilter from "@/hooks/vehicle/useVehicleFilter";

export default function VehiculeList() {
  const { isFetching, data, post } = useFetch<VehicleResponse>("/api/vehicles");

  const { currentPage, goToNextPage, goToPrevPage, goToPage, setTotalPages } = usePagination({
    currentPage: 1,
    totalPages: 0,
  });

  const { filterData, setFilterData, filterOptions, isFetching: isFilterFetching } = useVehicleFilter();

  const fetchVehicles = async () => {
    const response = await post({
      page: currentPage,
      filterData: filterData,
    });
    setTotalPages(response?.totalPages || 0);
  }


  useEffect(() => {
   fetchVehicles();
  }, [currentPage]);

  useEffect(() => {
    if(currentPage > 1) {
      goToPage(1);
    }
    else {
      fetchVehicles();
    }
  }, [filterData]);

  console.log(data);

  if (isFetching || isFilterFetching) {
    return <Loader/>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <VehicleFilter
          manufacturerOptions={filterOptions.manufacturersOptions}
          typeOptions={filterOptions.typesOptions}
          yearOptions={filterOptions.yearsOptions}
          isFetching={isFilterFetching || isFetching}
          filter={filterData}
          setFilter={(filter: VehicleFilterData) => setFilterData(filter)}
        />  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {data?.data.map((vehicle: Vehicle) => (
          <div key={vehicle.id} className="w-full h-full flex justify-center items-center">
            <VehiculeCard vehicle={vehicle}/>
          </div>
        ))}
      </div>
      {data?.data.length === 0 && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <FaInbox className="text-slate-300 text-4xl" />
          <p className="text-center text-gray-500">No vehicles found</p>
          <p className="text-center text-gray-500">Please try again with different filters</p>
        </div>
      )}
      {!!data?.data.length && data?.data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data?.totalPages || 0}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          goToPage={goToPage}
        />
      )}
    </div>
  );
}