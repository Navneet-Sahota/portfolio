import React from "react";
import Typist from "react-typist";
import Typography from "@material-ui/core/Typography";

import "./index.css";

const Home = () => {

	return (
		<>
			<Typist
				className="intro-box"
				avgTypingDelay={100}
				startDelay={200}
				cursor={{
					show: false,
				}}
			>
				<Typography className="intro-text" variant="h3">
					Hi! My name is Navneet Singh.
				</Typography>
				<Typist.Delay ms={500} />
				<Typography className="intro-text" variant="h3">
					I'm a Frontend
					<Typist.Backspace count={8} delay={300} />
					Backend
					<Typist.Backspace count={7} delay={300} />
					Full Stack Developer from India.
					<Typist.Delay ms={500} />
				</Typography>
			</Typist>
		</>
	);
};

export default Home;
