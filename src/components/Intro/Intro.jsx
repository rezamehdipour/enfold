// Components
import Book from "./Book";

// Icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Images
import IntroBackgroundPatternPng from "../../images/intro-pattern.png";

// CSS
import "./Intro.scss";
const sectionBackgroundStyle = {
	backgroundImage: `url(${IntroBackgroundPatternPng}), linear-gradient(to bottom right, #5a72fc, #fb4d4d)`,
};

const Intro = (props) => {
	return (
		<section id="intro">
			<div className="background" style={sectionBackgroundStyle}></div>
			<div className="arrow">
				<MdOutlineKeyboardArrowDown />
			</div>
			<div className="container">
				<div className="wrapper" data-aos="fade-up">
					<Book />
				</div>
			</div>
		</section>
	);
};

export default Intro;
