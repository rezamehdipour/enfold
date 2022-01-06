// Components
import Head from "../Head/Head";

// Images
import TaleBackgroundPattern from "../../images/tale-background-pattern.png";

// CSS
import "./Tale.scss";

const taleStyle = {
	backgroundImage: `url(${TaleBackgroundPattern}), linear-gradient(to bottom right, #1cc5e7, #e3ee22)`,
};

const Tale = (props) => {
	return (
		<section id="tale" style={taleStyle}>
			<div className="container">
				<Head
					title="A tale of a successful event"
					description="and how to plan it"
					reverse
				/>

				<div className="content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Scelerisque fermentum dui faucibus in ornare quam viverra orci
						sagittis. Dictum non consectetur a erat nam at. Orci sagittis eu
						volutpat odio. Donec pretium vulputate sapien nec sagittis aliquam
						malesuada. Nec nam aliquam sem et tortor consequat id porta. Morbi
						non arcu risus quis varius.
					</p>
					<p>
						Leo vel fringilla est ullamcorper eget nulla. Neque laoreet
						suspendisse interdum consectetur libero. Suscipit tellus mauris a
						diam maecenas sed enim ut. Netus et malesuada fames ac turpis
						egestas sed tempus urna. Lacus vestibulum sed arcu non. Iaculis eu
						non diam phasellus. Eu feugiat pretium nibh ipsum consequat nisl
						vel pretium lectus. Sagittis vitae et leo duis ut diam quam nulla
						porttitor.
					</p>
					<p>
						Ultrices mi tempus imperdiet nulla malesuada pellentesque. Gravida
						quis blandit turpis cursus in. A scelerisque purus semper eget
						duis at tellus at urna. Maecenas sed enim ut sem viverra aliquet
						eget sit amet. Gravida neque convallis a cras semper. Rhoncus
						dolor purus non enim praesent elementum facilisis leo. Est
						placerat in egestas erat. Sit amet porttitor eget dolor morbi non
						arcu. Mattis vulputate enim nulla aliquet porttitor lacus luctus
						accumsan. At varius vel pharetra vel turpis nunc eget lorem.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Tale;
