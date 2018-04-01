function RealDataService(){
    this.get = function(){
        return fetch('/api/realdata').then(function(result){
            return result.json();
        })
    };
}