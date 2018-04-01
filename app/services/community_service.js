function CommunityService(){
    this.get = function(){
        return fetch('/api/community/activity').then(function(result){
            return result.json();
        })
    };
}