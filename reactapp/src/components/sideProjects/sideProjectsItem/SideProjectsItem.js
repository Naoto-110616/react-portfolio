import { useRef } from "react";
import classes from "./SideProjectsItem.module.css";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const SideProjectsItem = (props) => {
	const sideProjectCardRefs = useRef([]);
	const setAnimation = () => {
		gsap.from(sideProjectCardRefs.current, {
			autoAlpha: 0,
			y: +200,
			duration: 0.5,
			stagger: 0.1,
			scrollTrigger: {
				markers: true,
				trigger: "#side-projects",
				scrub: true,
				start: "start center",
				end: "end 10%",
			},
		});
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		setAnimation();
	}, [sideProjectCardRefs]);

	const skills = props.data.skills.map((skill) => (
		<div
			key={`${props.data.id}${skill}`}
			className={classes["projects-skills"]}
		>
			{skill}
		</div>
	));
	let gitHubUrl = "";
	if (props.data.gitHubUrl) {
		gitHubUrl = (
			<a href={props.data.gitHubUrl} target="_brank" rel="noopener noreferrer">
				<i className={`fab fa-github ${classes["github-icon"]}`}></i>
			</a>
		);
	}
	let demoUrl = "";
	if (props.data.demoUrl) {
		demoUrl = (
			<a href={props.data.demoUrl} target="_brank" rel="noopener noreferrer">
				<i className={`fas fa-search ${classes["github-icon"]}`}></i>
			</a>
		);
	}
	return (
		<div ref={sideProjectCardRefs} className={`${classes.sideProjectsItem}`}>
			<div className={classes["icon-wrap"]}>{props.data.icon}</div>
			<p className={classes["projects-type"]}>
				{props.data.personal ? "Personal" : "Group"}
			</p>
			<div className={classes["projects-detail"]}>
				<h2 className={classes["projects-title"]}>{props.data.title}</h2>
				<p className={classes["projects-description"]}>
					{props.data.description}
				</p>
				<div className={classes["projects-using_skills"]}>{skills}</div>
			</div>
			{(props.data.gitHubUrl || props.data.demoUrl) && (
				<div className={classes["projects-links"]}>
					{gitHubUrl}
					{demoUrl}
				</div>
			)}
		</div>
	);
};

export default SideProjectsItem;
