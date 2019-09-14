

## Lecture
* Component CSS
  * This is a great topic to hit on post-code review. Only takes about :15-20 minutes to cover and demo, but it should open the students up to new ways of adding style to their components.
  * CSS-In-JS
    * Create a style object (and actual object) in your component
    * Declare it as ```style={styles.whateber}``` and that turns into inline styling, with namespacing just for your component.  Good for smaller, tactical things and to send dynamic variables into tyour CSS
    * will be used in React Native
  * CSS Modules
    * Pulling in a `filename.module.scss` (note the .module. suffix) will let you also namespace CSS directly for the component you are targeting.
  


## [Demo CSS Modules](https://codesandbox.io/s/n4znk8m7vl)

* From the CSS Side, the header component utilizes both a CSS module (sass, actually) as well as some CSS-in-JS. Build this out first and explain the pros and cons of these 2 new ways to apply CSS to a component.  Modules are great for namespacing. CSS-in-JS is better suited when you have live variables that you want to pass into your CSS.
