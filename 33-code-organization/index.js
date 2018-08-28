// const apiUrl = 'http://localhost:3000/restaurants'
// function parseHeaders(response) {
//   return response.json()
// }

// function index() {
//   return fetch(apiUrl).then(parseHeaders)
// }

// function post(body) {
//   const postConfig = {
//     method:"POST",
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(body)
//   }
//   return fetch(apiUrl, postConfig).then(parseHeaders)
// }

// function deleteResource(id) {
//   return fetch(`${apiUrl}/${id}`,{method:"DELETE"})
// }
// index().then(console.log)
// post({name:"Roberta's"})
// deleteResource(1)

// const pizzaAdatperrrrr = Object.create(pizzaAdapter)


// const pizzaAdapter = {
//   apiUrl: 'http://localhost:3000/restaurants',
// parseHeaders: function parseHeaders(response) {
//     return response.json()
// },

// index: function index() {
//   return fetch(this.apiUrl).then(this.parseHeaders)
// },

// post: function post(body) {
//   const postConfig = {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }
//   return fetch(this.apiUrl, postConfig).then(this.parseHeaders)
// },

// deleteResource: function deleteResource(id) {
//   return fetch(`${this.apiUrl}/${id}`, { method: "DELETE" })
// }
// }

//pizzaAdapter.index().then(console.log)

// function generatePizzaAdapter(apiUrl) {
//   return {
//     parseHeaders: function parseHeaders(response) {
//       return response.json()
//     },

//     index: function index() {
//       return fetch(apiUrl).then(this.parseHeaders)
//     },

//     post: function post(body) {
//       const postConfig = {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       }
//       return fetch(apiUrl, postConfig).then(this.parseHeaders)
//     },

//     deleteResource: function deleteResource(id) {
//       return fetch(`${apiUrl}/${id}`, { method: "DELETE" })
//     }
//   }
// }

// const pizzaAdapter = generatePizzaAdapter('http://localhost:3000/restaurants')
// pizzaAdapter.index().then(console.log)


// function generateRestfulAdapter(apiUrl) {
//   return {
//     parseHeaders: function parseHeaders(response) {
//       return response.json()
//     },

//     index: function index() {
//       return fetch(apiUrl).then(this.parseHeaders)
//     },

//     post: function post(body) {
//       const postConfig = {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       }
//       return fetch(apiUrl, postConfig).then(this.parseHeaders)
//     },

//     deleteResource: function deleteResource(id) {
//       return fetch(`${apiUrl}/${id}`, { method: "DELETE" })
//     }
//   }
// }

// const pizzaAdapter = generatePizzaAdapter('http://localhost:3000/restaurants')
// pizzaAdapter.index().then(console.log)

// class RestfulAdapter {
//   constructor(apiUrl) {
//     this.apiUrl = apiUrl
//   }

//     parseHeaders(response) {
//       return response.json()
//     }

//     index() {
//       return fetch(this.apiUrl).then(this.parseHeaders)
//     }
// }

// const pizzaAdapter = new RestfulAdapter('http://localhost:3000/restaurants')
// pizzaAdapter.index().then(console.log)

function muchLessSuckage(apiUrl) {
  return class RestfulAdapter {

    parseHeaders(response) {
      return response.json()
    }

    index() {
      return fetch(apiUrl).then(this.parseHeaders)
    }
  }
}
//const adapterClass = muchLessSuckage('http://localhost:3000/restaurants')
const pizzaAdapter = new (muchLessSuckage('http://localhost:3000/restaurants'))
pizzaAdapter.index().then(console.log)

function orderEspressoGenerator() {
  let counter = 0
  return class Caffee {
    constructor() {
      this.id = ++counter
      console.log(`I am coffee number ${this.id}`)
    }
  }
}

const bar = orderEspressoGenerator()
new bar()
new bar()
new bar()
new bar()
new bar()
new bar()
debugger