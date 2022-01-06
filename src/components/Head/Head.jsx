// CSS
import "./Head.scss";

const Head = ({ title, description, reverse = false }) => {
	return (
		<div className={`XpAWc ${reverse ? "reverse" : ""}`}>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="seperator">
				<span></span>
				<i>●</i>
				<span></span>
			</div>
		</div>
	);
};

export default Head;
