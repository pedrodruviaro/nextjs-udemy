import { useRouter } from "next/router"
import EventsSearch from "../../components/events/EventsSearch.jsx"
import EventList from "../../components/events/EventList.jsx"
import { getAllEvents } from "../../data/dummy-data.js"

export default function AllEventsPage() {
    const events = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}
