# Class 19 - Sass, React Testing, and Deployment

| [Lecture Video]() | [Lab Video]() |
| ----------------- | ------------- |


## Key Terms

| Term                  | Definition | Supporting Links |
| --------------------- | ---------- | ---------------- |
| Shallow Mount Testing | --         | --               |
| Full Mount Testing    | --         | --               |
| Render Testing        | --         | --               |
| Snapshot Testing      | --         | --               |
| Sass                  | --         | --               |
| CSS Preprocessor      | --         | --               |

## Key Packages

| Package     | Description | Link |
| ----------- | ----------- | ---- |
| `node-sass` | --          | --   |
| `enzyme`    |             |      |

## Where We're Coming From

We should now have some understanding of how React breaks up our HTML and UI into small, modular components. React allows you to join HTML, JavaScript, and even CSS into a single file, and that unlocks a lot of unique ways to structure our UI.

Last class, we also saw how we can dynamically change our rendered HTML using state variables. Prop variables are another feature within our components; we can define standardized or custom in-line attributes for our components and access them using `this.props`:

```html
<MyComponent className="my-class" id="my-id" customProp="my-custom" />
```

```javascript
this.props.className;
this.props.id;
this.props.customProp;
```

## Where We're Going

Now, we're going to learn three important topics that will be used going forward in your labs.

### Sass

So far, you have been accustomed to writing CSS and connecting that to your HTML. This hasn't majorly changed when moving to React; there are still CSS files being imported into your react components. Moreover, you can even define CSS right at the top of your component file:

```jsx
import React from 'react';

const customStyle = {
  margin: '40px',
  border: '5px solid pink'
};

class myComponent extends React.Component {
  ...

  render() {
    return (<div style={customStyle}></div>);
  }
}
```

So what are we going to change? Mainly, we're going to start thinking about _CSS itself_ differently. We're going to find a way to remove some of the major pain-points of CSS that become all the more worse when developing a large or complex user interface.

We remove these pain-points by using a **CSS preprocessor**. A CSS preprocessor is a language that generates CSS from its own unique syntax. CSS preprocessors expose a lot of new functionality into our styles, including:

-   Variable definitions
-   Style functions
-   Consolidation of multiple files
-   More reusable style code
-   Nested syntax

