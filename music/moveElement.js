function moveElement(elemID,xpos,ypos,inter)
{
    if(!document.getElementById)
	return false;
	if(!document.getElementById(elemID))
      return false;
	var elem=document.getElementById(elemID);
	//alert(elem);
	var x=parseInt(elem.style.left);
	var y=parseInt(elem.style.top);
	
	//if(elem.move)
	 clearTimeout(elem.move);//即每次产生新动画前，清除动画里所有的队列；
	if(x==xpos&&y==ypos)
	   return true;
	if(x < xpos)
	 { xdist=Math.ceil((xpos-x)/10);
	   x+=xdist;}
	if(x>xpos)
	{  xdist=Math.ceil((x-xpos)/10);
	   x-=xdist; }
	if(y<ypos)
	{ ydist=Math.ceil((ypos-y)/10);
	   y+=ydist;}
	if(y>ypos)
	{ ydist=Math.ceil((y-ypos)/10);
	   y-=ydist; }
	elem.style.left=x+'px';
	//alert(t);
	 elem.style.top=y+'px';
	 var repeat="moveElement('"+elemID+"',"+xpos+","+ypos+","+inter+")";
	 elem.move=setTimeout(repeat,inter);
	 
}