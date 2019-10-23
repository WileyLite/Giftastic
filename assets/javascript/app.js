$(document).ready(function() {
    

//api key: fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg
//gif url: api.giphy.com/v1/gifs/search
//sticker url: api.giphy.com/v1/stickers/search
//request url: https://api.giphy.com/v1/gifs/search?api_key=fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg&q=&limit=25&offset=0&rating=G&lang=en

var xhr = $.get(
  "https://api.giphy.com/v1/gifs/search?api_key=fhxV761nHZlyvKOCe8FSoC5J2sGD4Vwg&qfunny=&limit=25&offset=0&rating=G&lang=en"
);
xhr.done(function(data) {
  console.log("success got data", data);

  //get search to work with html search button
  //query server to run when search button is clicked
  $.ajax({ url: xhr, method: "GET" }).done(function(response) {
    console.log(response);
  });
  //push search to container where gifs will populate html
});
});