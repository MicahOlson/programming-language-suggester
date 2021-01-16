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

    if (!name || !sign || !animal || !country || !year || !color || !musketeer) {
      alert("Oops, looks like the form is incomplete. Please fill out all fields and try again.")
    } else {
      $(".page-body").hide();
      $(".response-group").fadeIn();
      
      $("#response-name").text(name);
      $("#response-sign").text(sign);

      const answersSummed = sumAnswers(questionnaireAnswers);
      let result;
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

      $(result).show();
    }
  });
  $("button#go-back").click(function() {
    $(".response-group").hide();
    $(".page-body").fadeIn();
  });
});