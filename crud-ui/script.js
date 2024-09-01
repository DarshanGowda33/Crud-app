
function createPage(){
    document.getElementById("displayData").style.display='none';
    document.getElementById("updateById").style.display='none';
    document.getElementById("updateDisplay").style.display='none';
    document.getElementById("photo").style.display='none';
    document.getElementById("deleteByUsn").style.display="none";
    document.getElementById("deleteDisplay").style.display='none';

    document.getElementById("f1").style.display='block';
}

function saveStudent(){
    const student = {
        "name" : document.getElementById("name").value,
        "usn" : document.getElementById("usn").value,
        "sem" : document.getElementById("sem").value,
        "branch" : document.getElementById("branch").value,
        "batch" : document.getElementById("batch").value
    }

    fetch(`http://localhost:8080/addStudent`,{
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(student)
    })
    .then(response => {
        if(! response.ok){
            window.alert("Error while Adding New Student !");
            return;
        }
        // console.log(response.json())
        window.alert("Student Added")
        homePage();
    })
    .catch(error => console.log(error))


}
function displayPage(){
    document.getElementById("f1").style.display='none';
    document.getElementById("updateById").style.display='none';
    document.getElementById("updateDisplay").style.display='none';
    document.getElementById("photo").style.display='none';
    document.getElementById("deleteByUsn").style.display="none";
    document.getElementById("deleteDisplay").style.display='none';

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

function updatePage(){
    document.getElementById("f1").style.display='none';
    document.getElementById("displayData").style.display='none';
    document.getElementById("photo").style.display='none';
    document.getElementById("deleteByUsn").style.display="none";
    document.getElementById("deleteDisplay").style.display='none';

    document.getElementById("updateById").style.display='block';
}

function getStudent(){
    var val = document.getElementById("updateId").value;
    // console.log("targeted id :-> " + val);
    fetch(`http://localhost:8080/getStudentByUsn/${val}`)
    .then(respons => respons.json())
    .then(res => {
        var html = `<h3>Enter Updated Details</h3>
            <input type="text" id="name1" value="${res.name}">
            <input type="text" id="sem1" value="${res.sem}">
            <input type="text" id="branch1" value="${res.branch}">
            <input type="text" id="batch1" value="${res.batch}"></input>
            <button onclick="updateData()">Update Student</button>`;
        document.getElementById("updateDisplay").style='block';
        document.getElementById("updateDisplay").innerHTML=html;
    }).catch(error=> {
        window.alert("No Student With This USN");
    });
}


function updateData(){
    const student = {
        "name" : document.getElementById("name1").value,
        "sem" : document.getElementById("sem1").value,
        "branch" : document.getElementById("branch1").value,
        "batch" : document.getElementById("batch1").value
    };
    // console.log(student);
    let USN = document.getElementById("updateId").value;
    fetch(`http://localhost:8080/updateStudentByUsn/${USN}` , {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(student)
    })
     .then(response => {
        if(!response.ok){
            window.alert("Error while Updating the data");
            return;
        }
        window.alert("Student Updated !")
        homePage();
     })
}


function deletePage(){
    document.getElementById("f1").style.display='none';
    document.getElementById("displayData").style.display='none';
    document.getElementById("updateById").style.display='none';
    document.getElementById("updateDisplay").style.display='none';
    document.getElementById("photo").style.display='none';
    document.getElementById("deleteByUsn").style.display="block";
}

function deleteStudent(){
    var USN = document.getElementById("deleteUsn").value;
    fetch(`http://localhost:8080/getStudentByUsn/${USN}`)
    .then(respons => respons.json())
    .then(res => {
        // console.log(res)
        var html = `<h3>Enter Updated Details</h3>
            <input type="text" id="name2" value="${res.name}">
            <input type="text" id="sem2" value="${res.sem}">
            <input type="text" id="branch2" value="${res.branch}">
            <input type="text" id="batch2" value="${res.batch}"></input>
            <button onclick="deleteData()">Delete Student</button>`;
        document.getElementById("deleteDisplay").style='block';
        document.getElementById("deleteDisplay").innerHTML=html;
    }).catch(error=> {
        // console.log(res)
        window.alert("No Student With This USN");
    });
}

function deleteData(){
    var USN = document.getElementById("deleteUsn").value;
    // console.log(USN);
    fetch(`http://localhost:8080/deleteByUsn/${USN}` , {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
     .then(response => {
        if(!response.ok){
            window.alert("Error while Deleting the data");
            return;
        }
        window.alert("Student Deleted !")
        homePage();
    })
    .catch(error => console.log(error));
}


function homePage(){
    document.getElementById("photo").style.display='block';
    document.getElementById("f1").style.display='none';
    document.getElementById("displayData").style.display='none';
    document.getElementById("updateById").style.display='none';
    document.getElementById("updateDisplay").style.display='none';
    document.getElementById("deleteDisplay").style.display='none';
    document.getElementById("deleteByUsn").style.display="none";

    document.getElementById("photo").innerHTML=`<button><h1>Welcome To Student Management System</h1><img src="/crud-ui/photo.jpg" alt=""</button>`
}