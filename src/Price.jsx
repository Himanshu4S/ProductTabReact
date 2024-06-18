export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>Rs {oldPrice}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>Rs {newPrice}</span>
    </div>
  );
}
