class CategoryRenderer {
  constructor(containerId, data) {
      this.container = document.getElementById(containerId);
      this.data = data
  }


  showPrintCat() {
      fetch(this.data)
          .then(response => response.json())
          .then(data => {
              this.container.append(this.printCat(data));
          })
          .catch(error => {
              console.error('Error loading JSON:', error);
          });
  }

  createNode(element, value) {
      let finalElement = document.createElement(element);
      finalElement.textContent = value;
      return finalElement;
  }

  printCat(cat) {
      let ul = document.createElement("ul");
      if (cat && cat.length > 0) {
          cat.forEach(item => {
              let elementId = this.createNode("li", item.id);
              let elementName = this.createNode("li", item.name);
              ul.append(elementId, elementName);
              
              if (item.subCategories && item.subCategories.length > 0) {
                  let subcat = this.printCat(item.subCategories);
                  let elementSubCat = document.createElement("li");
                  elementSubCat.append(subcat);
                  ul.append(elementSubCat);
              }
          });
      }
      return ul;
  }
}


const categoryRenderer = new CategoryRenderer("container","./data.json");
categoryRenderer.showPrintCat();