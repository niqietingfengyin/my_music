function highLine()
{
  var tb=document.getElementsByTagName('tbody');
  var tr=tb[0].getElementsByTagName('tr');
  for(var i=0;i<tr.length;i++)
    {
	   if(i%2!=0)
	     tr[i].className='odd';
	}
}
function highover()
{
  var tbd=document.getElementsByTagName('tbody');
  var links=tbd[0].getElementsByTagName('tr');
    
  for (var i=0;i<links.length;i++)
    {  
	   links[i].name=links[i].className;
	   links[i].onmouseover=function()
	      { 
		   
		     this.className='now';
		  }
	   links[i].onmouseout=function()
	     { 
		    this.className=this.name;
		  }
	
	}


}
addLoadEvent(highLine);
addLoadEvent(highover);