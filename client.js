
let count=0;
const form=document.getElementById("send_container");
const messageinput=document.getElementById("messageInp");
const messagecontainer=document.getElementById("container");

const append=(message,position)=>{
    const messageelement=document.createElement("div");
    messageelement.innerHTML=message;
    messageelement.classList.add("message");
    messageelement.classList.add(position);
    messagecontainer.append(messageelement);



}
// const append_loader=(i)=>{
//     const loaderelement=document.createElement("div");
//     loaderelement.innerHTML= '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
    
//     loaderelement.classList.add("left_no_color");
//     loaderelement.setAttribute("id",`newid${i}`);
    
//     messagecontainer.append(loaderelement);



// }
const host = "http://localhost"
const getData = async(message) =>{

    //API CALL
       console.log("fetching")

        await fetch("http://localhost:5000/api", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content_Type': 'application/json'
              
            },
            body: JSON.stringify({message})

          }).then((data)=>{
            return data.json()
      
      
          }).then((json)=>{
            
          
          
          
          append(json.value,"left");
        
          
        
        
          
        
           
           
      
          });
        // append(json.value,"left");
        
            //                  
                    
                   
                    
            
            // messageinput.value=""

    }
         

    
        

        
        
        
        


    




form.addEventListener("submit",(e)=>{
    // console.log(e);
    console.log("active")
    e.preventDefault();
    const message=messageinput.value;
    
    if(!message){
        alert("enter something")
    }
    else{
        console.log(message)
        append(message,"right");
        messageinput.value="";
        // append_loader(count);
    
        const element = document.getElementById("container");
        element.scrollTop = element.scrollHeight;
    
        
        getData(message);
        // append("test response","left")
        const element2 = document.getElementById("container");
        element2.scrollTop = element.scrollHeight;
        

        // e.preventDefault();
        count++;
    

    }
  



   




    // var i = setInterval(() => {
    //     fetch("../static/bool.json")
    //     .then(function(response){
    //          return response.text();
    //     })
    //     .then(function(data){
    //         var obj =JSON.parse(data)
    //         a=obj.message
            
        
    //     })
       
        
    //         if(a=="t"){
    //             fetch("../static/output.json")
    //             .then(function(response){
    //                  return response.text();
    //             })
    //             .then(function(data){
    //                 console.log(data);
    //                 // loader.style.display = "none";
    //                 obj2=JSON.parse(data)
    //                 b=obj2.value

    //                 append(b,"left");
                    
    //                 document.getElementById(`newid${count}`).style.display="none";
    //                 console.log(count);
    //                 count++;
    //                 a="f";
    //                 const element = document.getElementById("flex_box_chats");
    //         element.scrollTop = element.scrollHeight;
    //             })
    //             clearInterval(i);
    
    //         }
            
        
       

       

    
    //         messageinput.value="";    
    // }, 10);

        
   
        
   

    





}

)
