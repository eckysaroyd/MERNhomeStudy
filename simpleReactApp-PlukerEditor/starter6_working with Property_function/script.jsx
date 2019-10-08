// Code goes here through plunker

var Product = React.createClass({
  getInitialState: function() {
    return { qty: 0 };
  },
  buy: function() {
    this.setState({ qty: this.state.qty + 1 });
  },
  show: function() {
    this.props.handleshow(this.props.name);
  },
  render: function() {
    return (
      <div>
        <p>
          {" "}
          {this.props.name} {this.props.price} {this.props.size}{" "}
        </p>
        <button onClick={this.buy}> Buy</button>
        <button onClick={this.show}> show</button>
        <h3>Qty:{this.state.qty} item(s)</h3>
        <hr />
      </div>
    );
  }
});

var Total = React.createClass({
  render: function() {
    return (
      <div>
        <h3>total is</h3>
      </div>
    );
  }
});
var Productlist = React.createClass({
  showProduct: function(name) {
    alert("you select  " + name);
  },
  render: function() {
    return (
      <div>
        <Product
          name="iphone XR"
          price="700usd"
          size="64GB"
          handleshow={this.showProduct}
        />
        <Product
          name="iphone X1"
          price="900usd"
          size="512GB"
          handleshow={this.showProduct}
        />
        <Product
          name="iphone 8 plus"
          price="600usd"
          size="128GB"
          handleshow={this.showProduct}
        />
        <Product
          name="iphone Xs Max"
          price="800usd"
          size="512GB"
          handleshow={this.showProduct}
        />
        <Total />
      </div>
    );
  }
});

React.render(<Productlist />, document.getElementById("root"));
