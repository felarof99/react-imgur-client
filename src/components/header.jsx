var React = require('react');

var Header = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Imgur Client</a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <li><a>Topic #1</a></li>
                    </div>
                </div>
            </nav>
        );
    },
});

module.exports = Header;