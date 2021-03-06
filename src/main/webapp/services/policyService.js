/*policyOverview.factory("policyService",function($http){
  
    policyService = {}
    
    policyService.getPolicy = function(policyCallback){
       
        $http.get("services/response/response.json").
        success(function(data){
            policyCallback(data); 
        });
        
        
    }
    return policyService;
    
});*/


policyOverview.factory("policyService", function ($http) {

    policyService = {}
    
    
    policyService.getAllPolicy = function (dataObj, allPolicyCallback) {

        // $http.get("services/response/logInResponse.json").
        // success(function(data){
        //     logInCallback(data); 
        // });

        $http.post('http://localhost:8097/policy/getAllPolicy', dataObj).
            success(function (data) {
							console.log("Policy List Resp");
							console.log(data)
                            allPolicyCallback(data);
                 
            });


    }
    
    
    
    
    
    
    
    
    

    policyService.getPolicy = function (id, policyCallback) {

        var dataObj = {
            "policyId": id
        };
        console.log("Policy selected = "+ dataObj);
        $http.post('http://localhost:8097/policy/getPolicy', dataObj).
            success(function (data) {

                console.log(data);
                policyCallback(data);
                /*policyCallback({
                    "policyId": 4658254387979106229,
                    "policyDate": 1490832000000,
                    "premium": 1111.1111,
                    "status": "A",
                    "term": 15,
                    "sumAssured": 200000
                });*/
            });

    },
     policyService.getSubPolicy = function (id, subPolicyCallback) {

        var dataObj = {
            "policyId": id
        };
        console.log("Policy selected = "+ dataObj);
        $http.post('http://localhost:8097/subPolicy/getSubPolicy', dataObj).
            success(function (data) {

                console.log(data);
                subPolicyCallback(data);
                /*policyCallback({
                    "policyId": 4658254387979106229,
                    "policyDate": 1490832000000,
                    "premium": 1111.1111,
                    "status": "A",
                    "term": 15,
                    "sumAssured": 200000
                });*/
            });

    },

        policyService.getQuote = function (quoteData, quoteCallback) {
				console.log(JSON.stringify(quoteData));
				console.log(quoteData); 
                $http.post('http://localhost:8097/quote/QQ', quoteData).
                     success(function (data) { 
                         console.log(data); 
                         quoteCallback(data);               
                     }); 

            //quoteCallback("Success!!! Your Quote is :1111.1111");

        }

    return policyService;

});