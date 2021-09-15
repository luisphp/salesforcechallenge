@isTest
public with sharing class EjercicioLabsTest {
    @isTest
    public static void TesteoEjercicio() {

        String responseFromServer  = '{'+
            '"kind": "Listing",'+
            '"data": {'+
              '"after": "t3_pkves0",'+
              '"dist": 25,'+
              '"modhash": "",'+
              '"geo_filter": null,'+
              '"children": ['+
                '{'+
                  '"kind": "t3",'+
                  '"data": {'+
                    '"approved_at_utc": null,'+
                    '"subreddit": "aww",'+
                    '"selftext": "",'+
                    '"author_fullname": "t2_fci5d",'+
                    '"saved": false,'+
                    '"mod_reason_title": null'+
                  '}'+
                '}'+
              '],'+
              '"before": null'+
            '}'+
          '}';

        SingleRequestMock mockResponse = new SingleRequestMock(200,
        'Complete',
        responseFromServer,
        null);
        Test.setMock(HttpCalloutMock.class, mockResponse);    

        test.startTest();

            EjercicioLabs_Schedule.parseResponseFromServer();
            String jobId = System.schedule('ScheduledApexTest',
            '0 0 * * * ?',
            new EjercicioLabs_Schedule());

        test.stopTest();


        List<Post__c> allPosts = new List<Post__c>();
        allPosts = [SELECT Id FROM Post__c];
        System.assertEquals(1, allPosts.size());
    }

    @isTest
    public static void TesteoEjercicioDos() {

        SingleRequestMock mockResponse = new SingleRequestMock(500,
        'NotCompleted',
        'Error',
        null);

        Test.setMock(HttpCalloutMock.class, mockResponse);    

        test.startTest();

            EjercicioLabs_Schedule.parseResponseFromServer();
            String jobId = System.schedule('ScheduledApexTest',
            '0 0 * * * ?',
            new EjercicioLabs_Schedule());
        test.stopTest();


        List<Post__c> allPosts = new List<Post__c>();
        allPosts = [SELECT Id FROM Post__c];

        System.assertEquals(0, allPosts.size());
    }
}
