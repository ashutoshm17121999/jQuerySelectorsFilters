var products = [
    {
      id: "100",
      name: "iPhone 4S",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "101",
      name: "Moto X",
      brand: "Motorola",
      os: "Android",
    },
    {
      id: "102",
      name: "iPhone 6",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "103",
      name: "Samsung Galaxy S",
      brand: "Samsung",
      os: "Android",
    },
    {
      id: "104",
      name: "Google Nexus",
      brand: "ASUS",
      os: "Android",
    },
    {
      id: "105",
      name: "Surface",
      brand: "Microsoft",
      os: "Windows",
    },
  ];
  
  var brands = [
    { name: "All Brands", value: "1" },
    { name: "Apple", value: "Apple" },
    { name: "Motorola", value: "Motorola" },
    { name: "Samsung", value: "Samsung" },
    { name: "ASUS", value: "ASUS" },
    { name: "Microsoft", value: "Microsoft" },
  ];
  var os = [
    { name: "All OS", value: "1" },
    { name: "iOS", value: "iOS" },
    { name: "Android", value: "Android" },
    { name: "Windows", value: "Windows" },
  ];
  display_products();
  display_brands();
  display_os();
  function display_brands() {
    var disp = "<select id='brand_select' name='brand'>";
    for (var i = 0; i < brands.length; i++) {
      disp +=
        "<option data-id='" +
        brands[i].value +
        "' value='" +
        brands[i].value +
        "'>" +
        brands[i].name +
        "</option>";
    }
    disp += "</select>";
    $("#brand").html(disp);
  }
  function display_os() {
    var disp = "<select id='os_select' name='os'>";
    for (var i = 0; i < os.length; i++) {
      disp +=
        "<option data-os='" +
        os[i].value +
        "' value='" +
        os[i].value +
        "'>" +
        os[i].name +
        "</option>";
    }
    disp += "</select>";
    $("#os").html(disp);
  }
  
  $(document).ready(function () {
    display_products();
    $("#brand").on("change", "#brand_select", function () {
      table = 0;
      var arg1 = $(this).find(":selected").attr("data-id");
      if (arg1 == "1") {
        display_products();
      } else {
        by_brand(table, arg1);
      }
    });
    $("#brand").on("change", "#brand_select", function () {
      var arg1 = $(this).find(":selected").attr("data-id");
      if (
        $("#os").on("change", "#os_select", function () {
          table = 0;
          var arg2 = $(this).find(":selected").attr("data-os");
          if (arg2 == 1) {
            by_brand(table, arg1);
          } else {
            run1(table, arg1, arg2);
          }
          if (arg1 == 1 && arg2 == 1) {
            display_products();
          }
        })
      );
    });
  
    $("#os").on("change", "#os_select", function () {
      table = 0;
      var arg1 = $(this).find(":selected").attr("data-os");
      if (arg1 == "1") {
        display_products();
      } else {
        by_os(table, arg1);
      }
    });
    $("#os").on("change", "#os_select", function () {
      var arg2 = $(this).find(":selected").attr("data-os");
      if (
        $("#brand").on("change", "#brand_select", function () {
          table = 0;
          var arg1 = $(this).find(":selected").attr("data-id");
          if (arg1 == 1) {
            by_os(table, arg2);
          } else {
            run1(table, arg1, arg2);
          }
          if (arg2 == 1 && arg1 == 1) {
            display_products();
          }
        })
      );
    });
    $("#search-input").keyup(function () {
      var table = 0;
      if ($("#search-input").val() == "") {
        display_products();
      } else {
        var arg1 = $("#search-input").val();
        by_search(table, arg1);
      }
    });
    $("#tbody").on("click", ".delete", function () {
      var arg1 = $(this).attr("data-id");
      $("#r" + arg1).css("display", "none");
    });
  });
  function display_products() {
    var table = 0;
    for (var i = 0; i < products.length; i++) {
      table +=
        "<tr class='row' id='r" +
        products[i].id +
        "'><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td><input type='button' data-id='" +
        products[i].id +
        "' class='delete' value='X'></td></tr>";
    }
    $("#tbody").html(table);
  }
  function by_brand(table, arg1) {
    for (var i = 0; i < products.length; i++) {
      if ("'" + arg1 + "'" == "'" + products[i].brand + "'") {
        table +=
          "<tr class='row' id='r" +
          products[i].id +
          "'><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          "</td><td><input type='button' data-id='" +
          products[i].id +
          "' class='delete' value='X'></td></tr>";
      }
    }
    $("#tbody").html(table);
  }
  function by_os(table, arg1) {
    for (var i = 0; i < products.length; i++) {
      if ("'" + arg1 + "'" == "'" + products[i].os + "'") {
        table +=
          "<tr class='row' id='r" +
          products[i].id +
          "'><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          "</td><td><input type='button' data-id='" +
          products[i].id +
          "' class='delete' value='X'></td></tr>";
      }
    }
    $("#tbody").html(table);
  }
  function by_search(table, arg1) {
    for (var i = 0; i < products.length; i++) {
      if (
        products[i].id.match(arg1) ||
        products[i].name.toUpperCase().match(arg1.toUpperCase()) ||
        products[i].brand.toUpperCase().match(arg1.toUpperCase()) ||
        products[i].os.toUpperCase().match(arg1.toUpperCase())
      ) {
        table +=
          "<tr class='row' id='r" +
          products[i].id +
          "'><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          "</td><td><input type='button' data-id='" +
          products[i].id +
          "' class='delete' value='X'></td></tr>";
      }
    }
    $("#tbody").html(table);
  }
  function run1(table, arg1, arg2) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].brand == arg1 && products[i].os == arg2) {
        table +=
          "<tr class='row' id='r" +
          products[i].id +
          "'><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          "</td><td><input type='button' data-id='" +
          products[i].id +
          "' class='delete' value='X'></td></tr>";
      }
    }
    $("#tbody").html(table);
  }
