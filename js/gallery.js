

function upDate(previewPic){
    x=document.getElementById("image");
    z=document.getElementById("lview");
    x.src=previewPic.src;
    z.style.display="block";
      
}
   
function unDo(){
       x=document.getElementById("image");
       z=document.getElementById("lview");
       z.style.display="none";
       x.src="";
      
           
       }
function menu()
{
    x=document.getElementById("collapse");
    if (x.style.display=="none")
    {
        x.style.display="flex";
    }
    else
    {
        x.style.display="none";
    }
}