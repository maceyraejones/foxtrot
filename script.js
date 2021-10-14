$(function() {

const info = [
{
    title: "Mr.",
    name: "Brownie Wrinkles",
    birthday: "10/24/2009",
    degree: "Doctorate",
    phone: "256-355-0404",
    email: "bwrinkles@aol.com",
    homeaddress: "123 5th Ave, Pittsburgh, PA"
    }
];

$.each(info, function (index, item) {
    console.log("Title: " + item.title);
    console.log("Name: " + item.name);
    console.log("Birthday: " + item.birthday);
    console.log("Degree " + item.degree);
    console.log("Phone Number: " + item.phone);
    console.log("Email Address: " + item.email);
    console.log("Home Address: " + item.homeaddress);


    var el = ` <h5 class="card-title" ></h5> \
    <h6>Name: <span class="text-secondary">Brownie Wrinkles</span></h6> \
    <h6>Birthday: <span class="text-secondary">October 24th, 2009</span></h6> \
    <h6>Degree: <span class="text-secondary">Doctorate</span></h6> \
    <h6>Phone: <span class="text-secondary">256-355-0404</span></h6> \
    <h6>Email: <span class="text-secondary">bwrinkles@aol.com</span></h6> \
    <h6>Address: <span class="text-secondary">123 5th Ave, Pittsburgh, PA</span></h6>`;

  
console.log(el); 
  
  
$('#skillcard').append(el);
  
  
});
  
  
});    
