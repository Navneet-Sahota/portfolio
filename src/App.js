import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import About from "./view/About";
import ContactMe from "./view/Contact/ContactMe";
import Skills from "./view/Skills/Skills";
import Projects from "./view/Projects/Projects";
import home from "./assets/img/home.svg";

function App() {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState("home");

	return (
		<>
			<Container fixed>
				<div
					className="cn-home"
					id="cn-home"
					onMouseOver={() => {
						if (!open) {
							setOpen(true);
						}
					}}
				>
					{display !== "home" ? (
						<img
							src={home}
							alt="Home"
							style={{
								height: "33.3%",
								position: "relative",
								top: "17.5%",
								transform: "translateY(-17.5%)",
							}}
						/>
					) : null}
				</div>
				<div
					className={`cn-wrapper ${open ? "opened-nav" : ""}`}
					id="cn-wrapper"
				>
					<ul>
						<li
							onClick={() => {
								setDisplay("blogs");
								setOpen(false);
							}}
						>
							<div
								onMouseOver={() => {
									if (!open) {
										setOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (open) {
										setOpen(false);
									}
								}}
							>
								<span id="blogs">Blogs</span>
							</div>
						</li>
						<li
							onClick={() => {
								setDisplay("skills");
								setOpen(false);
							}}
						>
							<div
								onMouseOver={() => {
									if (!open) {
										setOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (open) {
										setOpen(false);
									}
								}}
							>
								<span id="skills">Skills</span>
							</div>
						</li>
						<li
							onClick={() => {
								setDisplay("about");
								setOpen(false);
							}}
						>
							<div
								onMouseOver={() => {
									if (!open) {
										setOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (open) {
										setOpen(false);
									}
								}}
							>
								<span id="about">About</span>
							</div>
						</li>
						<li
							onClick={() => {
								setDisplay("projects");
								setOpen(false);
							}}
						>
							<div
								onMouseOver={() => {
									if (!open) {
										setOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (open) {
										setOpen(false);
									}
								}}
							>
								<span id="projects">Projects</span>
							</div>
						</li>
						<li
							onClick={() => {
								setDisplay("contact");
								setOpen(false);
							}}
						>
							<div
								onMouseOver={() => {
									if (!open) {
										setOpen(true);
									}
								}}
								onMouseLeave={() => {
									if (open) {
										setOpen(false);
									}
								}}
							>
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
				{display === "contact" ? <ContactMe /> : null}
			</Container>
		</>
	);
}

export default App;
