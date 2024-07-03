##Design Choises
It makes perfect use of React Hooks for state management—that is, how to manage state properly within components. 
Then, using React Navigation, it flows through its several screens seamlessly so as to offer a smooth experience to users. 
The App's UI design emphasizes responsiveness so it looks handsome across a variety of device sizes.

##Storage
AsyncStorage was used because it's a light solution with persistence between app sessions. 
This local storage is working really well in keeping cart items so that the user can add any item into their cart and be certain that after closing and opening the application again, all products are still present in their cart. 
This continuity is part of the better user experience.

##Home Page
The home screen will be the main interface for the user to scroll through available products. 
Every product will display an image, with the name and price next to it, thereby giving the user all the information at a glance. 
There's also a very small image overlay representing the add-to-cart button. 
This button checks AsyncStorage when tapped to see if items are currently in the cart or not. 
If a product is not already in the cart, then it will be added and a confirmation alert will show up. Moreover, the user will land on the checkout screen, thus making the shopping process much easier.

##Checkout Page
On this checkout screen, it should display what the user has added to their cart. 
Using useEffect, as the screen mounts, the app fetches from AsyncStorage items that were added to the cart to guarantee the latest information. 
FlatList renders the items in the cart, providing a clean view of products to be purchased by the user.

##Screenshots

![page1](https://github.com/Naphthalina/rn-assignment6-11302021/assets/150922615/65652bfc-bc71-4fdf-827e-dc5536562242)
![page2](https://github.com/Naphthalina/rn-assignment6-11302021/assets/150922615/9249234f-9e91-4aa3-84b1-b619948d0598)
![page3](https://github.com/Naphthalina/rn-assignment6-11302021/assets/150922615/e0eb974c-0c30-4263-b41e-e70a21ba1286)














