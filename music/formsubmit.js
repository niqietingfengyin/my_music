function formsubmit()
 {
    var ajaxReq=new AjaxRequest();  
	
	var content=document.createElement('p');
  //  alert(ajaxReq);
	
function handle()
  {
     
     if((ajaxReq.getReadyState()==4)&&(ajaxReq.getStatus()==200))
        {
		 
		  var matches=ajaxReq.getResponseText().match(/<article>([\s\S]+)<\/article>/);
		  
		  if(matches.length>0)
		    {
			   content.innerHTML=matches[1];
			}
		  else
		    {
			   content.innerHTML="Sorry, something is wrong.";
			}
		}
  
  }
  
 //var forms=document.getElementsByTagName('form');
 
 document.forms[0].onsubmit=function()
     {
	   ajaxReq.send('POST','thanks.html',handle,
		             "application/x-www-form-urlencoded;charset=utf-8",
					 "name="+document.getElementById('name').value+
					 "&email="+document.getElementById('email').value+
					 "&message"+document.getElementById('msg').value);

	  
    	  var field=document.getElementsByTagName('fieldset');
		while(field[0].firstChild)
		 field[0].removeChild(field[0].firstChild);
		 
		field[0].appendChild(content);
       
	    
		return false;			 
					 
                	    
	 }
 }
 addLoadEvent(formsubmit);
   

