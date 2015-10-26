var Reflux = require('reflux');
var Api = require('../api.jsx');
var Actions = require('../actions/actions.jsx');

var TopicStore = Reflux.createStore({
    init: function(){
        this.listenTo(Actions.getTopics, this.fetchTopics);
    },
    fetchTopics: function(){
        Api.get('topics/defaults').then(function(json){
            this.topics = json.data.slice(0,4);
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function(){
        this.trigger('topicStoreChanged', this.topics);
    },
});

module.exports = TopicStore;