import { useState } from "react";
import useStateCallback from "../../hooks/useStateCallback";

// Components
import Head from "../Head/Head";

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Images
import TesominalsUser1Jpg from "../../images/testominals-user-1.jpg";
import TesominalsUser2Jpg from "../../images/testominals-user-2.jpg";
import TesominalsUser3Jpg from "../../images/testominals-user-3.jpg";

// CSS
import "./Testimonials.scss";

const users = [
	{
		feedback:
			"Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat non proident.",
		image: TesominalsUser1Jpg,
		name: "Gina Porter",
		position: "Designer",
	},
	{
		feedback:
			"Arcu cursus vitae congue mauris rhoncus aenean. Fusce id velit ut tortor. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a.",
		image: TesominalsUser2Jpg,
		name: "Frank Eugene",
		position: "Marketing Manager",
	},
	{
		feedback:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		image: TesominalsUser3Jpg,
		name: "John Spectre",
		position: "Developer",
	},
];

const Testimonials = (props) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const feedback = users[activeSlide];
	const [fadingOut, setFadingOut] = useStateCallback(false);
	const handleNext = () => {
		setFadingOut(true, () => {
			setTimeout(() => {
				if (activeSlide < users.length - 1) {
					setActiveSlide((prev) => prev + 1);
				} else {
					setActiveSlide(0);
				}
				setFadingOut(false);
			}, 300);
		});
	};
	const handlePrevious = () => {
		setFadingOut(true, () => {
			setTimeout(() => {
				if (activeSlide > 0) {
					setActiveSlide((prev) => prev - 1);
				} else {
					setActiveSlide(users.length - 1);
				}
				setFadingOut(false);
			}, 300);
		});
	};

	return (
		<section id="testimonials">
			<div className="container">
				<Head title="Testimonials" description="what our clients say" />

				<div className="testimonial">
					<div className="arrow previous">
						<button onClick={handlePrevious} disabled={fadingOut}>
							<IoIosArrowBack />
						</button>
					</div>
					<div className="feed">
						<div className={`feedback ${fadingOut ? "fadeOut" : ""}`}>
							<p>{feedback.feedback}</p>
							<div className="user">
								<div className="image">
									<img
										src={feedback.image}
										alt="user"
										data-aos="zoom-in"
									/>
								</div>
								<div className="info">
									<strong>{feedback.name}</strong>
									<span>{feedback.position}</span>
								</div>
							</div>
						</div>
					</div>
					<div className="arrow next">
						<button onClick={handleNext} disabled={fadingOut}>
							<IoIosArrowForward />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
