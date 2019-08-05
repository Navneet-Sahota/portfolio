import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState(null);

	return (
		<>
			<Container fixed>
				<button
					className="cn-button"
					id="cn-button"
					onClick={() => {
						if (!open) {
							setOpen(true);
						} else {
							setOpen(false);
						}
					}}
				>
					<strong id="open" style={open ? { color: "#ab050b" } : null}>
						{open ? "-" : "+"}
					</strong>
				</button>
				<div
					className={`cn-wrapper ${open ? "opened-nav" : ""}`}
					id="cn-wrapper"
				>
					<ul>
						<li>
							<a href="#">
								<span id="blogs">Blogs</span>
							</a>
						</li>
						<li onClick={() => setDisplay("skills")}>
							<a href="#">
								<span id="skills">Skills</span>
							</a>
						</li>
						<li onClick={() => setDisplay("about")}>
							<a href="#">
								<span id="about">About</span>
							</a>
						</li>
						<li onClick={() => setDisplay("projects")}>
							<a href="#">
								<span id="projects">Projects</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span id="contact">Contact</span>
							</a>
						</li>
					</ul>
				</div>
				<div
					className={`cn-overlay ${open ? "on-overlay" : ""}`}
					id="cn-overlay"
				/>
				{display === "about" ? <About /> : null}
				{display === "skills" ? <Skills /> : null}
				{display === "projects" ? <Projects /> : null}
				{/* <ContactMe /> */}
			</Container>
		</>
	);
}

export default App;
