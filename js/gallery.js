

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