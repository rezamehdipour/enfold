// Components
import Head from "../Head/Head";
import Member from "./Member";

// Icons
import { FaTwitter } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiDigg } from "react-icons/si";

// Images
import TeamMember1Jpg from "../../images/team-member-1.jpg";
import TeamMember2Jpg from "../../images/team-member-2.jpg";
import TeamMember3Jpg from "../../images/team-member-3.jpg";
import TeamMember4Jpg from "../../images/team-member-4.jpg";
import TeamMember5Jpg from "../../images/team-member-5.jpg";
import TeamMember6Jpg from "../../images/team-member-6.jpg";

// CSS
import "./Team.scss";

const Team = (props) => {
	return (
		<section id="team">
			<div className="container">
				<Head title="Meet the team" description="the people behind the events" />

				<div className="team">
					{/* Founders */}
					<div className="founders">
						<Member
							image={TeamMember1Jpg}
							name="John Doe"
							position="Co-Founder CEO"
							overlay
							icons={[
								{
									icon: <FaTwitter />,
									tooltip: "i do tweet",
								},
							]}
						/>
						<Member
							image={TeamMember2Jpg}
							name="Marla Doe"
							position="Co-Founder CTO"
							index={1}
						/>
					</div>
					{/* Members */}
					<div className="members">
						{/* 1 */}
						<Member
							image={TeamMember3Jpg}
							name="Jay Smith"
							position="Design"
							overlay
							icons={[
								{
									icon: <ImSkype />,
									tooltip: "Call on Skype",
								},
							]}
							index={2}
						/>
						{/* 2 */}
						<Member
							image={TeamMember4Jpg}
							name="Olivia Miles"
							position="Events"
							overlay
							icons={[
								{
									icon: <BsFacebook />,
									tooltip: "Check me out on Facebook",
								},
							]}
							index={3}
						/>
						{/* 3 */}
						<Member
							image={TeamMember5Jpg}
							name="Brandon Perry"
							position="Events"
							overlay
							icons={[
								{
									icon: <BsInstagram />,
									tooltip: "I am on Instagram",
								},
								{
									icon: <BsYoutube />,
									tooltip: "Also Yotube",
								},
								{
									icon: <SiDigg />,
									tooltip: "And Digg",
								},
							]}
							index={4}
						/>
						{/* 4 */}
						<Member
							image={TeamMember6Jpg}
							name="Vanessa Silk"
							position="Support"
							index={5}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
