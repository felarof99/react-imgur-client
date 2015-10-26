var React = require('react');

var TopicListItem = React.createClass({
   render: function(){
      return(
       <div className="list-group-item">
          <h4>{this.props.topic.name}</h4>
          <p>{this.props.topic.description}</p>
       </div>
      );
   },
});

module.exports = TopicListItem;