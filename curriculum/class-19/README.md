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

| Package  | Description | Link |
| -------- | ----------- | ---- |
| `enzyme` |             |      |

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