// var products = [{
//     "id": "100",
//     "name": "iPhone 4S",
//     "brand": "Apple",
//     "os": "iOS"
// },
// {
//     "id": "101",
//     "name": "Moto X",
//     "brand": "Motorola",
//     "os": "Android"	
// },
// {
//     "id": "102",
//     "name": "iPhone 6",
//     "brand": "Apple",
//     "os": "iOS"
// },
// {
//     "id": "103",
//     "name": "Samsung Galaxy S",
//     "brand": "Samsung",
//     "os": "Android"
// },
// {
//     "id": "104",
//     "name": "Google Nexus",
//     "brand": "ASUS",
//     "os": "Android"
// },
// {
//     "id": "105",
//     "name": "Surface",
//     "brand": "Microsoft",
//     "os": "Windows"
// }];
// arrayBrand=[];
// arrayOs=[];
// for(var i=0;i<products.length;i++){
//     if(!arrayBrand.includes(products[i].brand)){
//     arrayBrand.push(products[i].brand);
//     }
// }
// for(var i=0;i<products.length;i++){
//     if(!arrayOs.includes(products[i].os)){
//         arrayOs.push(products[i].os);
//     }
// }

//     $(document).ready(function(){
//      var temp = [];
//     var dropdown = "";
//     dropdown += '<select><option>Brand</option>';
//     for(var i =0;i<products.length;i++){
//         if(!temp.includes(products[i].brand)){
//             // console.log("ashutosh mishra");
//             temp.push(products[i].brand);
//             //  console.log("ashutosh mishra");
//              dropdown += '<option data-brand='+arrayBrand[i]+'>'+products[i].brand+'</option>';
//         }
        
//     }
//     dropdown += '</select>';
//     $("#main-section").append(dropdown);
// })
// $(document).ready(function(){
//     var temp1 =[];
//     var dropdown2 = "";
//     dropdown2 += '<select><option>Operating System</option>';
//     for(var i =0;i<products.length;i++){
//         if(!temp1.includes(products[i].os)){
//             // console.log("cedcoss");
//             temp1.push(products[i].os);
//             dropdown2 += '<option data-os='+arrayOs[i]+' class="os">'+products[i].os+'</option>';
//         } 
//     }
//     dropdown2 += '</select>';
//     $("#main-section").append(dropdown2);
// })
// $(document).ready(function(){
//     var ossele;
//     $(document).on('click','.os', function(){
//         console.log("hi")
//         ossele=$(this).data('os');
//     tempOs=[];
//     for(var i=0;i<products.length;i++){
//         if(products[i].os==ossele){
//             tempOs.push(products[i]);
//         }
//     }
// products=tempOs;
// display(tempOs)
//     })
// })

//     $(document).ready(function(){
//     var html = "";
//     html += '<table id = "table1"><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating system</th><th>Remove</th></tr>';
//     for(var i = 0;i<products.length;i++){
//         html += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href="#">X</a></td></tr>';
//     }
//     html += '</table>';
//     $("#main-section").append(html);
//         $('<input/>').attr({type: 'text', id: 'search-box', name: 'search-box'}).appendTo('#main-section');
//         $('<input>').attr({type: 'button',id: 'search-button',name: 'search-button', value: 'search!', onclick: "search()"}).appendTo('#main-section');
//     })  
//     function search() {
    
//         var input, filter, table, tr, td1,td2, i, txtValue1, txtValue2;
//         input = document.getElementById("search-box");
//         filter = input.value.toUpperCase();
//         table = document.getElementById("table1");
//         tr = table.getElementsByTagName("tr");
//         for (i = 0; i < tr.length; i++) {
//           td1 = tr[i].getElementsByTagName("td")[0];
//           td2 = tr[i].getElementsByTagName("td")[1];
//           if (td1 || td2) {
//             txtValue1 = td1.textContent || td1.innerText;
//             txtValue2 = td2.textContent || td2.innerText;
//             if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
//               tr[i].style.display = "";
//             } else {
//               tr[i].style.display = "none";
//               console.log(101);
//             }
//           }       
//         }
//       }
// $(document).on('click','a', function(){
// //  console.log("shdjhed3efehdbgf");
// // id = $(this).parents('tr').children('td').first().text();
// //  console.log(id);
//  $(this).parents('tr').hide();
// });
// // function myHide(id){
// //     for(var i=0;i<products.length;i++){
// //         if(products[i].id == id){
// //             // console.log("idhfehjf")
// //             $("#"+products[i].id).hide();
// //         }
// // }
