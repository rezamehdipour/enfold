// Components
import Head from "../Head/Head";

// Icons
import { FaRegEye } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";

// Images
import ServicesBackgroundPatternPng from "../../images/services-background-pattern.png";

// CSS
import "./Services.scss";
const sectionStyle = {
	backgroundImage: `url(${ServicesBackgroundPatternPng}), linear-gradient(45deg, #00ccc4, #69b2e8)`,
};

const Services = (props) => {
	return (
		<section id="services" style={sectionStyle}>
			<div className="container">
				<Head
					title="Services"
					description="the cool stuff we can do for you"
					reverse
				/>

				<ul className="services" data-aos="zoom-in-up">
					{/* 1 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<FaRegEye />
								</div>
								<div className="content">
									<h4>Advertising</h4>
									<h6>make your event visible</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
					{/* 2 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<BsBookmark />
								</div>
								<div className="content">
									<h4>Brand Design</h4>
									<h6>make your brand stan out</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
					{/* 3 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<AiOutlineFileText />
								</div>
								<div className="content">
									<h4>Event Planning</h4>
									<h6>plan an awesome event</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
					{/* 4 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<BsHouseDoor />
								</div>
								<div className="content">
									<h4>Location Scouting</h4>
									<h6>finding the best is important</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
					{/* 5 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<AiOutlineFacebook />
								</div>
								<div className="content">
									<h4>Social Media</h4>
									<h6>use the power of viral marketing</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
					{/* 6 */}
					<li>
						<div className="service">
							<div className="front">
								<div className="icon">
									<AiOutlineBulb />
								</div>
								<div className="content">
									<h4>Event Analysis</h4>
									<h6>post enevt data analysis</h6>
								</div>
							</div>
							<div className="back">
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Dolores blanditiis ratione dolor explicabo hic
									velit fugiat itaque voluptas inventore! Iste magni
									voluptate laborum qui molestias delectus,
									exercitationem sapiente aliquid voluptas.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Services;
