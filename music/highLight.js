function highLight()
{ 
  if(!document.getElementById||!document.getElementsByTagName)
    return false;
  var link=document.getElementById('imagegallery');
  var links=link.getElementsByTagName('a');
   if(links.length<0)
    { return false;
       }
	for(var i=0;i<links.length;i++)
    {
	    var href=links[i].getAttribute('href');
		if(window.location.href.indexOf(href)!= -1)
		  {
		    links[i].className='here'; 
			var text=links[i].lastChild.nodeValue.toLowerCase();
			document.getElementsByTagName('header')[0].setAttribute('id',text);
			}
	}
	
}
addLoadEvent(highLight);