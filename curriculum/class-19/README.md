# Class 19 - Sass, React Testing, and Deployment

| [Lecture Video](https://frontrowviews.com/Home/Event/Details/5d8e9123bdb995374c472834) | [Lab Video](https://frontrowviews.com/Home/Event/Details/5d8e9123bdb995374c47283b) |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |


## Key Terms

| Term                  | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Supporting Links                                                                                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CSS Preprocessor      | A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.                                                                                                                                                                                                 | [1](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor) / [2](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus)         |
| Sass                  | Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into CSS. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS" (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate lines within a block. The indented syntax and SCSS files are traditionally given the extensions `.sass` and `.scss`, respectively. | [1](<https://en.wikipedia.org/wiki/Sass_(stylesheet_language)>) / [2](https://sass-lang.com/)                                                                            |
| Partial               | Partials in Sass help break up style files into smaller pieces without affecting performance. A partial is simply a Sass file preceded by an underscore. An example is `_name-of-file.scss`. The underscore tells Sass that the file is a partial and that it should not be compiled to CSS. This partial can then be imported into another file that will be compiled to CSS                                                                                                                                                                                                            | [1](https://dev.to/sarah_chima/using-sass-partials-7mh) / [2](https://sass-lang.com/documentation/at-rules/import) / [3](https://www.w3schools.com/sass/sass_import.asp) |
| Mixin                 | Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes, and to distribute collections of styles in libraries.                                                                                                                                                                                                                                                                                                                                                                                           | [1](https://sass-lang.com/documentation/at-rules/mixin) / [2](https://scotch.io/tutorials/how-to-use-sass-mixins)                                                        |
| Snapshot Testing      | A typical snapshot test case for an app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.                                                                                                                                                                                                                                                  | [1](https://jestjs.io/docs/en/snapshot-testing) / [2](https://medium.com/javascript-in-plain-english/should-i-be-writing-snapshot-tests-47da13a62085)                    |
| Full Mount Testing    | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | --                                                                                                                                                                       |
| Shallow Mount Testing | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | --                                                                                                                                                                       |
| Render Testing        | --                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | --                                                                                                                                                                       |

## Key Packages

| Package                   | Description                                                                                                                    | Link                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `node-sass`               | This package allows you to compile sass files into CSS during builds                                                           | [npm](https://www.npmjs.com/package/node-sass)               |
| `react-test-renderer`     | This package allows you to create a snapshot from your React application to test against                                       | [npm](https://www.npmjs.com/package/react-test-renderer)     |
| `enzyme`                  | Enzyme is a testing utility made by AirBnB, and it makes it very simple to test the code and state output of a React component | [npm](https://www.npmjs.com/package/enzyme)                  |
| `enzyme-adapter-react-16` | This is required to run enzyme commands, and must be updated to match your version of React. Currently, React is on version 16 | [npm](https://www.npmjs.com/package/enzyme-adapter-react-16) |

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
// styles.scss

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
// styles.scss

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
// styles.scss

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
// styles.scss

@import './variables';
@import './mixins';

.bordered-box {
    @include format-box();
}
```

With variables, partials, nesting and mixins, we can vastly decrease the size of our style files, and make it much easier to change things as our styles grow. We'll be learning even more Sass features as this course progresses, an all labs from now on will ask you to write your code in Sass (`.scss` or `.sass`) instead of CSS.

### Writing UI Tests

In our application, we have a simple counter component that adds or subtracts from our count. We can also initialize our counter to start at a value other than zero.

```jsx
// Counter.js

import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.count = this.props.count ? this.props.count : 0;
    }

    add(e) {
        this.setState({ count: this.state.count + 1 });
    }

    subtract(e) {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className='bordered-box'>
                <h2>
                    Your current count is: <span>{this.state.count}</span>
                </h2>

                <button id='subtract' onClick={this.subtract.bind(this)}>
                    Subtract
                </button>
                <button id='add' onClick={this.add.bind(this)}>
                    Add
                </button>
            </div>
        );
    }
}

export default Counter;
```

We then import and render the `<Counter />` component within `App.js`:

```jsx
// App.js

import React from 'react';
import Counter from './Counter.js';
import '../styles/styles.scss';

function App() {
    return (
        <div className='container App'>
            <h1>Demo Application</h1>
            <Counter />
        </div>
    );
}

export default App;
```

Let's see how we can write tests to cover these components and verify that our UI is working correctly.

#### Snapshot Tests

> [Jest Snapshot Testing Documentation](https://jestjs.io/docs/en/snapshot-testing)

Let's assume that we're done with developing our UI for our application, and instead want to refactor some code so that it's cleaner. We don't want the look of our application to change at all, since we're just making JavaScript logic changes behind-the-scenes instead of HTML changes. This is the perfect use-case for a snapshot test.

In order to do snapshot tests, we will need to install the package `react-test-renderer`:

```
npm install react-test-renderer
```

Within our `App.test.js` file, we can verify that our application matches a snapshot. The very first time Jest runs tests on your application, it will generate a snapshot and save it. Any subsequent test runs will compare against the saved snapshot.

```jsx
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';

describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});
```

When you run the test for the first time, you'll see that in the same directory as your test file, Jest creates a folder called `__snapshots__`, with the file `App.test.js.snap` added to the folder. If you view this file, you can see that it is essentially the expected HTML content of the page.

If you need to update your snapshots for future tests, you can run the command

```
jest --updateSnapshot
```

And that's it! As you can see, snapshot tests are very simple and sometimes not even necessary in an application, especially when your development results constant UI changes. However, snapshot tests can be essential during refactoring, modularization, and logic changes that expect the end UI to remain constant.

#### Testing With Enzyme

Now, let's move to individual component testing with the Enzyme plugin for Jest. First, let's install Enzyme and its dependencies:

```
npm install enzyme
npm install enzyme-adapter-react-16
```

Let's start by creating a full mount test. Remember, a full mount test specifies that all children component of the current component are fully rendered and tested as well. Currently, our Counter component doesn't have any children components, so let's write our full `mount` tests for our App component within `App.test.js`. First, we need `configure` enzyme and import the `mount` function.

```jsx
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

These above lines will enable us to use Enzyme (specifically the `mount` function) in our tests. Here's an example test for our App, where we check that `<Counter />` was correctly rendered by searching for the `<h2>` text within our counter.

```jsx
it('has a Counter', () => {
    let component = mount(<App />);
    expect(component.find('div.bordered-box h2').text()).toBe(
        'Your current count is: 0',
    );
});
```

Here, we use the `.find()` function to use a selector upon the DOM and get one specific element. We then use `.text()` to get the text content of that element, and then use the Jest `.toBe()` function to compare that with a hard-coded string.

Just like with Jest, Enzyme has a [large API](https://airbnb.io/enzyme/docs/api/) that you will get more familiar with over time. Enzyme exposes a lot of functions that allow us to find specific pieces of the rendered result.

One of the more useful features of Enzyme is that it can _simulate_ user interaction, such as button clicking. Let's modify our test so that it checks if our counter adds correctly.

```jsx
it('adds one to Counter', () => {
    let component = mount(<App />);
    let addBtn = component.find('div.bordered-box button#add');

    addBtn.simulate('click');
    expect(component.find('div.bordered-box h2').text()).toBe(
        'Your current count is: 1',
    );
});
```

In our current tests, we're checking if the text content of an HTML element is equal to something. That is useful, but as our UI changes we may have to update this test frequently. Instead, what if we were just checking the value of a state variable within the Counter element? In order to do this, we need to make a test on the Counter component itself. Let's make this a shallow test, since Counter doesn't have any child components we need to worry about.

```jsx
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../components/Counter';

configure({ adapter: new Adapter() });

describe('Counter component', () => {
    it('correctly adds one to state count variable', () => {
        let component = shallow(<Counter />);
        let addBtn = component.find('div.bordered-box button#add');

        addBtn.simulate('click');
        expect(component.state('count')).toBe(1);
    });
});
```

Finally, if you do not care about state variables and just want to verify simple HTML elements with selectors, then you can use the `render` function from Enzyme:

```jsx
import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../components/Counter';

configure({ adapter: new Adapter() });

describe('Counter component', () => {
    it('correctly adds one to state count variable', () => {
        let component = render(<Counter />);
        expect(component.find('div.bordered-box h2')).toBeDefined();
    });
});
```

### Deploying

Now that we have a styled and tested application, let's deploy it! You can use any of the video tutorials below to learn the deployment process. In this class, we will primarily be using Netlify, because of its ease of use and quick auto-deploy setup with GitHub.

-   [AWS S3 Deployment](https://www.youtube.com/watch?v=Kay-UvVCNFs)
-   [AWS Amplify Deployment](https://www.youtube.com/watch?v=DHLZAzdT44Y)
-   [Netlify Deployment](https://www.youtube.com/watch?v=sGBdp9r2GSg)
