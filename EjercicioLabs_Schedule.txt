global with sharing class EjercicioLabs_Schedule implements Schedulable{
    global void execute(SchedulableContext ctx) {

	//Object to create: Post -> Post__c, 
	//  Field: Author -> Author__c,
	//  Self text -> Self_text__c
	// Thumbnail -> Thumbnail__c
	// Title -> Title__c

	//Custom App Post and Post Layout -> Asign that Layout to App "Posts"
	

        //To run this schedule hourly you just should run this code in developer console (Anonymous)
        //System.schedule('Posts updates: at 45 mins', '0 180 * * * ?', new SomeClassName());
        //System.schedule('Posts updates: at 0 hour', '0 0 14 * * ? 2021', new EjercicioLabs_Schedule());

        parseResponseFromServer();
    }
    @future(callout=true)
    public static void parseResponseFromServer(){

        String body = getCalloutResponseContents();

        if(body == 'Error on request'){

            System.debug('Request not completed! ');

        }else{

        String newBody =  body.replaceFirst('"data"', '"DataSourceContent"');

        Response_cls responseParsed = (Response_cls) Response_cls.parse(newBody);
                
        List<Post__c> posts = [SELECT Id FROM Post__c];

            try {
                Delete posts;
                System.debug('Posts Deleted! ');
            } catch (DmlException e) {
                System.debug('Unable to delete posts, size: '+ e);
            }
            
            posts = new List<Post__c>();
        
        for (Response_cls.cls_children item : responseParsed.DataSourceContent.children) {
            
            Post__c post = new Post__c(
                Title__c = item.data.title,
                Author__c = item.data.author_fullname,
                Thumbnail__c = item.data.thumbnail,
                Self_text__c = item.data.selftext
            );
            posts.add(post);

        }
            System.debug('Automatic Job PostsSchedule Run at: ' +System.now());

            Insert posts;
        }
            
    }

    public static String getCalloutResponseContents() {

        String url= 'https://www.reddit.com/r/aww.json';

        // Instantiate a new http object
        Http h = new Http();
    
         // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');
    
        // Send the request, and return a response
        HttpResponse res = h.send(req);
    
            String result;
    
            //Verify code of request
            if(res.getStatusCode() == 200){

                result = res.getBody();

            }else if (res.getStatusCode() != 200){

                result = 'Error on request';
            }
    
            return result;
      }
}
