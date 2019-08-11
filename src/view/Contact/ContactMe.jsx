import React from "react";
import Typography from "@material-ui/core/Typography";
import "./index.css";
import {
	facebook,
	github,
	linkedIn,
	email,
	twitter,
	phone,
} from "../../assets/img/contact";

const ContactMe = () => {
	return (
		<>
			<Typography className="title" variant="h3">
				Contact Me
			</Typography>
			<div className="container">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/_navneet_singh"
				>
					<img src={twitter} alt="Twitter" className="contact-logo" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/navneetsinghsahota/"
				>
					<img src={linkedIn} alt="Linked In" className="contact-logo" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/Navi.Singh.04"
				>
					<img src={facebook} alt="Facebook" className="contact-logo" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/Navneet-Sahota"
				>
					<img src={github} alt="GitHub" className="contact-logo" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="tel:+918467022668">
					<img src={phone} alt="Phone Number" className="contact-logo" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:navneet.sahota@outlook.com"
				>
					<img src={email} alt="Email" className="contact-logo" />
				</a>
			</div>
		</>
	);
};

export default ContactMe;
