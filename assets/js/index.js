const isim = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const studentId = document.getElementById('studentId')
const next = document.getElementById("submit");
const formId = document.getElementById("formId")


formId.addEventListener('submit', function (event) {
     event.preventDefault();

     fetch('https://655c844f25b76d9884fd70a7.mockapi.io/students', {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             name: isim.value,
             surname: surname.value,
             age: age.value,
             sdutendId: studentId.value,
            }),
         }) 
    .then((response) => response.json())
    .then(data => {
        console.log(
            data
        );
    })
 });
