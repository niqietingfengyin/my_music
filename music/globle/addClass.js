function addClass(elem,newClass)
{
	if(elem.className)
    {  
	  newClass+=elem.className;
	  newClass+=" ";
	  elem.className=newClass;
	 
       }
	else
	 {
	    elem.className=newClass;
	  }
}