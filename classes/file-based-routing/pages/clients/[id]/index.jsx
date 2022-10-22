import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router);
    return (
        <div>
            <h1>Projects for a Clients Page</h1>
        </div>
    );
}

export default ClientProjectsPage;
