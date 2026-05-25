//Question25
function longestCountry(countries){
    return countries.reduce((longest,country)=>{
        if(country.length>longest.length){
            return country;
        }
        else{
            return longest;
        }
    },'');
}
console.log(longestCountry((["Australia", "Germany", "United States of America"])));
