import Keyword from "./Keyword.js";

export default function Header({ target, initialState, onKeywordInput }){
  const headerElement = document.createElement("header");
  headerElement.className = "Header";

  target.appendChild(headerElement);

  this.state = initialState;
  
  this.setState = (nextState) => {
    this.state = nextState;

    keyword.setState({
      value : this.state.keyword
    })
  }

  const headerTitleElement = document.createElement("h1");
  headerTitleElement.innerText = "π κ³ μμ΄ κ²μκΈ° π"
  headerElement.appendChild(headerTitleElement);

  const keyword = new Keyword({
    target : headerElement,
    initialState : {
      keyword : this.state.keyword
    },
    onKeywordInput,
  });


}