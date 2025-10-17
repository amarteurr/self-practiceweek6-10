const divElement =  document.getElementById("exampleElement")
// div childNodes
const divChild = divElement.childNodes
console.log(`length: ${divElement.childNodes.length}`)
divChild.forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})

// div children
const divChildren = divElement.children
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})