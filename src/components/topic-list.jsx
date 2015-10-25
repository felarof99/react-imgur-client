var React = require('react');
var API = require('../api');

var TopicList = React.createClass({
    getInitialState: function(){
        return({
            topics: []
        });
    },
    componentWillMount: function(){
        API.get('topics/defaults').then(function(json){
                this.setState({
                    topics: json.data
                });
            }.bind(this));
    },
    render: function(){
        return(
            <div>
                <ul className="list-group">
                    {this.renderTopics()}
                </ul>
            </div>
        );
    },
    renderTopics: function(){
        return(
            this.state.topics.map(function(topic){
                return(
                    <li className="list-group-item">
                        {topic}
                    </li>
                );
            })
        );
    },
});

module.exports = TopicList;