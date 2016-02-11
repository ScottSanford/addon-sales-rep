angular.module('intTemplatesApp').factory("mfly", function($q) {
    

    var mfly = {

        search: function(term) {
            var deferred = $q.defer();
    
            mflyCommands.search(term)
                .done(function(data, status){
                    deferred.resolve(data);
                })
                .fail(function(error, status){
                    console.log('There was an error that happened!', error, status);
                });
                

            return deferred.promise;
        }, 

        getFolder: function(id) {
            var deferred = $q.defer();

            mflyCommands.getFolder(id)
                .done(function(data){
                    deferred.resolve(data);
                });

            return deferred.promise;
        },

        getItem: function(id) {
            var deferred = $q.defer();

            mflyCommands.getItem(id)
                .done(function(data){
                    deferred.resolve(data);
                });

            return deferred.promise;
        }, 

        openItem: function(id) {
            var url = 'mfly://item/' + id;
            return url;
        }
    }

    return mfly;


});