function getFieldValue(){


var phone = Xrm.Page.getAttribute("abcd_mobilenumber").getValue();

if((phone!=null)&&(phone.length == 10))
{
alert("you have entered correct phone no");
}
else{
alert("Please enter the Correct ");

}




}