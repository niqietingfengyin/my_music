function prepare()
{
  if(!document.getElementById||!document.getElementsByTagName)
   return false;  

 var art=document.getElementsByTagName('article');
  var nav=art[0].getElementsByTagName('nav');
  var links=nav[0].getElementsByTagName('a');
  
  for(var i=0;i<links.length;i++)
    { 
	  var href=links[i].getAttribute('href');
	  var hrefid=href.split('#');
	  var elemId=hrefid[1];
	 
	  if(!document.getElementById(elemId))
	    continue;
  	 /* 由于elemId只在prepare()函数执行期间有效，等到事件处理函数执行时已经不存在；
	 因此需要用到闭包，或者把elemId赋给元素的一个属性，元素属性的作用域是持久的；
 	 links[i].onclick=(function(elemId)
	       { 
		      return  function()
			     {   // alert(elemId);
				    showElement(elemId);
				  }
		    })(elemId);  */
			
	    links[i].destination=elemId;
		links[i].onclick=function()
		    {
			  showElement(this.destination);
			  return false;
			
			}
	}

}
addLoadEvent(prepare);