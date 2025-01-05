
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const cat =data;
    const container=document.getElementById("container");
    container.append(printCat(data));
    
    
    
 
    
    
    
    
    function createFnode(element,value){
        let finalElement=document.createElement(element);
        finalElement.textContent=value;
        return finalElement;
    }
    
    
    
    function printCat(cat){
        let ul=document.createElement("ul");
    if(cat && cat.length>0){
     
        cat.forEach(item =>{
                let li1=createFnode("li",item.id);
                let li2=createFnode("li",item.name);
                ul.append(li1,li2);
                if(item.subCategories && item.subCategories.length>0){
                    let subcat=printCat(item.subCategories);
                    let li3=document.createElement("li") ; 
                    li3.append(subcat);
                    ul.append(li3);
                }
            } );
        
    }
    return ul;
    }












  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });





 


