import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import { API_URL } from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";


const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const resolvedSearchParams = await searchParams;
    let response = await fetch(
        `${API_URL}/locations`,
        {
            headers: {
                ...(await authHeaders())
            },
            next: {
                tags: ["dashboard:locations"],
            },
        }
    );
    let data: Location[] = await response.json();
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe",
        },
        ...data
    ]
    return (
        <div className="w-2/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={resolvedSearchParams.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={resolvedSearchParams.store} />
                </div>
                <div className="w-6/12">
                    <FormNewLocation store={resolvedSearchParams.store} />
                </div>
                <div className="flex flex-row flex-grow-0 gap-10 items-center">
                    <DeleteLocationButton store={resolvedSearchParams.store} />
                    <UpdateLocation store={resolvedSearchParams.store}>
                        <FormUpdateLocation store={resolvedSearchParams.store} />
                    </UpdateLocation>
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;