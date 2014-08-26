function  bigimage()
{      if(!document.getElementById)
			return false;
		if(!document.getElementById('imm'))
			return false;
    var uls=document.getElementById('imm');
	var links=uls.getElementsByTagName('a');
	      
	 for(var i=0;i<links.length;i++)
	   {  
	    
	     var href=links[i].getAttribute('href');
	     var title=links[i].getAttribute('title');
	      links[i].val=href;
		  links[i].description=title; 
		  
		  links[i].onclick=function()
		       {  var pdescription=document.getElementById('description');
			      var img=document.getElementById('placeholder');
	                
				   if(!document.getElementById)
			           return true;
		             if(!document.getElementById('placeholder'))
		            	return true;
					 if(!document.getElementById('description'))
                         return true;
                    /* if(!pdescription.firstChild)
                         return true;	
					   pdescription.firstChild.nodeValue=this.description;
                       这种修改description部分的方式与innerHTML效果一样；					   
					   */
				      pdescription.innerHTML=this.description;
					// pdescription.appendChild(document.createTextNode(this.description));
				      img.setAttribute('src',this.val);
					    return false;
			  }
		  /*links[i].onclick=(function(href)
		      {  
			   return function()
				  {  
				    var img=document.getElementById('placeholder');
	                var pdescription=document.getElementById('description'); 
				  if(!document.getElementById)
			           return true;
		             if(!document.getElementById('placeholder'))
		            	return true;
				
				    var img=document.getElementById('placeholder');
					  img.setAttribute('src',href);
					    return false;
					 }
			    })(href);  */
		  }
		 
		 
}
addLoadEvent(bigimage);