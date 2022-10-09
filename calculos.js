let registrNotas = JSON.parse(localStorage.getItem("registro notasx")) ?? [];
lis_tablanotas();
function registronotas(materia, parcial1, parcial2, parcial3, examenfinal) {
  const nota = {
    materia,
    parcial1,
    parcial2,
    parcial3,
    examenfinal,
  };
  registrNotas.push(nota);
 
}




function definitiva() {
    for (let i = 0; i < registrNotas.length; i++) {
    registrNotas[i].definitiva =
        ((Number(registrNotas[i].parcial1) +
          Number(registrNotas[i].parcial2) +
          Number(registrNotas[i].parcial3)) /3) * 0.7 +
           Number(registrNotas[i].examenfinal) * 0.3;

           
    }
   
   
  }

function lis_tablanotas() {
  let tabla_nota = "";
  registrNotas.forEach((elemen) => {
    tabla_nota += ` 
    <tr class="container text-center ">
          
    <td>${elemen.materia}</td>
    <td>${elemen.parcial1}</td>
    <td>${elemen.parcial2}</td>
    <td>${elemen.parcial3}</td>
    <td>${elemen.examenfinal} </td>
    <td>${elemen.definitiva.toFixed(2)}
    
    
    
    </td>
 
    </tr>
    
    
    
    `;
  });
  


      document.querySelector("#informacion").innerHTML = tabla_nota;
   
  
}



document.querySelector("#caja1").addEventListener("submit", (e) => {
  e.preventDefault;
  const mate = document.querySelector("#materia").value;
  const n1 = document.querySelector("#nota1").value;
  const n2 = document.querySelector("#nota2").value;
  const n3 = document.querySelector("#nota3").value;
  const exam = document.querySelector("#ex").value;
  registronotas(mate, n1, n2, n3, exam);
  definitiva();
  lis_tablanotas();
  localStorage.setItem("registro notasx", JSON.stringify(registrNotas));
 
});
 