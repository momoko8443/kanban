function WeatherService(){
    this.get = function(){
        return fetch('/api/weather').then(function(result){
            return result.json();
        })
    };
}