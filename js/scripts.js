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
    
    $("#response").text("We're very excited about your interest in programming, " + name + "! Given the wide range of languages and programming domains, getting started is the hardest part. Since you are " + sign + ", and based on your answers to the questionnaire, we recommend you start learning:");

    $("#result").text("Python!");
    
    event.preventDefault();
  });
});