import { useEffect, useState } from "react";

// Icons
import { IoIosArrowUp } from "react-icons/io";

// CSS
import "./Scroll.scss";

const Scroll = (props) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleShow = () => {
			if (window.scrollY > 500) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
		window.addEventListener("scroll", handleShow);

		// ComponentWillUnmount
		return () => window.removeEventListener("scroll", handleShow);
	}, []);

	return (
		<a id="scroll" className={`${show ? "show" : ""}`} href="#intro">
			<IoIosArrowUp />
		</a>
	);
};

export default Scroll;
