import Icons from "../Header/icons/Icons";
import classes from "./Footer.module.css";

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div>
				<p>siodeitadaku@gmail.com</p>
			</div>
			<Icons className={classes.icon} />
		</footer>
	);
};

export default Footer;
