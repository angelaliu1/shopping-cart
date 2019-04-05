# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.
1.1) Explain in your own words what `ReactDOM.render` is doing.
* ReactDOM.render tells React to initialize the given component on a certain part of the page.

1.2) What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter)
* UI libraries handle all the styling for you, making it easy to get a clean/uniform interface. However, there's less personalization, and you have to use the defined classes.

1.3) In your own words, explain why we need to wrap addToCart with another function.
* We wrap addToCart in another function so we're able to to pass in desired arguments without actually calling addToCart.

1.4a) What allowed us to only write the Product component once inside the Cart's render function?
* We technically wrote it once, but replicated the Product components by mapping over the predefined data.
1.4b) Why don't we make the Product components from scratch inside the render function? What benefit, besides code cleanliness, do we get from pulling in the data from an object instead?
* Conciseness, and we can retain/use data in it's current form from elsewhere, rather than manually creating components by copying over data one by one

2.0) Give an example of a component we haven't built or talked about in class that would require state. Why does it need state?
* The number of likes/reactions on Facebook posts, because it's a dynamic property that constantly changes and needs to be updated.

2.1) How do we accomplish parent-to-child communication in React? What about child-to-parent? Why can't they be the same?
* In parent to child communication, the parent sends data to its child through props. Child to parent communication can be done through callback functions, which the parents passes to the child as a prop.

2.2) How might we go about adding and removing items from the cart given the structure of our state?
* Passing down a callback function to Product, that updates the cartItems array in the cart's state
