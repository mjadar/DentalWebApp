// // $(document).ready(function() {
// //     $('.dropedit').click(function() {
// //         const fname = $('.dropedit').attr('title');
// //         $('#editFname').val = fname;
// //     })
// // })

//on click on button edit in dashboard table
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

//onclick on button delete in dashboard table
$('.dropdelete').click(function() {
    const id = $('.tid').attr('title');
    $('#form_delete').attr('action', '/appointment/api/delete/' + id);
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