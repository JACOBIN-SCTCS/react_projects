var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var quotes = [{
  "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" }, {
  "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" }, {
  "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" }, {
  "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost" }, {
  "quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale" }, {
  "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" }, {
  "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan" }, {
  "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" }, {
  "quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth" }, {
  "quote": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone" }, {
  "quote": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse" }, {
  "quote": "Life is what happens to you while you’re busy making other plans.", "author": "John Lennon" }, {
  "quote": "We become what we think about.", "author": "Earl Nightingale" }, {
  "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "author": "Mark Twain" }];

var quotelength = quotes.length;
var colorlength = Colors.length;

var MainComponent = function (_React$Component) {
  _inherits(MainComponent, _React$Component);

  function MainComponent(props) {
    _classCallCheck(this, MainComponent);

    var _this = _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this, props));

    _this.state = {
      color_index: 0,
      quote_index: 0
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MainComponent, [{
    key: 'render',
    value: function render() {
      var color = Colors[this.state.color_index];
      var quote = quotes[this.state.quote_index];
      document.body.style.background = color;
      return React.createElement(
        'div',
        { 'class': 'wrapper' },
        React.createElement(
          'div',
          { id: 'quote-box' },
          React.createElement(
            'div',
            { id: 'text', style: { color: color } },
            React.createElement(
              'i',
              { 'class': 'fa fa-quote-left' },
              ' '
            ),
            '--',
            React.createElement(
              'p',
              null,
              quote.quote
            )
          ),
          React.createElement(
            'div',
            { id: 'author' },
            React.createElement(
              'p',
              null,
              quote.author
            )
          ),
          React.createElement(
            'div',
            { 'class': 'button' },
            React.createElement(
              'a',
              { id: 'tweet-quote', style: { background: color }, href: 'https://twitter.com/intent/tweet' },
              React.createElement('i', { 'class': 'fa fa-twitter' })
            ),
            React.createElement(
              'button',
              { id: 'new-quote', style: { background: color },
                onClick: this.handleClick
              },
              'New Quote'
            )
          )
        )
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var new_quote_index = Math.floor(Math.random() * quotelength);

      var new_color_index = Math.floor(Math.random() * colorlength);

      this.setState({
        color_index: new_color_index,
        quote_index: new_quote_index
      });
    }
  }]);

  return MainComponent;
}(React.Component);

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('root'));