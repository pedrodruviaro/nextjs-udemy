import Button from "../ui/Button"
import styles from "./EventItem.module.css"

import AdressIcon from "../icons/AddressIcon"
import DateIcon from "../icons/DateIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"

const EventItem = (props) => {
    const { title, image, date, location, id } = props

    const humanRedableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    const formatedAddress = location.replace(", ", "\n")
    const exploreLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={"/" + image} alt={title} />

            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{humanRedableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AdressIcon />
                        <adress>{formatedAddress}</adress>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
