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
    return { total: 0 };
  },

  calculateTotal: function(price) {
    this.setState({ total: this.state.total + price });
    // alert(this.state.total);
  },

  showProduct: function(name) {
    alert("you select  " + name);
  },
  render: function() {
    return (
      <div>
        <Product
          name="iphone XR"
          price={700}
          size="64GB"
          handleshow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Product
          name="iphone X1"
          price={900}
          size="512GB"
          handleshow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Product
          name="iphone 8 plus"
          price={600}
          size="128GB"
          handleshow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Product
          name="iphone Xs Max"
          price={800}
          size="512GB"
          handleshow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Total total={this.state.total} />
      </div>
    );
  }
});

React.render(<Productlist />, document.getElementById("root"));
