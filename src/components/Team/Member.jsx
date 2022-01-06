// uuid
import { v4 as uuidv4 } from "uuid";

// CSS
import "./Member.scss";

const Member = ({ image, name, position, overlay = false, icons, index = 0 }) => {
	return (
		<div
			className="member"
			data-aos="zoom-in-right"
			data-aos-delay={`${index * 200}`}
		>
			<div className="image">
				<img src={image} alt="member" />
				{overlay && (
					<div className="overlay">
						<div className="icons">
							{icons.map(({ icon, tooltip }) => (
								<div key={uuidv4()} className="icon">
									{icon}
									<div className="tooltip">{tooltip}</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="info">
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
		</div>
	);
};

export default Member;
