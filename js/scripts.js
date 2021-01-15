function sumAnswers(answers) {
  let sum = 0;
  for (let i = 0; i < answers.length; i++) {
    sum += answers[i];
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
    const questionnaireAnswers = [animal, country, year, color, musketeer];

    $(".page-body").hide();
    $(".response-group").fadeIn();
    
    $("#response").text("We're very excited about your interest in programming, " + name + "! Given the wide range of languages and different programming domains, getting started is the hardest part. Based on your answers to the questionnaire, and being " + sign + ", we recommend you start with:");

    const answersSummed = sumAnswers(questionnaireAnswers);
    if (answersSummed <= 40) {
      result = "Ruby";
    } else if (answersSummed > 40 && answersSummed <= 50) {
      result = "C#";
    } else if (answersSummed > 50 && answersSummed <= 60) {
      result = "JavaScript";
    } else if (answersSummed > 60 && answersSummed <= 70) {
      result = "Go";
    } else if (answersSummed > 70 && answersSummed <= 80) {
      result = "Python";
    } else if (answersSummed > 80 && answersSummed <= 90) {
      result = "Rust";
    } else if (answersSummed > 90 && answersSummed <= 100) {
      result = "Swift";
    }

    $("#result").text(result);
    
    event.preventDefault();
  });
});