// Code goes here

// Code goes here through plunker

var Product = React.createClass({
  getInitialState: function() {
    return { qty: 0 };
  },
  buy: function() {
    this.setState({ qty: this.state.qty + 1 });
    this.props.handleTotal(this.props.price);
  },
  show: function() {
    this.props.handleshow(this.props.name);
  },
  render: function() {
    return (
      <div>
        <p>
          {" "}
          {this.props.name} {this.props.price}$ {this.props.size}{" "}
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
        <h3>total is {this.props.total}$</h3>
      </div>
    );
  }
});
var Productlist = React.createClass({
  getInitialState: function() {
    return {
      total: 0,
      productlist: [
        { name: "iphone XR", price: 700, size: "64GB" },
        { name: "iphone X1", price: 900, size: "512GB" }
      ]
    };
  },

  calculateTotal: function(price) {
    this.setState({ total: this.state.total + price });
    // alert(this.state.total);
  },

  showProduct: function(name) {
    alert("you select  " + name);
  },
  render: function() {
    var component = this;
    var products = this.state.productlist.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          size={product.size}
          handleshow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });
    return (
      <div>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
});

React.render(<Productlist />, document.getElementById("root"));
