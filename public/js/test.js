
function renderTestPage(){

    let html = '';

        for (let i=0; i<questions.length; i++){
        
        const q = questions[i];
        const ref = i+1;

        html += `
        <tr>
        <td>${i+1} (${q.type})</td>
        <td>${q.question}</td>
        
        <form name="q-table" >
        <td><button class="delete" style="display:none" onClick="deleteQuestion(${i})"> Delete </button></td>
        <td><input  class="${q.type}" type="radio" name="${ref}" value="0">0</td>
        <td><input  class="${q.type}" type="radio" name="${ref}" value="1">1</td>
        <td><input  class="${q.type}" type="radio" name="${ref}" value="2">2</td>
        <td><input  class="${q.type}" type="radio" name="${ref}" value="3">3</td>
       </tr>
       </form>

       <style>
       .delete{
            display: none;
            color: white;
            border-radius: 1px 2px;
            background-color: red;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            padding: 2px;
       }
       </style>
        `;
    }

    document.getElementById('test-tool').innerHTML = html;


}



function validate() {

    var radios = document.getElementsByTagName('input');
    let counter=0;
    for (let i = 0; i < radios.length; i++) {
    
        if (radios[i].checked) {
        counter++;
    } 
    }
      if (counter!=(questions.length)){
          alert("Kindly answer all the questions!");
      }
      else{
          alert("Thank you for participating! Your results will be viewed by the specialist");
      }
    
}


// function showResult(){
//     var radios = document.getElementsByTagName('input');
//     for (let i=0; i<questions.length; i++){
//        let sValue=0;
//        let aValue=0;
//        let dValue=0;

//         if (questions[i].type==='s' && radios[i].checked){
//             sValue += Number(radios[i].value);
//         }
//         else if (questions[i].type==='a' && radios[i].checked){
//             aValue += Number(radios[i].value);
//         }
//         else if (questions[i].type==='d' && radios[i].checked){
//             dValue += Number(radios[i].value);
//         }
//     }
   
//     console.log("S= " + sValue);
//     console.log("A= " + aValue);
//     console.log("D= " + dValue);
    
//     alert(`*****RESULTS*****
//                Stress = ${sValue}
//                Anxiety = ${aValue}
//                Depression = ${dValue}
//         `);
// }


function deleteQuestion(index){
    if (confirm(`Are you willing to delete this question?`)){
    questions.splice(index, 1);
    renderTestPage();
    }
}

let counterCustom = 0;
function customize(){
    let btn = document.getElementsByClassName('delete');
    counterCustom++;
    if (counterCustom%2===0){
        for (i=0; i<questions.length; i++){
            btn[i].style.display='none';
        }
    }

    else if (counterCustom%2 !==0 ){
        for (i=0; i<questions.length; i++){
            btn[i].style.display='block';
        }
    }

   
   
}

