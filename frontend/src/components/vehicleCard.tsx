"use client";
import { FaCalendarAlt, FaGasPump, FaCog, FaRoad } from "react-icons/fa";
import { Vehicle } from "@/types/Vehicle";


interface VehiculeCardProps {
    vehicle: Vehicle;
}

export default function VehiculeCard({ vehicle }: VehiculeCardProps) {
    
    return (
        <div className="card bg-base-100 min-height-[400px] h-full w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-400">
            <figure className="relative h-48">
                <img
                    src={vehicle.images[0]}
                    alt={vehicle.model}
                    className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-primary-content px-3 py-1 rounded-full">
                    {vehicle.price} €
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold mb-2">{vehicle.model}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGasPump className="text-primary" />
                        <span>{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCog className="text-primary" />
                        <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRoad className="text-primary" />
                        <span>{vehicle.mileage} km</span>
                    </div>
                </div>
            </div>
        </div>
    );
}