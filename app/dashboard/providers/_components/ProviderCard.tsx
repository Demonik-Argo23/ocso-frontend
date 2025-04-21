import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card>
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider />
            <CardBody>
                <p> Correo Electronico: </p>
                <b>{provider.providerEmail}</b>
                <p> Telefono: </p>
                <b>{provider.providerPhoneNumber}</b>
                {provider.products ? (
                    <p>
                        Tiene <b> {provider.products.length} </b> productos
                    </p>
                ): (
                    <p> No tiene productos </p>
                )}
            </CardBody>
        </Card>
    );
}