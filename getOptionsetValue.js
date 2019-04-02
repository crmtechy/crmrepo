function getOptionsetValue(){

var optionsetText = Xrm.Page.getAttribute("abcd_abcdefoptionset").getText();

if(optionsetText!=null)
{
alert(optionsetText);
}
else{
alert("Vinay select a option ");

}




}














