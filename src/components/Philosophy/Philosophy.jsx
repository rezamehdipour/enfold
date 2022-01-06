// Components
import LinkButton from "../LinkButton/LinkButton";

// Images
import PhilosophyImagePng from "../../images/philosophy-image.png";

// CSS
import "./Philosophy.scss";

const Philosophy = (props) => {
	return (
		<section id="philosophy">
			<div className="container">
				<div className="wrapper">
					<div className="content" data-aos="zoom-in">
						<h3>Our Philosophy</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu. Ut venenatis tellus in
							metus vulputate eu scelerisque. Dictum fusce ut placerat orci
							nulla pellentesque dignissim.
						</p>
						<div className="learn">
							<LinkButton url="#team" outlined>
								Learn More
							</LinkButton>
						</div>
					</div>
					<div className="image" data-aos="zoom-in" data-aos-delay="200">
						<img src={PhilosophyImagePng} alt="philosophy" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Philosophy;
