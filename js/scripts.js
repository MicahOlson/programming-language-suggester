$(document).ready(function() {
  console.log("Script executing!")
  $("#questionnaire").submit(function(event) {
    console.log("Submit form successfully reached.")
    const name = $("input#name").val();
    const sign = $("select#zodiac").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const country = $("input:radio[name=country]:checked").val();
    const year = $("input:radio[name=year]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const musketeer = $("input:radio[name=musketeer]:checked").val();
    
    console.log("Name: " + name);
    console.log("Sign: " + sign);
    console.log("Animal: " + animal);
    console.log("Country: " + country);
    console.log("Year: " + year);
    console.log("Color: " + color);
    console.log("Musketeer: " + musketeer);

    $("#result").text("We recommend you learn Python!");
    
    event.preventDefault();
  });
});