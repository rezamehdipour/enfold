// uuid
import { v4 as uuidv4 } from "uuid";

// Components
import Head from "../Head/Head";

// Images
import PartnerBbpressPng from "../../images/partners-bbpress.png";
import PartnerEnvatoPng from "../../images/partners-envato.png";
import PartnerEventsPng from "../../images/partners-events.png";
import PartnerGravityPng from "../../images/partners-gravity.png";
import PartnerLayerSliderPng from "../../images/partners-layerslider.png";
import PartnerMailchipPng from "../../images/partners-mailchimp.png";
import PartnerRevolutionPng from "../../images/partners-revolution.png";
import PartnerWooPng from "../../images/partners-woo.png";
import PartnerWpmlPng from "../../images/partners-wpml.png";
import PartnerWpseoPng from "../../images/partners-wpseo.png";

// CSS
import "./Partners.scss";

const partners = [
	{ url: "http://kriesi.at/", image: PartnerBbpressPng },
	{ url: "http://kriesi.at/", image: PartnerEnvatoPng },
	{ url: "http://kriesi.at/", image: PartnerEventsPng },
	{ url: "http://kriesi.at/", image: PartnerGravityPng },
	{ url: "http://kriesi.at/", image: PartnerLayerSliderPng },
	{ url: "http://kriesi.at/", image: PartnerMailchipPng },
	{ url: "http://kriesi.at/", image: PartnerRevolutionPng },
	{ url: "http://kriesi.at/", image: PartnerWooPng },
	{ url: "http://kriesi.at/", image: PartnerWpmlPng },
	{ url: "http://kriesi.at/", image: PartnerWpseoPng },
];

const Partners = (props) => {
	return (
		<section id="partners">
			<div className="container">
				<Head title="Partners" description="great companies we work with" />

				<ul className="partners">
					{partners.map(({ url, image }) => (
						<li key={uuidv4()}>
							<a href={url} target="_blank">
								<img src={image} alt="partner" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Partners;
