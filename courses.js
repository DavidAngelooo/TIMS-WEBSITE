
//eto yung javascript na mahalaga to call our database 
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims');

    // db.collection("course_schedule").add({
    //     courseName: "Bookkeeping",
    //     courseAccreditationNumber: 'AC-BHS0204102224102',
    //     slot: 47,
    //     schedule: 'PM'
    //   });
    db.collection("course_schedule").doc({ courseName: "Bookkeeping" }).get().then(doc => {
        console.log(doc)
        if(doc === undefined){
            document.getElementById("bookkeepingslot").innerHTML = '0';
        }
        else{
            document.getElementById("bookkeepingslot").innerHTML = doc.slot;

        }
      });
});