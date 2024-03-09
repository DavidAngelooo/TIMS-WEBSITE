$(document).ready(function () {
    let db = new Localbase('tims');
    var courseName = document.getElementById("course").innerHTML;

    db.collection("registration").get().then(doc => {
 
        $('#example3').DataTable({
            data: doc.filter(e=> e.course == courseName && e.status == 'ongoing'),
            columns: [
                { data: 'firstname', title: 'First Name' },
                { data: 'middlename', title: 'Middle Name' },
                { data: 'lastname', title: 'Last Name' },
                { data: 'suffixname', title: 'Suffix Name' },
                { data: 'barangay', title: 'Barangay' },
                { data: 'parentsname', title: 'Parents Name' },
                { data: 'address', title: 'Address' },
                { data: 'phone', title: 'Contact Number' },
                { data: 'birthdate', title: 'Birth Date' },
                { data: 'birthplace', title: 'Birth Place' },
                { data: 'civilstat', title: 'Civil Status' },
                { data: 'email', title: 'Email Address' },
                { data: 'empstat', title: 'Employee Status' },
                { data: 'course', title: 'Course' },
                { data: 'status', title: 'Status' },

            ]
        });
        $('#graduated').DataTable({
            data: doc.filter(e=> e.course == courseName && e.status == 'graduated'),
            columns: [
                { data: 'firstname', title: 'First Name' },
                { data: 'middlename', title: 'Middle Name' },
                { data: 'lastname', title: 'Last Name' },
                { data: 'suffixname', title: 'Suffix Name' },
                { data: 'barangay', title: 'Barangay' },
                { data: 'parentsname', title: 'Parents Name' },
                { data: 'address', title: 'Address' },
                { data: 'phone', title: 'Contact Number' },
                { data: 'birthdate', title: 'Birth Date' },
                { data: 'birthplace', title: 'Birth Place' },
                { data: 'civilstat', title: 'Civil Status' },
                { data: 'email', title: 'Email Address' },
                { data: 'empstat', title: 'Employee Status' },
                { data: 'course', title: 'Course' },
                { data: 'status', title: 'Status' },

            ]
        });

        $('#new').DataTable({
            data: doc.filter(e=> e.course == courseName && e.status == 'new'),
            columns: [
                { data: 'firstname', title: 'First Name' },
                { data: 'middlename', title: 'Middle Name' },
                { data: 'lastname', title: 'Last Name' },
                { data: 'suffixname', title: 'Suffix Name' },
                { data: 'barangay', title: 'Barangay' },
                { data: 'parentsname', title: 'Parents Name' },
                { data: 'address', title: 'Address' },
                { data: 'phone', title: 'Contact Number' },
                { data: 'birthdate', title: 'Birth Date' },
                { data: 'birthplace', title: 'Birth Place' },
                { data: 'civilstat', title: 'Civil Status' },
                { data: 'email', title: 'Email Address' },
                { data: 'empstat', title: 'Employee Status' },
                { data: 'course', title: 'Course' },
                { data: 'status', title: 'Status' },
        

            ]
        });
    });

});
