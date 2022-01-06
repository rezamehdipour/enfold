import { useState, useRef, useEffect } from "react";

// CSS
import "./Event.scss";

const Event = ({ url, image, title, description, index = 0 }) => {
	const eventElement = useRef();
	const [eventWidth, setEventWidth] = useState(400);

	useEffect(() => {
		setEventWidth(eventElement.current.clientWidth);

		const handleResize = () => {
			setEventWidth(eventElement.current.clientWidth);
		};
		window.addEventListener("resize", handleResize);

		// ComponentWillUnmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<li
			className="event"
			ref={eventElement}
			style={{ height: eventWidth + "px" }}
			data-aos="flip-up"
			data-aos-delay={`${index * 200}`}
		>
			<a href={url}>
				<div
					className="background"
					style={{ backgroundImage: `url(${image})` }}
				></div>
				<div className="overlay">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</a>
		</li>
	);
};

export default Event;
