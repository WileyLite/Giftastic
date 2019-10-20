$(document).ready(function() {
    
})
var eventsList = [
    "Dragons",
    "Rick & Morty",
    "Cats",
    "Dogs",
    "Funny",
    "Goats",
    "Screaming"
  ];
  //this function displays the buttons in id gifButtons div
  function buttonsDisplay() {
    $("#gifButtons").empty();
    for (i = 0; i < eventsList.length; i++) {
      var gifBtn = $("<button>");
      gifBtn.addClass("event");
      gifBtn.addClass("btn btn-primary");
      gifBtn.attr("data-name", eventsList[i]);
      gifBtn.text(eventsList[i]);
      $("#gifButtons").append(gifBtn);
    }
  } //this function adds new button using push to add to eventList array
  function newButtonAdd() {
    $("#addGif").on("click", function() {
      var event = $("#event-input")
        .val()
        .trim();
      //if statement keeps user from adding an empty button.
      if (event == "") {
        return false;
      }
      eventsList.push(event);

      buttonsDisplay();
      return false;
    });
  }
  // this function removes all added buttons
  function removeButton() {
    $("removeGif").on("click", function() {
      eventsList.pop(event);

      buttonsDisplay();
      return false;
    });
  }
  //this function contains api connection, ajax call and redering of returned data to div tag display
  function gifDisplay() {
    var event = $(this).attr("data-name");
    //api url string
    var apiURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      event +
      "&api_key=sYAxNyVTIWOWfoyFGSvZwDdC3wwKOOTR&limit=12";
    console.log(apiURL);
    $.ajax({
      url: apiURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $("#myGifs").empty();
      var results = response.data;
      if (results == "") {
        alert("There isn't a gif for this selected button");
      }
      //for loop generates the 12 renered images
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>"); //div for the gifs to go inside
        gifDiv.addClass("gifDiv");

        // pulling gif
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
        gifImage.attr(
          "data-still",
          results[i].images.fixed_height_small_still.url
        ); // still image
        gifImage.attr("data-animate", results[i].images.downsized.url); // animated image

        gifImage.addClass("image");
        gifDiv.append(gifImage);
        $("#myGifs").prepend(gifDiv);

        // pulling rating of gif
        var gifRating = $("<p class='rate-card'>").text(
          "Rating: " + results[i].rating
        );
        gifDiv.append(gifRating);
      }
    });
  }
  //calling the functions
  buttonsDisplay();
  newButtonAdd();
  removeButton();
  // Document Event Listeners using global settings to work image click actions
  $(document).on("click", ".event", gifDisplay);
  $(document).on("click", ".image", function() {
    var state = $(this).attr("data-state");
    if (state == "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });
