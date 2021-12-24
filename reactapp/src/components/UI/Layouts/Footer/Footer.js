import Icons from "../Header/icons/Icons";
import classes from "./Footer.module.css";

const Footer = (props) => {
	const thisYear = new Date().getFullYear();
	return (
		<footer className={classes.footer}>
			<div>
				<p>{"© Copyright " + thisYear + " busainu.com"}</p>
			</div>
			<Icons className={classes.icon} />
		</footer>
	);
};

export default Footer;
