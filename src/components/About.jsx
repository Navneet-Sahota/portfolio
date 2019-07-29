import React from "react";
import Typography from "@material-ui/core/Typography";

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Typography
					style={{
						paddingTop: "5vh",
						fontFamily: "inherit",
						textDecoration: "underline black solid",
					}}
					variant="h3"
				>
					About
				</Typography>
				<Typography
					style={{
						paddingTop: "10vh",
						fontSize: "3rem",
					}}
					component="article"
				>
					Hey, I'm Navneet, a Fullstack Developer.
				</Typography>
			</>
		);
	}
}

export default About;
