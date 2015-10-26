var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reflux = require('reflux');

var TopicStore = require('../stores/topic-store.jsx');
var Actions = require('../actions/actions.jsx');

var Header = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
    ],
    getInitialState: function(){
      return({topics: []});
    },
    componentWillMount: function(){
        Actions.getTopics();
    },
    onChange: function(event, topics){
        if(event === 'topicStoreChanged'){
            this.setState({topics: topics});
        }
    },
    render: function(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Imgur Client</Link>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        {this.topicNames()}
                    </div>
                </div>
            </nav>
        );
    },
    topicNames: function(){
        return(
            this.state.topics.map(function(topic){
              return(<li><Link to={"topics/" + topic.id}>{topic.name}</Link></li>);
            })
        )
    },
});

module.exports = Header;