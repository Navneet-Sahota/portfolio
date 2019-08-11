import React from "react";
import Typography from "@material-ui/core/Typography";
import "./ContactMe.css";
import {
	facebook,
	github,
	linkedIn,
	email,
	twitter,
	phone,
} from "../../assets/img/contact";

class ContactMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Typography
					style={{
						textAlign: "center",
						paddingTop: "5vh",
						fontFamily: "inherit",
						textDecoration: "underline black solid",
					}}
					variant="h2"
				>
					Contact Me
				</Typography>
				<div
					style={{
						display: "flex",
						paddingTop: "20vh",
						fontSize: "3rem",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
					}}
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/_navneet_singh"
					>
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={twitter}
							alt="Twitter"
							className="contact-logo"
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/navneetsinghsahota/"
					>
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={linkedIn}
							alt="Linked In"
							className="contact-logo"
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/Navi.Singh.04"
					>
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={facebook}
							alt="Facebook"
							className="contact-logo"
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Navneet-Sahota"
					>
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={github}
							alt="GitHub"
							className="contact-logo"
						/>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="tel:+918467022668">
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={phone}
							alt="Phone Number"
							className="contact-logo"
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:navneet.sahota@outlook.com"
					>
						<img
							style={{ marginTop: "5vh", height: "100px" }}
							src={email}
							alt="Email"
							className="contact-logo"
						/>
					</a>
				</div>
			</>
		);
	}
}

export default ContactMe;
