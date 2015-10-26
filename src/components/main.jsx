var React = require('react');
var Header = require('./header.jsx');
var TopicList = require('./topic-list.jsx');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <Header />
                <TopicList />
                {this.props.children}
            </div>
        );
    },
});

module.exports = Main;