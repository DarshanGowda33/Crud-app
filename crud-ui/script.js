
function createPage(){
    document.getElementById("displayData").style.display='none';
    
    document.getElementById("f1").style.display='block';
}

function displayPage(){
    document.getElementById("f1").style.display='none';
    document.getElementById("displayData").style.display='block';
    fetch("http://localhost:8080/displayStudents")
    .then(respons => respons.json())
    .then(res => { 
        let html ='';
        // console.log(res);
        res.forEach( element => {
            html += `<tr>
                    <td>${element.name}</td>
                    <td>${element.usn}</td>
                    <td>${element.branch}</td>
                    <td>${element.sem}</td>
                    <td>${element.batch}</td>
                    </tr>`;
                });
        document.getElementById('tableData').innerHTML=html;
    })
    .catch(error => console.error(error));
}





// location.reload();
    // window.location();
// function homePage(){
//     window.location(Nan);
// }
