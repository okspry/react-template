var React = require('react'),
  	mui = require('material-ui'),
  	ThemeManager = new mui.Styles.ThemeManager(),
		Colors = mui.Styles.Colors,
  	RaisedButton = mui.RaisedButton;

var App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
        <RaisedButton label="Default" />
    );
  }

});

module.exports = App;