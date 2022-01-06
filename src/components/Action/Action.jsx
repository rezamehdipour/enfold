// Player
import ReactPlayer from "react-player";

// Components
import LinkButton from "../LinkButton/LinkButton";

// Images
import ActionBackgroundPatternPng from "../../images/action-background-pattern.png";

// CSS
import "./Action.scss";

const actionStyle = {
	backgroundImage: `url(${ActionBackgroundPatternPng}),linear-gradient(to bottom right, #89bb30, #4dc4fb)`,
};

const Action = (props) => {
	return (
		<section id="action" style={actionStyle}>
			<div className="container">
				<div className="wrapper">
					<div className="video" data-aos="zoom-in">
						<ReactPlayer
							width="100%"
							url="https://hajifirouz1.cdn.asset.aparat.com/aparat-video/74475c695c70c5d61dbad83fb39aacb241169107-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImRlMzI5NWNmNTljMWIzNzU5YTVjM2M1MWViNmFlYTA5IiwiZXhwIjoxNjQxNDA5NjIyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.6qFwtpXF7DSvDbqkP676a47I9gJEhPcoMb-sw8Ymht8"
							controls
						/>
					</div>
					<div className="content" data-aos="zoom-in" data-aos-delay="200">
						<h3>In Action</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu.
						</p>
						<div className="learn">
							<LinkButton url="#team" outlined>
								Learn More
							</LinkButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Action;
