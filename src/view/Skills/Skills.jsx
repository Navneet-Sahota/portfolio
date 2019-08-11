import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SkillCard from "../../components/SkillCard";
import { skills } from "./index.js";
import "./index.css";

const Skills = () => {
	return (
		<>
			<Typography className="title" variant="h3">
				Skills
			</Typography>
			<div className="container">
				{skills.map(skill => (
					<SkillCard
						key={skill.name}
						name={skill.name}
						description={skill.desc}
						image={skill.image}
					/>
				))}
			</div>
		</>
	);
};

export default Skills;
