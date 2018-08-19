var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
Input = function (_React$Component) {_inherits(Input, _React$Component);
  function Input(props) {_classCallCheck(this, Input);var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this,
    props));
    _this.state = { userInput:
      'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' };

    _this.handleUserInput = _this.handleUserInput.bind(_this);return _this;
  }_createClass(Input, [{ key: "handleUserInput", value: function handleUserInput(
    e) {
      this.setState({
        userInput: e.target.value });

    } }, { key: "getMarkUp", value: function getMarkUp(

    value) {
      var rawMarkup = marked(value, { sanitize: true });
      return { __html: rawMarkup };
    } }, { key: "render", value: function render()
    {
      return (

        React.createElement("div", { className: "row" },
          React.createElement("div", { className: "col" },
            React.createElement("textarea", { rows: "30", cols: "65", type: "text", onChange: this.handleUserInput, value: this.state.userInput })),

          React.createElement("div", { className: "col" },
            React.createElement("span", { dangerouslySetInnerHTML: this.getMarkUp(this.state.userInput) }))));




    } }]);return Input;}(React.Component);



ReactDOM.render(React.createElement(Input, null), document.getElementById('container'));