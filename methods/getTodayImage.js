if (Meteor.isServer){
    var request = Meteor.npmRequire('request')
    Meteor.methods({

        'getMe': function(){

            var result = Async.runSync(function(done){

                request({
                    url: 'https://api.nasa.gov/planetary/apod', //URL to hit
                    qs: {"api_key":"56Kzr5HTj6rBsc50tEZeFlI86eNlz4CDl7Tf14yX",format:"JSON",concept_tags:true}, //Query string data
                    method: 'GET'
                }, function(error, response, body){
                    if(error) {
                        console.log('here we are....')
                        console.log(error);
                    } else {
                       console.log(response)
                       done(null, body)
                    }
                });
            })
            return result;
        }

    })
}