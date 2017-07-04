# elemental-js
A tiny DOM creation and manipulation library for use with vanilla JavaScript

# API
## el.el()
Search the document for an element with a particular CSS selector
#### Parameters
- `selector (string)` - the CSS selector to match against
#### Return:
`(HTMLElement)` the first matching element
#### Example
```javascript
// <div class="content">
//   <div id="myDiv">
//     We want to add a click event listener to this div
//   </div>
// </div>
const myDiv = el.el("#myDiv")
myDiv.addEventListener("click", event => alert("myDiv was clicked"))
```

## el.h()
Create a new HTML DOM element
#### Parameters
- `tag (string)` - the type/tag of the element to construct
- `attributes (Object)` - `{"key": "value", ...}` attributes the element should have
- `children (HTMLElement[] | string[])` - elements to append to the new element as children. Strings are automatically converted to Text nodes
#### Return:
`(HTMLElement)` the newly created element
#### Example
```javascript
// Create HTML DOM element equivalent to
// <div class="content">
//   <p>A paragraph with <a href="http://example.com/">a link</a></p>
// </div>
const contentDiv = el.h("div", {class: "content"}, [
  el.h("p", {}, [
    "A paragraph with ", el.h("a", {href: "http://example.com/"}, ["a link"]
  ]
])
```

## el.append()
Append child elements to another element
#### Parameters
- `el (HTMLElement)` - the parent element
- `children (HTMLElement[] | string[])` - elements to append to `el` as children. Strings are automatically converted to Text nodes
#### Example
```javascript
// Before:
// <div id="myDiv">
// </div>

const myDiv = el.el("#myDiv")
el.append(myDiv, [
  el.h("p", {}, ["Hello, World!"])
])

// After:
// <div id="myDiv">
//   <p>Hello, World!</p>
// </div>
```

## el.clear()
Search the document for an element with a particular CSS selector and delete all of its child elements
#### Parameters
- `selector (string)` - the CSS selector to match against
#### Return:
`(HTMLElement)` the first matching element
#### Example
```javascript
// Before:
// <div id="myDiv">
//   <p>Hello, World!</p>
// </div>

const myDiv = el.clear("#myDiv")

// After:
// <div id="myDiv">
// </div>
```

## el.clearElement()
Delete all of the given element's child elements
#### Parameters
- `el (HTMLElement)` - the parent element
#### Return:
`el (HTMLElement)`
#### Example
```javascript
// Before:
// <div id="myDiv">
//   <p>Hello, World!</p>
// </div>

const myDiv = el.el("#myDiv")
el.clearElement(myDiv)

// After:
// <div id="myDiv">
// </div>
```
