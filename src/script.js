var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

    $(document).ready(function(){
     var temp = [];
    var dropdown = "";
    dropdown += '<select><option>Brand</option>';
    for(var i =0;i<products.length;i++){
        if(!temp.includes(products[i].brand)){
            // console.log("ashutosh mishra");
            temp.push(products[i].brand);
            //  console.log("ashutosh mishra");
             dropdown += '<option>'+products[i].brand+'</option>';
        }
        
    }
    dropdown += '</select>';
    $("#main-section").append(dropdown);
})
$(document).ready(function(){
    var temp1 =[];
    var dropdown2 = "";
    dropdown2 += '<select><option>Operating System</option>';
    for(var i =0;i<products.length;i++){
        if(!temp1.includes(products[i].os)){
            // console.log("cedcoss");
            temp1.push(products[i].os);
            dropdown2 += '<option>'+products[i].os+'</option>';
        } 
    }
    dropdown2 += '</select>';
    $("#main-section").append(dropdown2);
})


    $(document).ready(function(){
    var html = "";
    html += '<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating system</th><th>Remove</th></tr>';
    for(var i = 0;i<products.length;i++){
        html += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href="#">X</a></td></tr>';
    }
    html += '</table>';
    $("#main-section").append(html);
    
})  
$(document).on('click','a', function(){
//  console.log("shdjhed3efehdbgf");
// id = $(this).parents('tr').children('td').first().text();
//  console.log(id);
 $(this).parents('tr').hide();
});
// function myHide(id){
//     for(var i=0;i<products.length;i++){
//         if(products[i].id == id){
//             // console.log("idhfehjf")
//             $("#"+products[i].id).hide();
//         }
//     }

