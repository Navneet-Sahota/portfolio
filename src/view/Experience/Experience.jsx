import React from "react";

import Header from "../../components/Header/Header";
import "./index.css";
import WorkExTitle from "../../components/WorkExTitle/WorkExTitle";

const Experience = () => {
	return (
		<>
			<Header title="Experience" />
			<WorkExTitle
				jobTitle="Frontend Lead at"
				company="Xane AI"
				href="https://xane.ai"
				duration="July 2018 - June 2019"
			/>
			<ul className="work">
				<li>Build dashboard showing different graphs using React.</li>
				<li>Added workflow to existing project.</li>
				<li>Added features to the mobile app using React Native.</li>
				<li>Build Survey tool for Intra-department surveys.</li>
				<li>
					Build the MVP which got 2nd price in Maruti Suzuki MAIL program.
				</li>
			</ul>
			<WorkExTitle
				company="Pesto Bootcamp"
				href="https://www.pesto.tech"
				duration="July 2019 - Present"
			/>
		</>
	);
};

export default Experience;
