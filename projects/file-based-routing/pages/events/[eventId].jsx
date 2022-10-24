import { useRouter } from "next/router"
import { getEventById } from "../../data/dummy-data"
import EventSummary from "../../components/eventDetail/EventSummary"
import EventLogistics from "../../components/eventDetail/EventLogistics"
import EventContent from "../../components/eventDetail/EventContent"
import ErrorAlert from "../../components/ui/ErrorAlert"

export default function EventDetailPage() {
    const { query } = useRouter()
    const event = getEventById(query.eventId)

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found</p>
            </ErrorAlert>
        )
    }

    return (
        <>
            {/* <h1>EventDetailPage</h1> */}
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}
