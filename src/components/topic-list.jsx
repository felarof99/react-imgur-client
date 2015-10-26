var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions/actions.jsx');
var TopicStore = require('../stores/topic-store.jsx');
var TopicListItem = require('./topic-list-item.jsx');

var TopicList = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
    ],
    getInitialState: function(){
        return({
            topics: []
        });
    },
    componentWillMount: function(){
        Actions.getTopics();
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
                    <TopicListItem topic={topic} />
                );
            })
        );
    },
    onChange: function(event, topics){
        if(event==='topicStoreChanged') {
            this.setState({topics: topics});
        }
    },
});

module.exports = TopicList;