// // $(document).ready(function() {
// //     // Activate tooltip
// //     $('[data-toggle="tooltip"]').tooltip();

// //     // Select/Deselect checkboxes
// //     var checkbox = $('table tbody input[type="checkbox"]');
// //     $("#selectAll").click(function() {
// //         if (this.checked) {
// //             checkbox.each(function() {
// //                 this.checked = true;
// //             });
// //         } else {
// //             checkbox.each(function() {
// //                 this.checked = false;
// //             });
// //         }
// //     });
// //     checkbox.click(function() {
// //         if (!this.checked) {
// //             $("#selectAll").prop("checked", false);
// //         }
// //     });
// // });


// // $(document).ready(function() {
// //     $('.dropedit').click(function() {
// //         const fname = $('.dropedit').attr('title');
// //         $('#editFname').val = fname;
// //     })
// // })

// // $(document).ready(function() {
// //     $('.dropedit').click(function() {
// //         const fname = $(this).parents("tr").find(".tlname").text();
// //         const lname = $(this).parents("tr").find(".tfname").text();
// //         const phone = $(this).parents("tr").find(".phone").text();
// //         const email = $(this).parents("tr").find(".email").text();
// //         const date = $(this).parents("tr").find(".date").text();
// //         const time = $(this).parents("tr").find(".time").text();
// //         $('#editFname').val = fname;
// //         var p = "";
// //         // CREATING DATA TO SHOW ON MODEL
// //         p +=
// //             "<p id='a' name='GFGusername' >GFG UserHandle: " +
// //             fname + " </p>";

// //         p +=
// //             "<p id='c' name='GFGpp'>Practice Problems: " +
// //             lname + "</p>";
// //         p +=
// //             "<p id='d' name='GFGscores' >Coding Score: " +
// //             date + " </p>";
// //         p +=
// //             "<p id='e' name='GFGcoding' >GFG Article: " +
// //             time + " </p>";
// //         //CLEARING THE PREFILLED DATA
// //         $("#divGFG").empty();
// //         //WRITING THE DATA ON MODEL
// //         $("#divGFG").append(p);
// //     });
// // });


$('.dropedit').click(function() {
    const id = $('.tid').attr('title');
    const fname = $(this).parents("tr").find(".tlname").text().trim();
    const lname = $(this).parents("tr").find(".tfname").text().trim();
    const phone = $(this).parents("tr").find(".tphone").text().trim();
    const email = $(this).parents("tr").find(".temail").text().trim();
    const date = $(this).parents("tr").find(".tdate").text().trim().substring(0, 10);
    const time = $(this).parents("tr").find(".ttime").text().trim();
    $('#editFname').val(fname);
    $('#editLname').val(lname);
    $('#editPhone').val(phone);
    $('#editEmail').val(email);
    $('#editTime').val(time);
    $('#editDate').val(date);
    $('#id_appoint').val(id);
    $('#form_edit').attr('action', '/appointment/api/update/' + id);
});


// $('#form_edit').submit((event) => {
//     event.preventDefault();
//     var unindexedarray = $('#form_edit').serializeArray();
//     let data = {}
//         //console.log(unindexedarray);
//     $.map(unindexedarray, (n, i) => {
//         data[n['name']] = n['value'];
//     })

//     var request = {
//         "url": `http://localhost:5000/appointment/api/update/${data.id_appoint}`,
//         "method": "post",
//         "data": data
//     }

//     $.ajax(request).done((resp) => alert("updated successfully"));

// });