import classes from "./Item.module.css";

const Item = (props) => {
	return (
		<div className={classes["item-wrap"]}>
			<props.icon size={40} />
			<p className={classes["item-name"]}>{props.title}</p>
			<span className={classes.rate}>{props.rate}</span>
		</div>
	);
};

export default Item;
