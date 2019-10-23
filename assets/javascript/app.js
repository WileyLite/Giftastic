$(document).ready(function() {
    //getting a $ undefined error

//api key: fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg
//gif url: api.giphy.com/v1/gifs/search
//sticker url: api.giphy.com/v1/stickers/search
//request url: https://api.giphy.com/v1/gifs/search?api_key=fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg&q=&limit=25&offset=0&rating=G&lang=en
  //get search to work with html search button
  $('searchBtn').on('click',function() {
      console.log("Button Clicked")
    var searchBtn = $(this).data("search");
   console.log(searchBtn);

var queryURL = 
  "https://api.giphy.com/v1/gifs/search?api_key=fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg&q"+searchBtn+"=&limit=25&offset=0&rating=G&lang=en";
// queryURL.done(function(data) {
  console.log(queryURL);
}); 

  //query server to run when search button is clicked
  $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
    console.log(response);
  });
  //push search to container where gifs will populate html
});



