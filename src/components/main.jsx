var React = require('react');
var Header = require('./header.jsx');
var TopicList = require('./topic-list.jsx');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <Header />
                {this.renderChildren()}
            </div>
        );
    },
    renderChildren: function(){
        if(this.props.children) {
            return(this.props.children);
        } else {
            return(
                <TopicList />
            );
        }
    }
});

module.exports = Main;