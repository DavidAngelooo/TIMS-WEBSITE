
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims')
    const addCourseForm = document.querySelector("#addCourse");

    addCourseForm.addEventListener("submit", e => {
        e.preventDefault();
        var inputs = addCourseForm.getElementsByTagName("input");
        var inputByCourse = inputs["course"];
        var inputBySlot = inputs["slot"];

        db.collection('course_schedule').add({
            course: inputByCourse.value,
            slot: inputBySlot.value
        });
        alert ("Added successfully");
        window.location.href="admin.html";

    });


    db.collection("course_schedule").get().then(doc => {
        $('#example3').DataTable({
            data: doc,
            columns: [
                { data: 'course', title: 'Course Name' },
                { data: 'slot', title: 'Slot Count' },

            ]
        });
    });

});