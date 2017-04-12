policyOverview.factory("logInService", function ($http) {

    logInService = {}

    logInService.login = function (dataObj, logInCallback) {

        // $http.get("services/response/logInResponse.json").
        // success(function(data){
        //     logInCallback(data); 
        // });

        $http.post('https://127.0.0.1:8243/login/1/login', dataObj,{
        'Content-Type': 'application/json',
        headers:{"Authorization":"Bearer 395275bb-ea3a-3d2f-956e-41598d841b57"}}).
            success(function (data) {
                if (data == true) {
                    
                   logInCallback(dataObj.userName);
                        
                } else if(data == false) {
                	document.getElementById("loginMsgDiv").style.display = 'block';
        	    	document.getElementById("loginMsg").innerHTML = "Invalid Credentials";
                }
                 
            }).error(function(data) {
            	document.getElementById("loginMsgDiv").style.display = 'block';
    	    	document.getElementById("loginMsg").innerHTML = "Login Service Unavailable";
            });


    }
    return logInService;

});
