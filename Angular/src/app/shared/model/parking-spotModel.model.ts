
    export class Link {
        rel: string;
        href: string;
    }

    export class ParkingSpotModel {
        id: string;
        parkingSpotNumber: string;
        licensePlateCar: string;
        brandCar: string;
        modelCar: string;
        colorCar: string;
        registrationDate: Date;
        responsibleName: string;
        apartment: string;
        block: string;
        links: Link[];
    }

