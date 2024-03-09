document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims')

    var enrollies = []
    db.collection('registration').doc({  course: 'ptc_healthcare' }).get().then(document => { 
        console.log(document);
    });

});
