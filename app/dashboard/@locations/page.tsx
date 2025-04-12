import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import { API_URL } from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";


const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    let response = await fetch(
        `${API_URL}/locations`,
        {
            headers: {
                ...authHeaders()
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
                    <SelectLocation locations={data} store={searchParams.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store} />
                </div>
                <div className="w-6/12">
                    <FormNewLocation store={searchParams.store} />
                </div>
                <DeleteLocationButton store={searchParams.store} />
                <UpdateLocation>
                    <FormUpdateLocation store={searchParams.store} />
                </UpdateLocation>
            </div>
        </div>
    );
};

export default LocationsPage;