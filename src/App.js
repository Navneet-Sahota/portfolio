import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import About from "./view/About";
import ContactMe from "./view/ContactMe";
import Skills from "./view/Skills";
import Projects from "./view/Projects";

function App() {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState(null);

	return (
		<>
			<Container fixed>
				<div
					className="cn-button"
					id="cn-button"
					onMouseOver={() => {
						if (!open) {
							setOpen(true);
						}
					}}
				/>
				<div
					className={`cn-wrapper ${open ? "opened-nav" : ""}`}
					id="cn-wrapper"
				>
					<ul>
						<li>
							<div onMouseOver={() => {
								if (!open) {
									setOpen(true);
								}
							}} onMouseLeave={() => {
								if (open) {
									setOpen(false);
								}
							}}>
								<span id="blogs">Blogs</span>
							</div>
						</li>
						<li onClick={() => setDisplay("skills")}>
							<div onMouseOver={() => {
								if (!open) {
									setOpen(true);
								}
							}} onMouseLeave={() => {
								if (open) {
									setOpen(false);
								}
							}}>
								<span id="skills">Skills</span>
							</div>
						</li>
						<li onClick={() => setDisplay("about")}>
							<div onMouseOver={() => {
								if (!open) {
									setOpen(true);
								}
							}} onMouseLeave={() => {
								if (open) {
									setOpen(false);
								}
							}}>
								<span id="about">About</span>
							</div>
						</li>
						<li onClick={() => setDisplay("projects")}>
							<div onMouseOver={() => {
								if (!open) {
									setOpen(true);
								}
							}} onMouseLeave={() => {
								if (open) {
									setOpen(false);
								}
							}}>
								<span id="projects">Projects</span>
							</div>
						</li>
						<li>
							<div onMouseOver={() => {
								if (!open) {
									setOpen(true);
								}
							}} onMouseLeave={() => {
								if (open) {
									setOpen(false);
								}
							}}>
								<span id="contact">Contact</span>
							</div>
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
