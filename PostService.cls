
public with sharing class PostService {
    @AuraEnabled(cacheable=true)
    public static List<Post__c> getAllPosts() {
        List<Post__c> result = new List<Post__c>();
        try {
            result = [SELECT Id, Title__c, Author__c, Thumbnail__c, Self_text__c FROM Post__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return result;
    }
}
