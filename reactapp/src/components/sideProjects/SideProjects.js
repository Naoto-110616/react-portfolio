import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./SideProjects.module.css";
import SideProjectsItem from "./sideProjectsItem/SideProjectsItem";
import projects from "../../common/projects";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const SideProjects = () => {
	const sideProjectCardRefs = useRef([]);
	const setAnimation = () => {
		gsap.from(sideProjectCardRefs.current, 1, {
			autoAlpha: 0,
			y: +200,
			duration: 0.5,
			stagger: 0.1,
			scrollTrigger: {
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

	const sideProject = projects.map((project, i) => (
		<div
			ref={(element) => {
				sideProjectCardRefs.current[i] = element;
			}}
			className={`${classes.sideProjectsItem}`}
		>
			<SideProjectsItem key={project.id} data={project} />
		</div>
	));
	return (
		<section id="side-projects" className={classes["side-projects"]}>
			<SectionTitle title="Side Projects" />
			<div className={classes["side-projects_list"]}>{sideProject}</div>
		</section>
	);
};
export default SideProjects;
