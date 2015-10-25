var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory')
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var Main = require('./components/main')

module.exports = (
    <Router history={new HashHistory}>
        <Router path="/" component={Main}>
        </Router>
    </Router>
);