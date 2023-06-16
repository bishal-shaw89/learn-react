import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //props.childern uses the data inside the custom component, in this example where the Card component is using the data between the custon tags(Card) will be passed here in props.children.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
