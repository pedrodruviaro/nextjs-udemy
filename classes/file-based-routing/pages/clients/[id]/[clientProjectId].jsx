import { useRouter } from "next/router";

function ClientProjectIDPage() {
    const router = useRouter();

    return (
        <div>
            <h1>Client Project id </h1>
            <h2>
                Client id: <i>{router.query.id}</i>
            </h2>
            <h2>
                Client project ID: <i>{router.query.clientProjectId}</i>
            </h2>
        </div>
    );
}

export default ClientProjectIDPage;
