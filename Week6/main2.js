const divElement = document.getElementById('subjects')
const pElement = document.createElement("p")
const idAttribute = document.createAttribute("id")
idAttribute.value = "INT141"
pElement.setAttributeNode(idAttribute)
const pText = document.createTextNode("INT141")
pElement.appendChild(pText)
divElement.appendChild(pElement)
