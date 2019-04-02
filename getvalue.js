function getFieldValue()
{debugger;

var mobilenumber= Xrm.Page.data.entity.attributes.get("mobilenumber").getValue( );
{



var regx=/[0-9]/;
if ((mobilenumber!=null) &&(mobilenumber.length==10) && (mobilenumber.match(regx)) {
alert("you have entered correct mobilenumber");
}else{
 alert("please enter correct mobilenumber !!")
}
}
}
