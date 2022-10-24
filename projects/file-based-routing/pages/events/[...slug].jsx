import { useRouter } from "next/router"
import { getFilteredEvents } from "../../data/dummy-data"
import EventList from "../../components/events/EventList"
import ResultsTitle from "../../components/events/ResultsTitle"
import ErrorAlert from "../../components/ui/ErrorAlert"
import Button from "../../components/ui/Button"

export default function FilteredEvents() {
    const router = useRouter()

    //[year, month]
    const filterData = router.query.slug

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    // const [year, month] = filterData
    const filteredYear = Number(filterData[0])
    const filteredMonth = Number(filterData[1])

    if (
        isNaN(filterData[0]) ||
        isNaN(filterData[1]) ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">Invaid filter. Please adjust your values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth,
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(filteredYear, filteredMonth - 1)

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
