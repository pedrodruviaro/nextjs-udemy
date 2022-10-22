import { useRouter } from "next/router";

function ClientsPage() {
    const router = useRouter();

    const LoadProjectHandler = () => {
        console.log("Teste");

        // router.push("/clients/max/project-a");

        router.push({
            pathname: "/clients/[id]/[clientProjectId]",
            query: {
                id: "max",
                clientProjectId: "project-b",
            },
        });
    };

    return (
        <div>
            <h1>Clients Page</h1>
            <button onClick={LoadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientsPage;
