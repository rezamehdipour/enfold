// Components
import Head from "../Head/Head";
import Event from "./Event";

// Images
import EventsEvent1 from "../../images/events-event-1.jpg";
import EventsEvent2 from "../../images/events-event-2.jpg";
import EventsEvent3 from "../../images/events-event-3.jpg";
import EventsEvent4 from "../../images/events-event-4.jpg";
import EventsEvent5 from "../../images/events-event-5.jpg";
import EventsEvent6 from "../../images/events-event-6.jpg";
import EventsEvent7 from "../../images/events-event-7.jpg";
import EventsEvent8 from "../../images/events-event-8.jpg";

// CSS
import "./Portfolio.scss";

const events = [
	{
		url: "https://google.com",
		image: EventsEvent1,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent2,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent3,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent4,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent5,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent6,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent7,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
	{
		url: "https://google.com",
		image: EventsEvent8,
		title: "Advanced Training",
		description: "Vel pharetra vel turpis nunc eget lorem dolor sed.",
	},
];

const Portfolio = (props) => {
	return (
		<section id="portfolio">
			<Head title="Latest Events" description="Some examples of our work" />

			<ul className="events">
				{events.map((event, index) => (
					<Event {...event} index={index} />
				))}
			</ul>
		</section>
	);
};

export default Portfolio;
