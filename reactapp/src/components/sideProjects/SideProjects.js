import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./SideProjects.module.css";
import SideProjectsItem from "./sideProjectsItem/SideProjectsItem";
import { REACT, DOCKER, GIT, GITHUB, FIREBASE } from "../../util/consts";
const PROJECTS = [
	{
		id: 1,
		title: "Portfolio Page",
		iconClasses: "far fa-id-badge",
		description: "This portfolio site.",
		skills: [REACT, DOCKER, GIT, GITHUB, FIREBASE],
		gitHubUrl: "https://github.com/Naoto-110616/portfolio",
		demoUrl: "https://portfolio-page-react.web.app",
		personal: true,
	},
	{
		id: 2,
		title: "goodbook",
		iconClasses: "fab fa-facebook",
		description: "I made it based on facebook.",
		skills: [REACT, "Redux", DOCKER, GIT, GITHUB, FIREBASE, "SPA"],
		gitHubUrl: "https://github.com/Naoto-110616/Goodbook_react-app",
		demoUrl: "https://goodbook-react-app.web.app",
		personal: true,
	},
];

const SideProjects = () => {
	const sideProject = PROJECTS.map((projects) => (
		<SideProjectsItem key={projects.id} data={projects} />
	));
	return (
		<section id="side-projects" className={classes["side-projects"]}>
			<SectionTitle title={"Side Projects"} />
			<div className={classes["side-projects_list"]}>{sideProject}</div>
		</section>
	);
};
export default SideProjects;
