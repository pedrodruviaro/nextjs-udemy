import Link from "next/link";

function Home() {
    const clients = [
        {
            id: "max",
            name: "Maximilian",
        },

        {
            id: "manu",
            name: "Manuel",
        },
    ];

    return (
        <div>
            <h1>Home Page</h1>

            <nav style={{ display: "grid", gap: "1rem" }}>
                <Link href="/about">About</Link>
                <Link href="/clients">Clients</Link>

                {clients.map((client) => (
                    // <Link key={clients.id} href={`/clients/${client.id}`}>
                    //     {client.name}
                    // </Link>

                    <Link
                        key={client.id}
                        href={{
                            pathname: "/clients/[id]",
                            query: {
                                id: client.id,
                            },
                        }}
                    >
                        {client.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Home;
