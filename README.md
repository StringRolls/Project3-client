<img src="https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png" width="200"/> &nbsp; <img src="https://iili.io/XOnNqv.png"/>

# sharelicious: order food, meet people

## Description

**sharelicious** is an online food delivery app that, in addition to offering the experience of ordering products, allows users to interact by viewing their profiles, obtain recommendations based on their latest orders, and follow each other.

## User Stories

- **Error 4xx**- As an user, I want to see a clear error page when it doesn't exist/has restricted access so that I know I probably make a mistake.
- **Error 5xx** -  As an user, I want to see a clear error page when problems are generated by the server so that I know that is not my fault.
- **index/home** - As an user, I want to seamless access the index/home so that I know I'm the right place to begin the flow.
- **signup** - As an user, I want to signup in a secure and easy way on the webpage so that I can start using the app.
- **login** - As an user, I want to be able to login on the webpage so that I can see my personal account.
- **logout** - As an user, I want to be able to logout from the webpage so that I can make sure no one will access my personal account.
- **profile** - As an user, I want to see my profile  so that I see my personal data.
- **edit profile** - As an user, I want to be able to edit my profile so that I can modify my personal data.
- **friends** - As an user, I want to see the users I follow and search new ones so that I don't lose track of their activity and potential recommendations.
- **product filter results** - As an user, I want to filter products by type of cuisine so that I can only see what I am looking for.
- **store details** - As an user, I want to see the details of the store I select, the product catalog, comments and delivery options so I can easily choose what I'm interested in.

## Client / Frontend

### React Router Routes (React App)

|   **Path**            |    **Component**  |    **Permissions**     |                         **Behavior**                                  |
|-----------------------|-------------------|------------------------|-----------------------------------------------------------------------|
|`/`                    |SplashPage         |public <Route>          |Index when user is not logged in                                       |
|`/home`                |SplashPage         |anon only <AnonRoute>   |Launcher once user is logged in                                        |  
|`/signup`              |SignupPage         |anon only <AnonRoute>   |Signup form, link to login, navigate to launcher after signup          |    
|`/login`               |LoginPage	        |anon only <AnonRoute>   |Login form, link to signup, navigate to launcher after login           |         
|`/profile/:id`         |ProfilePage        |user only <PrivateRoute>|Shows all user's profile details in a form                             | 
|`/profile/edit/:id`    |EditProfilePage    |user only <PrivateRoute>|Allows to edits profile details                                        |
|`/friends`             |FriendsPage        |user only <PrivateRoute>|View current user's friends and allows to search new ones              |  
|`/filter-results`      |SearchFriendsPage  |user only <PrivateRoute>|List of the filtered results that users request                        |
|`/store-details`       |StoreDetailsPage   |user only <PrivateRoute>|Shows store details and the product catalog so that the user can select|

### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  
## Server / Backend
  
### Models
  
Users model
  
```javascript
{
username: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
favoritesStores: [{type: Schema.Types.ObjectId,ref:'Stores'}],
friends: [{type: Schema.Types.ObjectId,ref:'Users'}],
tagLine: {type: String},
comments: [{type: Schema.Types.ObjectId,ref:'Comments'}],
userImg: {type: String, default: "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg"}
}
```

Stores model

```javascript
{
storeName: {type: String, required: true},
address: {type: String, required: true, unique: true},
storePhone: {type: String, required: true},
storeImg: {type: String, default: "https://easterntradelinks.com/front/images/default.png"},
deliveryTime: {type: String, enum: ["15 min", "15-30 min", "30-45 min"]},
priceRange: {type: String, enum: ["$", "$$", "$$$"]},
isUnder30Min: {type: Boolean},
products: [{type: Schema.Types.ObjectId,ref:'Products'}]
}
```
  
Products model

```javascript
{
productName: {type: String, required: true},
productImg: {type: String},
productDescription: {type: String, required: true},
cuisineType: {type: String, required: true, enum: ["Pizza", "Sushi", "Thai", "Chinese", "Ramen", "Soup", "Italian", "Vegan", "Healthy", "Indian", "Burgers", "Breakfast", "Salad","Mexican", "Vegetarian", "Sandwiches", "Mediterranean", "Korean"]}  
}
```  
  
Comments model

```javascript
{
message: {type: String, required: true},
owner: [{type: Schema.Types.ObjectId,ref:'Users'}]
}
``` 

### API Endpoints (backend routes)

| HTTP Method |               URL           |         Request Body         | Success status | Error Status |             Description                   |
|-------------|-----------------------------|------------------------------|----------------|--------------|-------------------------------------------|
|GET          |`/auth/profile`              |Saved session                 |200             |404           |Check if user is logged in and return profile page| 
|POST         |`/auth/signup`               | {name, email, password}      |201             |404           |Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session|
|POST         |`/auth/login`                | {username, password}         |200             |401           |Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session|
|POST         |`/auth/logout`               |(empty)                       |204             |400           |Logs out the user                         
  
  
## Links

### Trello

[Link](https://trello.com/b/odCshzxJ/sharelicious-project)

### Git

[Repository Link](https://github.com/sharelicious/sharelicious)

[Deploy Link](https://sharelicious.herokuapp.com/)

### Slides

[Link](https://slides.com/pablodellacassa/sharelicious/) 

### Contributors

Samy Ali - [`<github>`](https://github.com/SamyAliSanchez) - [`<linkedin>`](https://www.linkedin.com/in/samy-ali-sanchez/)
  
Pablo Dellacassa - [`<github>`](https://github.com/pablodellacassa) - [`<linkedin>`](https://www.linkedin.com/in/pablodellacassa)

Luisa Ojeda - [`<github>`](https://github.com/LuisaEOjeda) - [`<linkedin>`](https://www.linkedin.com/in/luisaojeda/) 

Bjork Weenk - [`<github>`](https://github.com/bjorkweenk) - [`<linkedin>`](https://www.linkedin.com/in/wuqingguibjork/)  


  
