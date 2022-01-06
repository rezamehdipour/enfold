// CSS
import "./LinkButton.scss";

const LinkButton = ({ url, outlined = false, children }) => {
	return (
		<a href={url} className={`ZeUWU ${outlined ? "outlined" : ""}`}>
			{children}
		</a>
	);
};

export default LinkButton;
