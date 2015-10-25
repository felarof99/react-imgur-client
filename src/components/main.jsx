var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

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