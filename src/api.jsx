var Fetch = require('whatwg-fetch');
var ImgurRootURL = 'https://api.imgur.com/3/';

var ImgurAPI = {
    get: function(url){
        return(
            fetch(ImgurRootURL + url, {
                headers: {
                    'Authorization': 'Client-ID e78045ffdc53efa'
                }
            }).then(function(response){
                return response.json();
            })
        );
    }
};

module.exports = ImgurAPI;