//JAVASCRIPT//



$(document).ready((event) =>{
  $('#tbl_1').hide((event) =>{
    $(".getJdata").click((event) =>{
    var edit = false;
      $("#tbl_1").show();
      $.getJSON('data.json' ,(data) =>{
        var data1='';
      $.each(data, (key, value) =>{
        data1 += '<tr data-name="'+value.first_name+'" data-mid="'+value.middle_name+'" data-last="'+value.last_name+'" data-email="'+value.email+'" data-phn="'+value.phone_number+'" data-role="'+value.role+'" data-address="'+value.address+'">';
        data1 += '<td >' +value.first_name+ '</td>';
        data1 += '<td>' +value.middle_name+ '</td>';
        data1 += '<td>' +value.last_name+ '</td>';
        data1 += '<td>' +value.email+ '</td>';
        data1 += '<td>' + value.phone_number + '</td>';
        data1 += '<td>' +value.role + '</td>';
        data1 += '<td>' +value.address+ '</td>';
        data1 += '<td><button class="btn btn-outline-info btn-xs btn-edit">Edit</button><button class="btn btn-outline-danger btn-xs btn-delete">Delete</button></td>';
        data1 += '</tr>';
      });
       $('#tbl_1').append(data1);
     });
  });
    });

    //Delete button
   $("#tbl_1").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });

   //Edit Button
   $("#tbl_1").on("click", ".btn-edit", function(){
        var  first_name = $(this).parents("tr").attr("data-name");
        var  middle_name = $(this).parents("tr").attr('data-mid');
        var  last_name = $(this).parents("tr").attr('data-last');
        var  email = $(this).parents("tr").attr("data-email");
        var  phone_number = $(this).parents("tr").attr('data-phn');
        var  role= $(this).parents("tr").attr('data-role');
        var  address= $(this).parents("tr").attr('data-address');

        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_first_name" value="'+first_name+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_last_name" value="'+middle_name+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_middle_name" value="'+last_name+'">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="edit_email" value="'+email+'">');
        $(this).parents("tr").find("td:eq(4)").html('<input name="edit_phone_number" value="'+phone_number+'">');
        $(this).parents("tr").find("td:eq(5)").html('<select id="mySelect" value="User" name="edit_role"><option >Admin</option><option >User</option></select>');
        $(this).parents("tr").find("td:eq(6)").html('<input name="edit_address" value="'+address+'">');    
        $(this).parents("tr").find("td:eq(7)").prepend("<button class='btn btn-outline-primary btn-xs btn-update'>Update</button><button class='btn btn-outline-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

//Update Data
$("#tbl_1").on("click", ".btn-update", function(){
  first_name = $(this).parents("tr").find("input[name='edit_first_name']").val();
   middle_name = $(this).parents("tr").find("input[name='edit_middle_name']").val();
   last_name = $(this).parents("tr").find("input[name='edit_last_name']").val();
   email = $(this).parents("tr").find("input[name='edit_email']").val();
   phone_number = $(this).parents("tr").find("input[name='edit_phone_number']").val();
   role = $(this).parents("tr").find("select[name='edit_role']").val();
   address = $(this).parents("tr").find("input[name='edit_address']").val();
  
   $(this).parents("tr").find("td:eq(0)").text(first_name);
   $(this).parents("tr").find("td:eq(1)").text(middle_name);
   $(this).parents("tr").find("td:eq(2)").text(last_name);
   $(this).parents("tr").find("td:eq(3)").text(email);
   $(this).parents("tr").find("td:eq(4)").text(phone_number);
   $(this).parents("tr").find("td:eq(5)").text(role);
   $(this).parents("tr").find("td:eq(6)").text(address); 

   $(this).parents("tr").attr('data-first_name', first_name);
   $(this).parents("tr").attr('data-middle_name', middle_name);
   $(this).parents("tr").attr('data-last_name', last_name);
   $(this).parents("tr").attr('data-email', email);
   $(this).parents("tr").attr('data-phone_number', phone_number);
   $(this).parents("tr").attr('data-role', role);
   $(this).parents("tr").attr('data-address', address);
   
   $(this).parents("tr").find(".btn-edit").show();
   $(this).parents("tr").find(".btn-cancel").remove();
   $(this).parents("tr").find(".btn-update").remove();

});


// Cancel button
$("#tbl_1").on("click", ".btn-cancel", function(){
          first_name = $(this).parents("tr").attr('data-name');
          middle_name = $(this).parents("tr").attr('data-mid');
          last_name = $(this).parents("tr").attr('data-last');
          email = $(this).parents("tr").attr("data-email");
          phone_number = $(this).parents("tr").attr('data-phn');
          role= $(this).parents("tr").attr('data-role');
          address= $(this).parents("tr").attr('data-address');

          $(this).parents("tr").find("td:eq(0)").text(first_name);
          $(this).parents("tr").find("td:eq(1)").text(middle_name);
          $(this).parents("tr").find("td:eq(2)").text(last_name);
          $(this).parents("tr").find("td:eq(4)").text(email);
          $(this).parents("tr").find("td:eq(3)").text(phone_number);
          $(this).parents("tr").find("td:eq(5)").text(role);
          $(this).parents("tr").find("td:eq(6)").text(address);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$(".button2").click(function(){
  location.reload(true);
});

});
 

