function addtext()
{
var fname = document.myform.fullname.value;
var stadd = document.myform.streetname.value;
var town = document.myform.townname.value;
var city = document.myform.city.value;
var country = document.myform.country.value;
var zipcode = document.myform.postCode.value;
var tele = document.myform.telephone.value;
var email = document.myform.email.value;
document.writeln("Thank you! You have just entered the following:");
document.writeln("<pre>");
document.writeln("FullName : " + fname);
document.writeln("StreetAddress: " + stadd)
document.writeln("Town : " + town);
document.writeln("City : " + city)
document.writeln("Country : " + country);
document.writeln("Post/Zip Code : " + zipcode)
document.writeln("Telephone : " + tele);
document.writeln("Email Address : " + email)
}
