
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims');
    var courseName = document.getElementById("course").innerHTML;

    db.collection("course_schedule").doc({ course: courseName }).get().then(doc => {
        if(doc === undefined){
            document.getElementById("slots").innerHTML = '0 SLOTS';
        }
        else{
            document.getElementById("slots").innerHTML = doc.slot + " S   LOTS";
        }
      });
});