
function checkValidaty(){
    const questions =[ 
        document.getElementById("1"),
        document.getElementById("2"),
        document.getElementById("3"),
        document.getElementById("4"),
        document.getElementById("5"),
        document.getElementById("6"),
        document.getElementById("7"),
        document.getElementById("8"),
        document.getElementById("9"),
        document.getElementById("10"),
        document.getElementById("11"),
        document.getElementById("12"),
        document.getElementById("13"),
        document.getElementById("14"),
        document.getElementById("15"),
        document.getElementById("16"),
        document.getElementById("17"),
        document.getElementById("18"),
        document.getElementById("19"),
        document.getElementById("20"),
        document.getElementById("21"),
        document.getElementById("22"),
        document.getElementById("23"),
        document.getElementById("24"),
        document.getElementById("25"),
        document.getElementById("26"),
        document.getElementById("27"),
        document.getElementById("28"),
        document.getElementById("29"),
        document.getElementById("30"),
        document.getElementById("31"),
        document.getElementById("32"),
        document.getElementById("33"),
        document.getElementById("34"),
        document.getElementById("35"),
        document.getElementById("36"),
        document.getElementById("37"),
        document.getElementById("38"),
        document.getElementById("39"),
        document.getElementById("40"),
        document.getElementById("41"),
        document.getElementById("42"),
        document.getElementById("43"),
        document.getElementById("44"),
        document.getElementById("45"),
        document.getElementById("46"),
        document.getElementById("47"),
        document.getElementById("48"),
        document.getElementById("49"),
        document.getElementById("50"),
        document.getElementById("51"),
        document.getElementById("52"),
        document.getElementById("53"),
        document.getElementById("54"),
        document.getElementById("55"),
        document.getElementById("56"),
        document.getElementById("57"),
        document.getElementById("58"),
        document.getElementById("59"),
        document.getElementById("60"),
        document.getElementById("61"),
        document.getElementById("62"),
        document.getElementById("63"),
        document.getElementById("64"),
        document.getElementById("65"),
        document.getElementById("66"),
        document.getElementById("67"),
        document.getElementById("68"),
        document.getElementById("69"),
        document.getElementById("70"),
        document.getElementById("71"),
        document.getElementById("72"),
        document.getElementById("73"),
        document.getElementById("74"),
        document.getElementById("75"),
        document.getElementById("76"),
        document.getElementById("77"),
        document.getElementById("78"),
        document.getElementById("79"),
        document.getElementById("80"),
        document.getElementById("81"),
        document.getElementById("82"),
        document.getElementById("83"),
        document.getElementById("84")
    ];

      var counter = 0;
      var sValue=0; var aValue=0;  var dValue=0;

      for (let i=0; i<questions.length; i++){
          if (questions[i].checked){
              counter++;
          }
      }
      if (counter===21){
          alert("Your answers have been submitted!");
      }
      else{
          alert("You must fill up all the questions!");
      }

    // *** Checking for results ***
   if (counter===21){
      for (let i=0; i<questions.length; i++){
        if (questions[i].className=="s" && questions[i].checked){
            sValue += Number(questions[i].value);
        }
        else if (questions[i].className=='d' && questions[i].checked ){
            dValue += Number(questions[i].value);
        }
        else if (questions[i].className=='a' && questions[i].checked){
            aValue += Number(questions[i].value);
        }
        
    }
    console.log("stress= " + sValue);
    console.log("depression= " + dValue);
    console.log("anxiety= " + aValue);
}
    
       
}
