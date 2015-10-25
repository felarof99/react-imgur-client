var React = require('react');
var Header = require('./header');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <h1>
                    Hello Pascer
                </h1>
                <Header />
            </div>
        );
    },
});

module.exports = Main;