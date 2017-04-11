policyOverview.factory("logInService", function ($http) {

    logInService = {}

    logInService.login = function (dataObj, logInCallback) {

        // $http.get("services/response/logInResponse.json").
        // success(function(data){
        //     logInCallback(data); 
        // });

        $http.post('http://localhost:8097/login/login', dataObj).
            success(function (data) {
                if (data == true) {
                    var payload = { "userName": dataObj.userName };
                    $http.post('http://localhost:8097/policy/getAllPolicy', payload).
                        success(function (data) {   
							console.log("Policy List Resp");
							console.log(data)
                            logInCallback(data);
                        });
                }
                 
            }).error(function(data) {
            	document.getElementById("loginMsgDiv").style.display = 'block';
    	    	document.getElementById("loginMsg").innerHTML = "Login Service Unavailable";
            });


    }
    return logInService;

});