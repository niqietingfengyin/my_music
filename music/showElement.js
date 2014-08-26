function showElement(elemId)
{  
  var art=document.getElementsByTagName('article');
  var sec=art[0].getElementsByTagName('section');
   for(var i=0;i<sec.length;i++)
      {
	     var secId=sec[i].getAttribute('id');
		    if(secId==elemId)
			   {
			     sec[i].style.display='block';
			   }
			else
			   {
			     sec[i].style.display='none';
			   }
	  
	  }
  }