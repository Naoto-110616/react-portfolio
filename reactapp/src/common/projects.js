import { REACT, DOCKER, GIT, GITHUB, FIREBASE } from "../util/consts";
import { ImProfile } from "react-icons/im";
import { AiOutlineProfile, AiOutlineFacebook } from "react-icons/ai";

const projects = [
	{
		id: 1,
		title: "Portfolio Page",
		icon: <AiOutlineProfile />,
		description: "This portfolio site.",
		skills: [REACT, DOCKER, GIT, GITHUB, FIREBASE],
		gitHubUrl: "https://github.com/Naoto-110616/portfolio",
		demoUrl: "https://portfolio-page-react.web.app",
		personal: true,
	},
	{
		id: 2,
		title: "goodbook",
		icon: <AiOutlineFacebook />,
		description: "I made it based on facebook.",
		skills: [REACT, "Redux", DOCKER, GIT, GITHUB, FIREBASE, "SPA"],
		gitHubUrl: "https://github.com/Naoto-110616/Goodbook_react-app",
		demoUrl: "https://goodbook-react-app.web.app",
		personal: true,
	},
	{
		id: 3,
		title: "Resume",
		iconClasses: "fab fa-facebook",
		icon: <ImProfile />,
		description: "Site with my resume.",
		skills: [REACT, GIT, GITHUB, FIREBASE, "SPA"],
		gitHubUrl: "https://github.com/Naoto-110616/react-resume",
		demoUrl: "https://resume-react-7aa2a.web.app/",
		personal: true,
	},
];

export default projects;
