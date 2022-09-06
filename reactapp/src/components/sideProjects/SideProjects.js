import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./SideProjects.module.css";
import SideProjectsItem from "./sideProjectsItem/SideProjectsItem";
import projects from "../../common/projects";

const SideProjects = () => {
	const sideProject = projects.map((project) => (
		<SideProjectsItem key={project.id} data={project} />
	));
	return (
		<section id="side-projects" className={classes["side-projects"]}>
			<SectionTitle title="Side Projects" />
			<div className={classes["side-projects_list"]}>{sideProject}</div>
		</section>
	);
};
export default SideProjects;
