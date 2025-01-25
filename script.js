
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const cat =data;
    const container=document.getElementById("container");
    container.append(printCat(data));
    
    
    
 
    
    
    
    
    function createNode(element,value){
        let finalElement=document.createElement(element);
        finalElement.textContent=value;
        return finalElement;
    }
    
    
    
    function printCat(cat){
        let ul=document.createElement("ul");
    if(cat && cat.length>0){
     
        cat.forEach(item =>{
                let elementId=createNode("li",item.id);
                let elementName=createNode("li",item.name);
                ul.append(elementId,elementName);
                if(item.subCategories && item.subCategories.length>0){
                    let subcat=printCat(item.subCategories);
                    let elementSubCat=document.createElement("li") ; 
                    elementSubCat.append(subcat);
                    ul.append(elementSubCat);
                }
            } );
        
    }
    return ul;
    }












  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });





 


