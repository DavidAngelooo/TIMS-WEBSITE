
//eto yung javascript na mahalaga
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims');

    // db.collection("course_schedule").add({
    //     courseName: "Bookkeeping",
    //     courseAccreditationNumber: 'AC-BHS0204102224102',
    //     slot: 47,
    //     schedule: 'PM'
    //   });
    db.collection("course_schedule").doc({ courseName: "Cookery" }).get().then(doc => {
        console.log(doc)
        if(doc === undefined){
            document.getElementById("cookeryslot").innerHTML = '0';
        }
        else{
            document.getElementById("cookeryslot").innerHTML = doc.slot;

        }
      });
});