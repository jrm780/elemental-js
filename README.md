# elemental-js
A tiny (520 bytes) and fast DOM manipulation library for use with plain JavaScript

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

# Benchmarks
*Measuring operations per second (higher is better) in Chrome 59.0.3071 / Windows 10 0.0.0*
## Select
#### elemental-js: 12,351,821 Ops/sec
```javascript
const myDiv = el.el("#myDiv")
```
#### jQuery 3.2: 2,081,431 Ops/sec
```javascript
const myDiv = $("#myDiv")
```

## Clear
#### elemental-js: 76,287,755 Ops/sec
```javascript
el.clearElement(myDiv)
```
#### jQuery 3.2: 2,191,646 Ops/sec
```javascript
myDiv.empty()
```
#### innerHTML: 442,922 Ops/sec
```javascript
myDiv.innerHTML = ""
```

## Create/append
#### elemental-js: 150,784 Ops/sec
```javascript
el.append(myDiv, [
  "testing ",
  el.h("a", {href: "http://example.com"}, ["link"])
])
```
#### jQuery 3.2: 59,799 Ops/sec
```javascript
myDiv.html('testing <a href="http://example.com">link</a>');
```
#### innerHTML: 86,772 Ops/sec
```javascript
myDiv.innerHTML = 'testing <a href="http://example.com">link</a>'
```
