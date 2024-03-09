
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims')
    const registerForm = document.querySelector("#registerCourse");

    var courseName = window.location.search.split("=")[1];
    document.getElementById("course").innerHTML = courseName;
    

    registerForm.addEventListener("submit", e => {
        e.preventDefault();
        var inputs = registerForm.getElementsByTagName("input");
        var inputByFname = inputs["fname"];
        var inputByMname = inputs["mname"];
        var inputByLname = inputs["lname"];
        var inputBySname = inputs["sname"];
        var inputByBrgy = inputs["brgy"];
        var inputByPname = inputs["pname"];
        var inputByAddress = inputs["address"];
        var inputByContactnum = inputs["phone"];
        var inputByBirthdate = inputs["birthdate"];
        var inputByBirthplace= inputs["birthplace"];
        var inputByCivilStat = inputs["civilstat"];
        var inputByEmail = inputs["email"];
        var inputByEmpstat = inputs["empstat"];

        db.collection('registration').add({
            firstname: inputByFname.value,
            middlename: inputByMname.value,
            lastname: inputByLname.value,
            suffixname: inputBySname.value,
            barangay: inputByBrgy.value,
            parentsname: inputByPname.value,
            address: inputByAddress.value,
            phone: inputByContactnum.value,
            birthdate: inputByBirthdate.value,
            birthplace: inputByBirthplace.value,
            civilstat: inputByCivilStat.value,
            email: inputByEmail.value,
            empstat: inputByEmpstat.value,
            course: courseName,
            status: 'new'
          });
        
        db.collection("course_schedule").doc({ course: courseName }).get().then(doc => {
            db.collection('course_schedule').doc({ course: courseName }).update({
                slot: doc.slot -1
            }).then(d=> {
                alert ("Registered successfully");
                window.location.href = "/learner/"+courseName+".html";
            });
        });
        
        
    });
});
 

function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    }
}