import { useRouter } from "next/router";

function ProjectPage() {
    const router = useRouter();

    return (
        <div>
            <h1>The Portfolio Project Page &#8594; {router.query.projectId}</h1>
        </div>
    );
}

export default ProjectPage;
