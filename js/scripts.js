function sumResponses(responses) {
  let sum = 0;
  for (let i = 0; i < responses.length; i++) {
    sum += responses[i];
  }
  return sum;
}

$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    const name = $("input#name").val();
    const sign = $("select#zodiac").val();
    
    const animal = parseInt($("input:radio[name=animal]:checked").val());
    const country = parseInt($("input:radio[name=country]:checked").val());
    const year = parseInt($("input:radio[name=year]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const musketeer = parseInt($("input:radio[name=musketeer]:checked").val());
    let questionnaireResponses = [animal, country, year, color, musketeer];
    
    $("#result").text("We recommend you learn Python!");
    
    event.preventDefault();
  });
});