There are multiple CSS preprocessors out there, with the most popular ones being [Sass](https://sass-lang.com/), [Less](http://lesscss.org/), and [Stylus](http://stylus-lang.com/). We will be focusing on Sass.

### Testing

When we were testing our backend code, mostly we were testing function input and output. How do we translate this into user interface testing? In user interfaces, usually we're not running functions with inputs and outputs, instead we're rendering HTML and responding to user input. So, we need to reframe our thoughts about testing to focus on some new key terms.

#### Snapshot Testing

When we learned about Test Driven Development (TDD), we learned that the goal is to write tests _before_ writing feature code. TDD assumes that tests are written first and will fail until the code is complete.

However, with UI, we usually want to take a different approach. UI testing has **snapshot** tests, which confirm that the UI looks as you expect during a specific moment in time (or during a specific snapshot, like a camera taking a photo of your application).

To write a snapshot test, first you must get your component code working. You then generate a snapshot of its expected output, given certain data. Using a tool like [Jest](https://jestjs.io/docs/en/snapshot-testing), you can then write tests that compare the live UI with the snapshot image.

If the test does not pass, it may mean that there were some unexpected changes on the component that you need to fix, or you made some changes to the component and it's about time you updated the snapshot tests.

#### Full Mounting, Shallow Mounting and Rendering

When testing a UI component, snapshot testing can be effective but not as versatile. By using another tool called [Enzyme](https://airbnb.io/enzyme/), we can expand upon our Jest UI tests by attempting to render a component and then searching the generated HTML for any values.

**Full mounting** renders the entire component plus any children components into HTML, just as it would when you run your application. Full mounting is ideal when you have components that may interact with other components on the page, or when components use "lifecycle methods", which we will cover in a later class. Full mounting also allows us to access the props that were given to the tested component, as well as any props the tested component sends to other components.

**Shallow mounting** renders only the component and leaves all custom child components un-rendered. For example, suppose you had the following components:

```jsx
import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <p>I am a child component</p>
        </div>
    );
}

export default ChildComponent;
```

```jsx
import React from 'react';
import ChildComponent from './child.js';

function ParentComponent(props) {
    return (
        <div>
            <h1>I am a parent component</h1>
            <ChildComponent />
        </div>
    );
}

export default ParentComponent;
```

When doing a full mount, you would expect rendered HTML that looks like the following:

```html
<div>
    <h1>I am a parent component</h1>
    <div>
        <p>I am a child component</p>
    </div>
</div>
```

However, a shallow mount will not transform `<ChildComponent />` into HTML. This means that the output of a shallow mount of `<ParentComponent />` would be:

```html
<div>
    <h1>I am a parent component</h1>
    <ChildComponent />
</div>
```

In HTML, any tag that is not a built-in element (such as `div`, `p`, `h1`, etc.) is just rendered empty. So we have now isolated this component to only have HTML pertaining to what is defined in `parent.js`, instead of a mix of `parent.js` and `child.js`.

Finally, **render testing** serves as a light-weight version of **full mounting**, where the full component is transformed into HTML, but there is no access to prop variables or lifecycle methods. This can be a good solution if you want a faster test with less functionality.

### Deployment

We've had some experience deploying our applications via Heroku, but let's expand our knowledge-base to include other options.

The major focus of deploying a front-end application is to make it fast for the end user. No one wants to wait more than a few milliseconds for a page to load. Many deployment services will help make your application more efficient by minifying files and optimizing static assets like images.

In this course, we will be focusing on three methods of deploying React applications; using AWS S3, using AWS CloudFront, and using Netlify. One important thing to note about React applications is that in the end React apps are all generated static websites. They do not have a built-in server that dynamically generates HTML as you're using the application. Instead, React applications are compiled into a bundle of CSS, HTML and JavaScript and _then_ shown to the end user. We use a server to host that static website when testing locally or running CodeSandbox, or when deploying our website.

## How To Get There

Now, we've talked a lot about the broader concepts, but let's get into some code examples and see how Sass, testing and deployment can all work for our own applications.

For these examples, we will be using code from the [demo/sass-test-deploy folder](./demo/sass-test-deploy).

### Styling In Sass

As you learn how to think about styling using Sass, be sure to save the [Sass documentation](https://sass-lang.com/guide) as a handy reference.

Sass has two major syntax styles, you can choose which to use based on personal preference. The first syntax is `SCSS`, which is more of a hybrid between `CSS` syntax and `Sass` syntax. This is a great place to start for beginners, and so we'll be focusing on `SCSS` in this class. The second syntax is full `Sass` syntax, using primarily whitespace to delineate styles instead of curly brackets `{}`. This is a great choice if you want to speed up your style development even further, or if you're used to whitespace-oriented languages like Python.

#### Getting Set Up With Sass

Because Sass is _compiled_ into CSS, we need a tool that will do that compile for us. We will be using the package `node-sass`, which will compile our sass code into css for us when we run `npm start`

```
npm install node-sass
```

From there on, you can create `.scss` files (or `.sass` files if you wish) in your project, and then import them just as you would a `.css` file:

```jsx
import './styles.scss';
```

And that's it! Everything else should be handled for you by `node-sass`.

#### Variables

Suppose you wanted to style multiple elements with a light blue color (`#03c2fc`). You could write your CSS as such:

```css
h1,
h2 {
    color: #03c2fc;
}

.colored-box {
    background-color: #03c2fc;
}

.bordered-box {
    border: 2px solid #03c2fc;
}
```

As you can see, we're using the hex value `#03c2fc` in three different places, using three different CSS properties (`color`, `background-color` and `border`). We cannot combine these classes into one; that would give us an outcome we don't want. But what happens if we later decide we want to change the color to a light green (`#a1ff9c`) instead? Unfortunately, we would have to manually change every instance of our light blue hex value, and this can get very error-prone and difficult if we have a large collection of CSS code or CSS files. Luckily, this process becomes much easier when using Sass:

```scss
$theme-color: #03c2fc;

h1,
h2 {
    color: $theme-color;
}

.colored-box {
    background-color: $theme-color;
}

.bordered-box {
    border: 2px solid $theme-color;
}
```

As we're used to with JavaScript or other coding languages, we can now define a variable using `$`, and then reference that variable anywhere in our sass styles. Variables in Sass are very powerful, and can contain any CSS value such as a color, a font, a pixel size, etc.

#### Partials

Suppose you had 50 variables used in your UI. When adjusting the variables, you again probably don't want to search through a large collection of files or style code. Sass allows you to modularize you style logic very easily through **partials** and the `@import` command. A partial is a file that contains Sass styles meant to be imported into another large Sass file. All partial filenames begin with an underscore `_`.

In the style directory, create a file called `_variables.scss` (or `_variables.sass` if you prefer). In this file, define all the variables you may need.

```scss
// _variables.scss partial

$theme-color: #03c2fc;
```

Then, in your main style file `styles.scss`, you can import the contents of `_variables.scss`:

```scss
// styles.scss

@import './variables';

h1 {
    color: $theme-color;
}
```

And thus, we can make our styles modular and our files small and single-purpose.

#### Nesting

Another great feature of Sass is the ability to nest your class definitions. For example, suppose we had the following CSS:

```css
.bordered-box {
    border: 2px solid #03c2fc;
}

.bordered-box h2 {
    font-style: italic;
}

.bordered-box h2 span {
    color: #46dab5;
}

.bordered-box button {
    color: #03c2fc;
}
```

We can improve and condense this code easily using nesting in Sass:

```scss
.bordered-box {
    border: 2px solid $theme-color;

    h2 {
        font-style: italic;
        span {
            color: $highlight-color;
        }
    }

    button {
        color: $theme-color;
    }
}
```

Immediately our code becomes more readable and easy to understand; the implied nesting from the CSS code is now part of the Sass code implementation!

#### Mixins

Suppose we wanted to add a border radius to our `.bordered-box` class. Some of you might be used to CSS code that looks like:

```css
.bordered-box {
    border: 2px solid $theme-color;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
}
```

> Note: Technically we don't really need the `-webkit` and `-moz` prefixes anymore (see [why](https://css-tricks.com/do-we-need-box-shadow-prefixes/)), but they really help to illustrate the power of mixins.

Now, the bad thing about the above code is that it's three lines of CSS to do one action. What if we had 100 classes that needed a border-radius? We now have 300 more lines of code!

A **mixin** is a collection of code not meant to stand alone, but to be imported into other functions, classes, etc. If you're thinking that this definition sounds a lot like the definition for partials, then here's where they differ:

-   Mixins are code snippets meant to be used inside of another class
-   Partials are variables and classes that are modularized from another larger file
    -   There's not much difference between a partial and a standard `.scss` file, the only difference is how it's used (imported into another Sass file instead of imported into a React component)

So let's look at how we would define a mixin to make our border radius easier to implement:

```scss
// _mixins.scss partial

@mixin border-radius($size) {
    -webkit-border-radius: $size;
    -moz-border-radius: $size;
    border-radius: $size;
}
```

```scss
@import './mixins';

.bordered-box {
    border: 2px solid $theme-color;
    @include border-radius(6px);
}
```

Here, in the bottom Sass snippet, we are importing the contents of the `_mixins` partial, and then we are using / calling the mixin `border-radius` using the `@include` syntax. You can think of mixins like functions; they can accept 0 or more parameters and then "return" Sass or CSS code.

We can use mixins to add style content to our classes independently, thereby reducing repeated code. For example, suppose we wanted a set of padding and margin defaults for a lot of different containers:

```scss
// _variables.scss partial

$spacing: 20px;
```

```scss
// _mixins.scss partial

@mixin format-box() {
    padding: $spacing;
    margin-top: $spacing;
    margin-bottom: $spacing;
    text-align: center;
}
```

```scss
@import './variables';
@import './mixins';

.bordered-box {
    @include format-box();
}
```

With variables, partials, nesting and mixins, we can vastly decrease the size of our style files, and make it much easier to change things as our styles grow. We'll be learning even more Sass features as this course progresses, an all labs from now on will ask you to write your code in Sass (`.scss` or `.sass`) instead of CSS.
