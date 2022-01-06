// Components
import Head from "../Head/Head";
import LinkButton from "../LinkButton/LinkButton";

// CSS
import "./Work.scss";

const Work = (props) => {
	return (
		<section id="work">
			<div className="container">
				<Head
					title="What we are passionate about"
					description="is were we can help you"
				/>

				<div className="cards">
					{/* 1 */}
					<div className="card" data-aos="zoom-in">
						<h4>ABC OF STRATEGY</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu. Ut venenatis tellus in
							metus vulputate eu scelerisque. Dictum fusce ut placerat orci
							nulla pellentesque dignissim.
						</p>
						<div className="learn">
							<LinkButton url="#tale">Learn More</LinkButton>
						</div>
					</div>
					{/* 2 */}
					<div className="card">
						<h4>AWARD WINNING MARKETING</h4>
						<p>
							Dictum fusce ut placerat orci nulla pellentesque dignissim.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu. Ut venenatis tellus in
							metus vulputate eu scelerisque.
						</p>
						<div className="learn">
							<LinkButton url="#tale" outlined>
								Learn More
							</LinkButton>
						</div>
					</div>
					{/* 3 */}
					<div className="card" data-aos="zoom-in">
						<h4>
							DESIGN <span style={{ color: "#45C0D6" }}>&</span> PRODUCTION
						</h4>
						<p>
							Ut venenatis tellus in metus vulputate eu scelerisque. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu. Dictum fusce ut
							placerat orci nulla pellentesque dignissim.
						</p>
						<div className="learn">
							<LinkButton url="#tale">Learn More</LinkButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
