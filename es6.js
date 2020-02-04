

function myFunction(){
fetch("./data.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    data.forEach(data => {
        let tblstr = `
           <tr data-name="'${data.first_name}'" data-mid="'${data.middle_name}'" data-last="'${data.last_name}'" data-email="'${data.email}'" data-phn="'${data.phone_number}'" data-role="'${data.role}'" data-address="'${data.address}'">
            <td> ${data.first_name}</td>
            <td> ${data.middle_name}</td>
            <td> ${data.last_name}</td>
            <td> ${data.email}</td>
            <td> ${data.phone_number}</td>
            <td> ${data.role}</td>
            <td>${data.address}</td>
            <td><button class="btn btn-outline-info btn-xs btn-edit" onclick="Editbtn">Edit</button>
            <button class="btn btn-outline-danger btn-xs btn-delete">Delete</button></td>
            </tr>
                 `
               tbl_1.insertAdjacentHTML("beforeend", tblstr)
})
//Delete button
$(document).ready((_event) =>{
    $("#tbl_1").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });
    //Refresh button
    $(".button2").click(function(){
        location.reload(true);
      });
    });
    
//Edit button
this.Editbtn = function(){
    first_name = parents("tr").attr("data-name");
    mid_name = parents("tr").attr("data-mid");
    last_name = parents("tr").attr("data-last");
    email = parents("tr").attr("email");
    phn_number = parents("tr").attr("phn_number");
    role = parents("tr").attr("role");
    address = parents("tr").attr("address");

    // this.parents("tr").find("td:eq(0)").html('<input name ="edit_first_name" value="'$(data.first_name)'">');


}


    });    
}



