addLoadEvent(pshow)
function pshow()
{ 
  var pic=document.getElementById('preview');
  pic.style.position='absolute';
  pic.style.left='0px';  //先保证pic必须有left,top属性，设一个默认位置；
  pic.style.top='0px';
  
  var links=document.getElementsByTagName('a');
 /*  links[0].onmouseover=function()
     {
	   var des=this.getAttribute('href');
	    if(des.indexOf('index.html')!=-1)
	    moveElement('preview',0,0,20);
	 }
	 links[1].onmouseover=function()
     {
	   var des=this.getAttribute('href');
	    if(des.indexOf('about.html')!=-1)
	    moveElement('preview',-180,0,20);
	 }
	 links[2].onmouseover=function()
     {  var des=this.getAttribute('href');
	    if(des.indexOf('photos.html')!=-1)
	     moveElement('preview',-330,0,20);
	 } 
	  links[3].onmouseover=function()
     { var des=this.getAttribute('href');
	    if(des.indexOf('live.html')!=-1)
	    moveElement('preview',-480,0,20);
	 }
	  links[4].onmouseover=function()
     {
	    var des=this.getAttribute('href');
	    if(des.indexOf('contact.html')!=-1)
		moveElement('preview',-620,0,20);
	 } */
  for (var i=0;i<links.length;i++)
  {  
     links[i].onmouseover=function()
	  {
      var des=this.getAttribute('href');
	      if(des.indexOf('index.html')!=-1)
	           moveElement('preview',0,0,20);
		  if(des.indexOf('about.html')!=-1)
	            moveElement('preview',-180,0,20);	
		  if(des.indexOf('photos.html')!=-1)
	            moveElement('preview',-330,0,20);
		   if(des.indexOf('live.html')!=-1)
	            moveElement('preview',-480,0,20);
		   if(des.indexOf('contact.html')!=-1)
		        moveElement('preview',-620,0,20);
      }
  }
}