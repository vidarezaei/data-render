const container=document.getElementById("container");
fetch("data.json").then(response => {if (!response.ok) {throw new Error("failed to load");} return response.json(); }
).then(data =>{ 
    data.forEach(item => 
{
    const ul=document.createElement("ul");
    ul.innerHTML=`<li>${item.id}</li> <li>${item.name}</li>`;
    const subul=document.createElement("ul");
    item.subcategories.forEach(subitem =>
        {   
            // const subitems=document.createElement("li");
            // subitems.textContent=`${subitem.id} : ${subitem.name}`; 
            // subul.appendChild(subitems);


            subul.appendChild(createFnode("li",`${subitem.id} : ${subitem.name}`));
        } 
        
    )
ul.appendChild(subul);
container.appendChild(ul);
})
}).catch(error => {
    console.error("Error:", error);
    container.textContent = "Failed!!";
});


function createFnode(element,value){
    let finalElement=document.createElement(element);
    finalElement.textContent=value;
    return finalElement;
}