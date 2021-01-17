function sumAnswers(answers) {
  let sum = 0;
  for (let i = 0; i < answers.length; i++) {
    sum += answers[i];
  }
  return sum;
}

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3500
  });

  let result;
  $("#questionnaire").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    const sign = $("select#zodiac").val();
    
    const animal = parseInt($("input:radio[name=animal]:checked").val());
    const country = parseInt($("input:radio[name=country]:checked").val());
    const year = parseInt($("input:radio[name=year]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const musketeer = parseInt($("input:radio[name=musketeer]:checked").val());
    const questionnaireAnswers = [animal, country, year, color, musketeer];
    
    const answersSummed = sumAnswers(questionnaireAnswers);
    if (answersSummed <= 40) {
      result = "#ruby-logo";
    } else if (answersSummed > 40 && answersSummed <= 50) {
      result = "#csharp-logo";
    } else if (answersSummed > 50 && answersSummed <= 60) {
      result = "#js-logo";
    } else if (answersSummed > 60 && answersSummed <= 70) {
      result = "#go-logo";
    } else if (answersSummed > 70 && answersSummed <= 80) {
      result = "#python-logo";
    } else if (answersSummed > 80 && answersSummed <= 90) {
      result = "#rust-logo";
    } else if (answersSummed > 90 && answersSummed <= 100) {
      result = "#swift-logo";
    }

    $(".page-body").toggle();
    $(".response-group").fadeToggle();

    $("#response-name").text(name);
    $("#response-sign").text(sign);
    $(result).toggle();
  });
  
  $("button#go-back").click(function() {
    $(result).toggle();
    $(".response-group").toggle();
    $(".page-body").fadeToggle();
  });
});