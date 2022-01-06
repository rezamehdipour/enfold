// Components
import Head from "../Head/Head";

// Images
import ContactImagePng from "../../images/contact-image.png";

// CSS
import "./Contact.scss";

const Contact = (props) => {
	return (
		<section id="contact">
			<div className="container">
				<Head title="Get in touch" description="we would love to hear from you" />

				<div className="contact">
					<div className="image">
						<img src={ContactImagePng} alt="contact" />
						<div className="text">
							<p>
								<span>(555) 555 555</span>
								<a href="mailto:YOU@EMAIL.COM">YOU@EMAIL.COM</a>
								<a href="https://facebook.com">FACEBOOK</a>
								<a href="http://twitter.com">TWITTER</a>
							</p>
							<p>
								<strong>OFFICE LOCATION:</strong>
								<span>123 KINGSTREET</span>
								<span>MELBOURNE VICTORIA 3000</span>
								<span>AUSTRALIA</span>
							</p>
						</div>
					</div>
					<form action="">
						<input type="text" name="name" placeholder="NAME*" />
						<input type="text" name="name" placeholder="E-MAIL*" />
						<textarea
							type="text"
							name="name"
							placeholder="MESSAGE*"
							cols="40"
							rows="7"
						></textarea>
						<div className="submit">
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
