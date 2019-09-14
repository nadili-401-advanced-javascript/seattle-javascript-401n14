# LAB - Cards and Decks


## Assignment
Fork This Sandbox: [Cards and Decks Starter Code](https://codesandbox.io/s/km24yvxx8v)

* Using the `content.json` file in the starter code as a guide/source, create a page of cards and decks with the following baseline considerations:
  * `<Page />` should be a collection of Deck Components 
    * (as given in the array in the content.json file)
  * `<Deck />` should be a collection of Card Components 
    * (as provided as an array within each section of the content.json file)
  * `<Card />` should be the representation of a content record in markup
    * (as provided in each detail in the content.json file)
  * From a markup standpoint ...
    * Decks are sections with a class of 'deck'
    * Cards are divs with a class of 'card'
  * From a styling standpoint ...
    * Each component should carry it's own .scss, responsible for basic layout, based on options.
    * Each component should import the design to gain access to variables and mixins
    * Lean on the design for actual styling, animations, etc.


### Testing
* Complete basic render testing on these components
* Complete logical and render testing on the if components

### Deployment
* The `<If>` series of components and the `<Card/><Deck/><Page/>` series are components that should become part of your official library.  Create sandboxes just for those and keep them separate.  
* Later in the course, we will build a re-usable library.

##  Documentation
Complete the README.md file included in the lab folder
