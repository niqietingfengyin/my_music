function abbration()
{ 
   var art=document.getElementsByTagName('article');
   var th1=document.createElement('h1');
   art[0].appendChild(th1);
   
   var desc=document.createTextNode('Abbration:');
      th1.appendChild(desc);
   
   var tbody=document.getElementsByTagName('tbody');
   var abbr=tbody[0].getElementsByTagName('abbr');
   for(var i=0;i<abbr.length;i++)
     {
	    var describe=abbr[i].title;
	    var title=abbr[i].firstChild.nodeValue;
		
		var tdl=document.createElement('dl');
		
		var tdt=document.createElement('dt');
		    tdl.appendChild(tdt);
			tdt.appendChild(document.createTextNode(title));
			
		var tdd=document.createElement('dd');
		    tdd.appendChild(document.createTextNode(describe));
			
			tdl.appendChild(tdd);
			
		  
		  art[0].appendChild(tdl);
		   
	 }
   

}
addLoadEvent(abbration);