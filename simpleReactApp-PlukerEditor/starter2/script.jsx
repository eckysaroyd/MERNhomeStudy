// Code goes here

var Product = React.createClass({
  buy: function() {
    alert("thank you for buying it");
  },
  render: function() {
    return (
      <div>
        <p>100$</p>
        <button onClick={this.buy}> Buy</button>
      </div>
    );
  }
});

React.render(<Product />, document.getElementById("root"));
