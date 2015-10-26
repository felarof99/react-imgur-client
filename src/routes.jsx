var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory')
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var Main = require('./components/main.jsx');
var TopicPage = require('./components/topic-page.jsx');

module.exports = (
    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Router path="/topics/:id" component={TopicPage} />
        </Route>
    </Router>
);