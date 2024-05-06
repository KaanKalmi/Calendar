import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.set('port', process.env.PORT || 8009)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})

app.get('/', (req, res) => {
    res.render('index')
})




// FETCHES FROM API

// CREATE USER
// fetch('https://fakestoreapi.com/users',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     email:'john.doe@email.com',
//                     username:'Johnjohn',
//                     password:'Password1!',
//                     name:{
//                         firstname:'Johnny',
//                         lastname:'Doedy'
//                     },
//                     address:{
//                         city:'Somewhere',
//                         street:'21 Jump Street',
//                         number:12,
//                         zipcode:'1010KK',
//                         geolocation:{
//                             lat:'-7.3159',
//                             long:'21.1496'
//                         }
//                     },
//                     phone:'1-590-296-7993'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// LOG IN
// fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "mor_2314",
//                 password: "83r5^_"
//             })
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// GET ALL PRODUCTS
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// GET A SINGLE PRODUCT BY ID
// fetch('https://fakestoreapi.com/products/ID')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// GET ALL CATEGORIES
// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// GET PRODUCTS BY CATEGORY
// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// GET A SINGLE CART FROM USER
// fetch('https://fakestoreapi.com/carts/user/2')
//             .then(res=>res.json())
//             .then(json=>console.log(json))