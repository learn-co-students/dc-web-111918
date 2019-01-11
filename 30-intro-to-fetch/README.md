## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
- What is blocking (sync) vs non-blocking code (async)?

### How do we handle async code?
- For example, event listeners

### What if you have multiple async code that depend on each other?
- https://pokeapi.co/api/v2/pokemon/
- Given the name of the Pokemon, I want to find out the effect/description of its hidden ability

### Callback Hell
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Welcome Fetch
- Built in web api
- Get JSON data
- Practice with:  https://animal-farm-api.herokuapp.com/animals
- Returns a promise object

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

### Lab Announcements
 - XHR is a old school way, you can ignore it when you see it in labs
 - Check board for Lab priority
 - Intro to Fetch lab Pairing Lab



















#### Old School way of fetching
```XHR (web API)
  const req = new XMLHttpRequest()
  req.addEventListener("load", function(){
		console.log(JSON.parse(this.responseText))
	});
  req.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
  req.send()
```
```FETCH (web API)
	fetch(`https://pokeapi.co/api/v2/pokemon/`)
	.then(response => response.json())
	.then(json => {
		console.log(json)
	})
```
