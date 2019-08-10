import React from "react";
import ProjectCard from "../components/ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: "5vh",
	},
}));

function Projects() {
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
				Projects
		</Typography>
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="flex-start"
						alignContent="space-around"
						spacing={5}
					>
						{[0, 1, 2].map(value => (
							<Grid key={value} item>
								<ProjectCard />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default Projects;
