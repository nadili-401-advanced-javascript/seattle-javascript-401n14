# Class 18 - Component Based UI

## Key Terms

| Term                   | Definition | Supporting Links |
| ---------------------- | ---------- | ---------------- |
| Component Architecture |            |                  |
| State                  |            |                  |
| DOM                    |            |                  |
| Libraries              |            |                  |
| Frameworks             |            |                  |

## Key Packages

## Where We're Coming From

So far, we've been spending a lot of time creating web applications without a client-side or front-end. We have learned:

-   How to make classes so that we can define our own object types
-   How to use an express server to create pages or "routes" in our applications
-   How to store and read data from a database so that our applications "persist" information
-   How data is sent over the internet via HTTP and TCP.

Now, it's time to shift our focus to the front-end. While you may be familiar with creating websites using HTML files and JQuery-enabled JavaScript files, we're going to dive into a different way of thinking about our websites. We're going to see what it looks like when our HTML and JavaScript is in the same file, and when our web pages are broken up into modular pieces with access to all of our Node modules. And we'll be doing all of this using a library called React.

## Where We're Going

React was created in 2011 by a Facebook engineer, with the goal to improve how UIs were developed for web applications. No more using vanilla JavaScript or JQuery intermixed with HTML files. With React, the focus is all on creating _components_.

In HTML there are currently a number of default components available to us. We can use a `<div>`, `<table>`, `<section>`, `<header>` or `<footer>` for example. What if we were able to make our own complex component called `<UserSigninForm>` which contained all the input fields required for a "sign-in" form in our application? Better yet, what if we were able to bundle the UI and front-end logic into that `<UserSigninForm>` component?

```jsx
class UserSigninForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log('I submitted my form!');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="email" name="email" />
                <input type="password" name="password" />
            </form>
        );
    }
}
```

```html
<html>
    <body>
        <UserSigninForm />
    </body>
</html>
```
