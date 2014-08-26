addLoadEvent(verify);
function verify()
{  
   
  var labels=document.getElementsByTagName('input');
  
 /*  为什么labels[i].onblur不能触发？？？
 for(var i=0;i<labels.length;i++)
   {
     var id=labels[i].getAttribute('for');
      labels[i].inputid=id;
   } */
     
  labels[0].onblur=function()
    {
	  verifyempty(this.id,2,4,'namespan');
    }
  labels[1].onblur=function()
   {
	  var regx=/^[\d{4,10}]+@+[\w-\.]+\.+(com|edu|cn)$/;
	  verifyreg(this.id,regx,'emailspan');
   } 
   document.getElementById('msg').onblur=function()
   {
      verifyempty(this.id,1,200,'msgspan');
   } 
}
function  verifyempty(elemid,min,max,spnid)
{  
   var elem=document.getElementById(elemid);
   var spn=document.getElementById(spnid);
     if(elem.value.replace(/\s/g,'').length==0)
	  spn.innerHTML='Please input a value';
	 else
    {	 if((elem.value.length>max)||(elem.value.length<min))
	       spn.innerHTML="The value must between "+min+"and "+max+"."; 
	     else
	       spn.innerHTML='';
	}
}
function verifyreg(elemid,regx,spanid)
{
  var elem=document.getElementById(elemid);
  var spn=document.getElementById(spanid);
     if(elem.value.length<1)
	 spn.innerHTML='Please input your email';
	 else
	   {
	      if(!regx.test(elem.value))
		    spn.innerHTML='Your email must be same as 10532@qq.com|.edu|.cn';
		  else
		   spn.innerHTML=""; 
	   
	   }
}
