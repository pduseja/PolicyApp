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

    policyService.getPolicy = function (id, policyCallback) {

        var dataObj = {
            "policyId": id
        };
        console.log("Policy selected = "+ dataObj);
        $http.post('http://localhost:8081/getPolicy', dataObj).
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

        policyService.getQuote = function (quoteData, quoteCallback) {
				console.log(JSON.stringify(quoteData));
				console.log(quoteData); 
                $http.post('http://localhost:8090/QQ', quoteData).
                     success(function (data) { 
                         console.log(data); 
                         quoteCallback(data);               
                     }); 

            //quoteCallback("Success!!! Your Quote is :1111.1111");

        }

    return policyService;

});
