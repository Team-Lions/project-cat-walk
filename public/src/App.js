import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import Rating from './Ratings&Reviews/rating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
<<<<<<< HEAD
    return /*#__PURE__*/React.createElement("div", null, "Hello", /*#__PURE__*/React.createElement(Rating, null));
=======
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overview, null), /*#__PURE__*/React.createElement(Rating, null));
>>>>>>> main
  }

}

;
export default App;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiUmF0aW5nIiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDhCQUFuQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCSCxLQUFLLENBQUNJLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUFPLHVEQUFVLG9CQUFDLE1BQUQsT0FBVixDQUFQO0FBQ0Q7O0FBUCtCOztBQVFqQztBQUVELGVBQWVKLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJy4vUmF0aW5ncyZSZXZpZXdzL1JhdGluZy5qc3gnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PkhlbGxvPFJhdGluZy8+PC9kaXY+XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiT3ZlcnZpZXciLCJSYXRpbmciLCJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIseUJBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiw4QkFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkosS0FBSyxDQUFDSyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw4Q0FDRSxvQkFBQyxRQUFELE9BREYsZUFFRSxvQkFBQyxNQUFELE9BRkYsQ0FERjtBQU1EOztBQVorQjs7QUFhakM7QUFFRCxlQUFlSixHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcvT3ZlcnZpZXcuanN4JztcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi9SYXRpbmdzJlJldmlld3MvcmF0aW5nLmpzeCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxPdmVydmlldyAvPlxuICAgICAgICA8UmF0aW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
>>>>>>> main
