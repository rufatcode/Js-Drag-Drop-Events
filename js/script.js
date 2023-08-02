let elements=document.querySelectorAll(".drag");
let img=document.querySelector("img");
elements.forEach(item=>{
    item.ondragover=function(e){
        e.preventDefault();
    }
})

img.ondragstart=function(e){
    e.dataTransfer.setData("id",this.id);
}

elements.forEach(item=>{
    item.ondrop=function(e){
        let id=e.dataTransfer.getData("id");
        let element=document.getElementById(id);
        item.appendChild(element);

    }
})

let boxs=document.querySelectorAll(".box>.boxs>div");
let areas=document.querySelectorAll(".areas>div")

areas.forEach(item=>{
    item.ondragover=function(e){
        e.preventDefault();
    }
})
boxs.forEach(item=>{
    item.ondragstart=function(e){
        e.dataTransfer.setData("id",item.id);
    }
})
areas.forEach(item=>{
    item.ondrop=function(e){
        let id=e.dataTransfer.getData("id");
        let dragElement=document.getElementById(id);
        dragElement.style.width="100px";
        dragElement.style.height="100px";
        dragElement.style.background="brown";
        dragElement.childNodes.width="40px";
        dragElement.style.display="flex";
        dragElement.style.justifyContent="center";
        dragElement.style.alignItems="center";
        item.firstChild.style.display="none";
        item.style.display="flex";
        item.style.justifyContent="space-around";
        item.style.flexwrap="wrap";
        
        for (let i = 1; i <=boxs.length; i++) {
            if(i<5){
                if(item.id=="first"&&dragElement.id==`box${i}`){
                    item.appendChild(dragElement);
                    swal({
                        title:"Great",
                        text:"box sccesfully added to area",
                        type:"success",
                        showCancelButton: true,
                    })
                    return;
                }
                else if(item.id!="first"){
                    swal({
                        title:"Oops",
                        text:"Something went wrong",
                        type:"error",
                        showCancelButton: true,
                    })
                    
                }
            }
            else if(i<9){
                if(item.id=="second"&&dragElement.id==`box${i}`){
                    item.appendChild(dragElement);
                    swal({
                        title:"Great",
                        text:"box sccesfully added to area",
                        type:"success",
                        showCancelButton: true,
                    })
                    return;
                }
                else if(item.id!="second"){
                    swal({
                        title:"Oops",
                        text:"Something went wrong",
                        type:"error",
                        showCancelButton: true,
                    })
                }
            }
            else if(i<=12){
                if(item.id=="third"&&dragElement.id==`box${i}`){
                    item.appendChild(dragElement);
                    swal({
                        title:"Great",
                        text:"box sccesfully added to area",
                        type:"success",
                        showCancelButton: true,
                    })
                    return;
                }
                else if(item.id!="third"){
                    swal({
                        title:"Oops",
                        text:"Something went wrong",
                        type:"error",
                        showCancelButton: true,
                    })
                }
            }
            
        }
    }
})
  