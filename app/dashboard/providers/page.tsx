import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Provider } from "@/entities";
import { Button, Link } from "@heroui/react";
import ProviderCard from "./_components/ProviderCard";
import { LuPlus } from "react-icons/lu";

const ProvidersPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...(await authHeaders()),
        },
    });
    const providers: Provider[] = await response.json();

    return (
        <div className="flex flex-col h-[90vh]">
            <Button>
                <LuPlus size="20" />
            </Button>
            <div className="flex flex-wrap w-full py-20 flex-grow-0 items-end w-full pt-10 px-10 gap-20 px-20">
                {providers.map((provider: Provider) => (
                    <Link className="gover:scale-110 transition-transform" href={`/dashboard/providers/${provider.providerId}`}>
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default ProvidersPage;