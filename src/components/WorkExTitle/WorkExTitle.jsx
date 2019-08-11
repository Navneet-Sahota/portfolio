import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import "./index.css";

const WorkExTitle = props => {
	return (
		<Typography className="work-title" variant="h4">
			{props.jobTitle ? props.jobTitle + " " : null}
			<Link className="link" href={props.href} target="_blank" rel="noreferrer">
				{props.company}
			</Link>{" "}
			({props.duration})
		</Typography>
	);
};

export default WorkExTitle;
