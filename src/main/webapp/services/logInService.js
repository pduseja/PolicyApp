policyOverview.factory("logInService", function ($http) {

    logInService = {}

    logInService.login = function (dataObj, logInCallback) {

        // $http.get("services/response/logInResponse.json").
        // success(function(data){
        //     logInCallback(data); 
        // });

        $http.post('http://localhost:8083/login', dataObj).
            success(function (data) {
                if (data == true) {
                    var payload = { "userName": dataObj.userName };
                    $http.post('http://localhost:8081/getAllPolicy', payload).
                        success(function (data) {   
							console.log("Policy List Resp");
							console.log(data)
                            logInCallback(data);
                        });
                }
                 
            });


    }
    return logInService;

});