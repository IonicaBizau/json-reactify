'use strict';

var React = require('react'),
    LeafMixin = require('../../mixins/LeafFieldMixin'),
    createClass = require("create-react-class");

/**
 * Component for editing a password.
 * @param  {string} value The value of the password.
 * @param  {Mixed} original The value of the component it the original json.
 * @param {FreezerNode} parent The parent node to let the password component update its value.
 */
var PasswordField = createClass({
	mixins: [LeafMixin],
	typeClass: 'jsonPassword',
	inputType: 'password',
	defaultValue: '',

	getInitialState: function getInitialState() {
		return this.getStateFromProps(this.props);
	},

	render: function render() {
		return this.renderInput();
	},

	getDisplayModeString: function getDisplayModeString() {
		return this.getWildcards();
	},

	getWildcards: function getWildcards() {
		var out = '';
		for (var i = this.state.value.length - 1; i >= 0; i--) {
			out += '*';
		}
		return out;
	},

	isType: function isType() {
		return false;
	},

	updateValue: function updateValue(e) {
		this.setState({ value: e.target.value });
	}
});

module.exports = PasswordField;