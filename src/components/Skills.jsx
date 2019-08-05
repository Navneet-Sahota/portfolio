import React from "react";
import SkillCard from "./SkillCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: "5vh",
		rowGap: "20px",
	},
}));

function Skills() {
	const classes = useStyles();

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
				Skills
			</Typography>
			{/* <Grid container className={classes.root}>
				<Grid item xs={12}> */}
					<Grid
						container
						className={classes.root}
						direction="row"
						justify="space-between"
						alignItems="flex-start"
						spacing={5}
					>
						{[0, 1, 2, 3, 4].map(value => (
							<Grid key={value} item>
								<SkillCard />
								<SkillCard />
							</Grid>
						))}
					</Grid>
				{/* </Grid>
			</Grid> */}
		</>
	);
}

export default Skills;
