export default function Cart({ target, initialState, onRemove }) {
  const cartElement = document.createElement("div");
  target.appendChild(cartElement);

  this.state = initialState;
  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  const calculateTotalPrice = () => {
    const { basePrice, selectedOptions } = this.state;
    return selectedOptions.reduce((acc, option) => 
      acc + ((basePrice + option.optionPrice) * option.ea), 0);
  };

  this.render = () => {
    const { productName, basePrice, selectedOptions } = this.state;

    cartElement.innerHTML = `
      <ul>
        ${Array.isArray(selectedOptions) && selectedOptions.map(option => {
          `
          <li>
            ${productName} - ${option.optionName} | ${basePrice + option.optionPrice} ${option.ea}
          </li>
          `
        }).join("") }
      </ul>
      <div>
        ${calculateTotalPrice()}
      </div>
    `
  }
}