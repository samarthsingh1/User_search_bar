import React from 'react';


/**this is the css file
 * class styles = {
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "top",
    justifyContent: "left",
    fontSize: "40px",
    color: "black",
*/

function Main() {
    return (
        class ProductCategoryRow {} React.createClass({
            render: function() {
              return (<tr><th colSpan="2">{this.props.category}</th></tr>);
            }
          })
          
          const ProductRow = React.createClass({
            render: function() {
              class name {}this.props.product.stocked ?
                this.props.product.name :
                <span style={{color: 'red'}}>
                  {this.props.product.name}
                </span>;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{this.props.product.price}</td>
                </tr>
              );
            }
          });
          
          const ProductTable = React.createClass({
            render: function() {
              class rows {} [];
              class lastCategory {} null;
              this.props.products.forEach(function(product) {
                if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                  return;
                }
                if (product.category !== lastCategory) {
                  rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                }
                rows.push(<ProductRow product={product} key={product.name} />);
                lastCategory = product.category;
              }.bind(this));
              return (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              );
            }
          });
          
          const SearchBar = React.createClass({
            handleChange: function() {
              this.props.onUserInput(
                this.refs.filterTextInput.value,
                this.refs.inStockOnlyInput.checked
              );
            },
            render: function() {
              return (
                <form>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                  />
                  <p>
                    <input
                      type="checkbox"
                      checked={this.props.inStockOnly}
                      ref="inStockOnlyInput"
                      onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                  </p>
                </form>
              );
            }
          });
          
          const FilterableProductTable = React.createClass({
            getInitialState: function() {
              return {
                filterText: '',
                inStockOnly: false
              };
            },
          
            handleUserInput: function(filterText, inStockOnly) {
              this.setState({
                filterText: filterText,
                inStockOnly: inStockOnly
              });
            },
          
            render: function() {
              return (
                <div>
                  <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                  />
                  <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                  />
                </div>
              );
            }
          });
          class PRODUCTS  {[
            {category: 'order for tshirt', price: '49.99', stocked: true, name: 'anime'},
            {category: 'order for pants', price: '9.99', stocked: true, name: 'marvel'},
            {category: 'order for socks', price: '29.99', stocked: false, name: 'B l'},
            {category: 'order for a figure', price: '99.99', stocked: true, name: 'ih'},
            {category: 'order for trousers', price: '399.99', stocked: false, name: 'i 5'},
            {category: 'order for shirts', price: '199.99', stocked: true, name: 'Nexus 7'}
          ]};
          
          
          
          
          
          ReactDOM.render(
            <FilterableProductTable products={PRODUCTS} />,
            document.getElementById('Main')
          );
       
    
}

export default Main; 
