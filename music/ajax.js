// AjaxRequest object constructor  and can be run in any brower
function AjaxRequest()
{
   if(window.XMLHttpRequest)
   {
     try{
	      this.request=new XMLHttpRequest();
	    }
	  catch(e)
	    {
		  this.request=null;
		}
   }else if(window.ActiveXObject)
    {
        try{
		      this.request=new ActiveXObject("Msxml2.XMLHTTP");
		   }	
		catch(e)
           {
		     try{
			       this.request=new ActiveXObject("Microsoft.XMLHTTP");
			   } 
			  catch(e)
			    {
				   this.request=null;
				}
		    }		
 	}
   if(this.request==null)
   alert("AjaxRequest  object constructor failed.\n"+"Details:"+e); 
}
//add methods to AjaxRequest on the 类 layer.
AjaxRequest.prototype.send=function(type,url,handler,postDataType,postData)
{
  if(this.request!=null)
  {
	  this.request.abort(); //kill the previous request
	
	url+="?dummy="+new Date().getTime();
	
	try{
	     this.request.onreadystatechange=handler;  //handler is used to deal with the request.
		 this.request.open(type,url,true);  //start request 
		 
		 if(type.toLowerCase()=="get")
		   {
		     this.request.send(null);
		   }
		 else
		   {
		      //this.request.setRequestHeader("application/x-www-form-urlencoded;charset=utf-8",postDataType);
		      this.request.setRequestHeader("Content-Type",postDataType);
			  this.request.send(postData);
		   }
	}
	catch(e)
	{
	  alert("Ajax communicate  error\n"+"Details:"+e);
	}
  }
}
AjaxRequest.prototype.getReadyState=function()
{
   return this.request.readyState;
}

AjaxRequest.prototype.getStatus=function()
{
   return this.request.status;
}

AjaxRequest.prototype.getResponseText=function()
{
  return this.request.responseText;
}

AjaxRequest.prototype.getResponseXML=function()
{
  return  this.request.responseXML;
}
