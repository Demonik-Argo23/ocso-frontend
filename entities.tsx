export interface Location{    
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    manager?: any;
    region?: any;
    employees?: Employee[];
}

export interface Employee{

    employeeId: string;
    employeeName: string;
    employeeLastName: string;
    phoneNumber: string;
    employeeEmail: string;
    employeePhoto?: string;
    location?: Location;
    user?: any;
}