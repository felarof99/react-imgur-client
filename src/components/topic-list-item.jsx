var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TopicListItem = React.createClass({
   render: function(){
      return(
       <Link className="list-group-item" to={"topics/" + this.props.topic.id}>
          <h5>{this.props.topic.name}</h5>
          <p>{this.props.topic.description}</p>
       </Link>
      );
   },
});

module.exports = TopicListItem;