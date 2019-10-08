// Code goes here

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Hello Tanzania</h2>
        <p>am now welcoming you to this plunker editor</p>
      </div>
    );
  }
});

React.render(<Hello />, document.getElementById("root"));
