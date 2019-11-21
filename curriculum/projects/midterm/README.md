# Mid-Term Project

During our course midterm, you and your team will be asked to develop an application, service or system which utilizes concepts learned in the first half of the course. Work together as a team to learn new things, implement things you've done in class, and have the end-to-end experience of creating, documenting, testing, and deploying an application just as you would do in a professional environment.

## Core Requirements

Your task will be to create a back-end only (no UI or client-side) application or service. You will need:

- GitHub Repository
  - Create a GitHub organization for this project
  - Create a repository for this project
  - Create branches for features and merge those into the master branch when the feature is complete and tested
    - Use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
      - Create a branch for each feature
      - Create a `staging` branch which combines features but is overall still under development
      - Treat your `master` branch as your production branch - it should only have code that is ready to "send out" to an end user
  - Create a detailed README which includes
    - Detailed instructions for how to run your application
    - Detailed UML diagram describing how your application works and fits together
- Full documentation
  - If you are making an API, ensure there is a place to view and navigate API docs
    - Use `express-swagger-generator` and/or [Swagger.io](https://inspector.swagger.io/builder)
    - Comment your API endpoints thoroughly using [JSDoc-like Swagger comments](https://github.com/pgroot/express-swagger-generator#how-to-document-the-api)
    - Have this API documentation hosted at a URL anyone can visit
  - Comment all functions and classes with [JSDoc Comments](https://devhints.io/jsdoc) and generate JSDoc HTML pages, which should also be hosted at a URL anyone can visit
- Working Code
  - Modularize your code well into distinct files, packages and functions
  - Use functional programming where possible
  - Prevent repetitive code where possible
  - Write your code as if external developers will need to read and understand it
  - Follow ESLint conventions
- Passing Tests
  - Connect your application to Travis to run and verify your tests
  - Shoot for **100%** coverage
  - Shoot for _robust_ tests which cover all potential user cases
    - Happy path - user does the right thing with right intentions
    - Error paths
      - User does wrong thing with right intentions
      - User does the wrong thing with the wrong intentions (hacker attempts)
      - User doesn't know how to properly interact with your application or system
- Presentation Slides: Have one slide for:
  - Team name and (optional) logo
  - Summary of the project
  - One slide for each team member, including
    - Your photo
    - 2-3 bullet points about you
    - Introduce yourself, touch on your role(s) in the team, and present your personal pitch.
  - Problem domain description in bullet points
  - Sell your team's solution to problem domain
  - Demo of your application
  - Description of testing - what you tested, why you did it, why it's needed
  - Detail on your workflow and process (did you use a task manager, github setup, etc)
  - Highlight the team "wins" for your project
  - Highlight the areas of growth for your project and team
  - Q&A slide to ask for questions.

## Project Team

For this midterm project, the **entire class** will be one team. This is very similar to real-world development teams, which can be smaller but are usually around 5-10 people.

Every team member will need to write JavaScript code for your project. In addition to writing code, each team member will have a unique role which will give them further responsibilities. In this team, you will be utilizing the following roles:

- Project Manager
  - You will be responsible for planning out the main features in the project, and the timeline and "deliverables" for each feature.
    - Make features small pieces of the whole project and give clear deadlines for each feature
  - Consistently check in with your teammates and give them the support they need
  - Create UML diagrams describing how features fit together
  - Allocate teammates to specific features
  - Set up frequent SCRUM syncs
  - Direct the high-level path of the project.
- Lead Developer
  - You will be responsible for managing the main development of the project
  - Plan out API routes, modules, classes, and code structure
  - When given high-level features from the project manager, determine the best way to implement that feature
  - Prevent code conflicts when multiple developers work on the project code
  - Create UML diagrams describing how code within each feature fits together
- Lead Tester
  - You will be responsible for managing all tests for the project
  - Define what needs to be tested for each feature
  - Work with the Lead Developer to write tests _before_ you write feature code
    - This will probably save the team a lot of headache while developing!
  - Ensure Travis is connected and running all tests in all feature branches
- Code Reviewer
  - You will be responsible for rigorously reviewing every pull request from a feature branch into the master branch. No pull request can be merged without your approval
  - Look for where code can be optimized
    - Where should functional programming be used?
    - Where should repetitive code be removed?
    - Where should code be modularized?
    - Where are comments missing?
  - Suggest edits, or make those edits yourself upon feature branches
  - Ensure consistency across all feature branches
- Documenter
  - You will be responsible for writing all documentation for your project
  - Write JSDocs comments
  - Write Swagger comments
  - Comment confusing lines of code
  - Treat your code as something you're sending off to an external developer
- DevOps
  - You will be responsible for all deployments and database management for your application
  - Set up Heroku, AWS or Azure deployments and automatic deploys
  - Set up development and production environments
  - Set up MongoDB databases (use [Atlas](https://www.mongodb.com/cloud/atlas) to share a single database across your team)
  - Set up third-party SDKs, APIs, etc to work for your team members
  - Develop any automation scripts or tools to make your team's jobs easier

Remember, your work is not limited to your role. **Every team member should still be writing feature code in addition to their role**.

During your first week of Midterms, you and your team members can decide among yourselves what role each person has. During your second week of Midterms, I will reassign each team member a new role. This way, each person should have the experience of two roles during the course of the midterm, though exceptions may be made based on the team.

## Retrospectives and Syncs

You will have a collection of "daily" retrospectives due within Canvas. These are opportunities to reflect on your work for that day, and see what challenges and successes your team has faced.

You will also have a [Midterm Personal Retrospective](https://canvas.instructure.com/courses/1707810/assignments/12569718), which will be due once your midterm is complete. Use this as an opportunity to talk about what worked and what didn't for the project, and how you felt working on a team.

Only one person on your team (perhaps the Project Manager) will be required to fill out the [Midterm Group Report](https://canvas.instructure.com/courses/1707810/assignments/12569717), which describes what your project is, and any links required.

Finally in-between the two weeks of your midterm, your instructor will set up a 1:1 with each team member to talk about how things are going through the course of the project. Use this time to ask for help if you need it, or to think about what you enjoy and what you don't enjoy when working on a team project.

## Project Inspiration

Remember, your project should be back-end only; don't create any client-side layer, and instead use external tools to mimic a client-side or test your back-end. Think about how to structure your presentation so that your back-end project can be best displayed.

### Previous Projects

Below is a collection of ideas to help you get started. These are examples of things previous 401 students have implemented.

- An API that fetches and posts Google contacts to an from an external database
- An API integrated with a Raspberry PI Zero which will listen for a voice request to get a mock interview whiteboard question, pulls a random question from a database, and then reads it out loud through a speaker
- An API that allows users to rate and give opinions on burgers
- Blockchain built from JavaScript and MongoDB
- An API that calculates a music playlist personality by allowing songs to be added via endpoints and then piping the playlist to Watson's Personality Insights API
- An API that lets a user sign-up to receive updates on a specific topic, so that anytime an update occurs the user receives a text message on their phone notifying them
- A command-line Dungeons and Dragons adventure, where CRUD operations are used to determine the flow of the story
- A job-board scraper and aggregator that looks at multiple job boards and consolidates the jobs into a single database and API
- A Google Chrome plug-in that checks what sites a user accesses and figures out how many sites are productive vs non-productive
- A color-changing mood light that responds to sounds and changes color, using a Raspberry Pi and LEDs
- An NPM package that is a security middleware for express, handling all authentication processes and extending authentication to include OAuth, Multi-Factor, and facial recognition
- An API that lets you add students to a class, and then lets you call random students, assign random pairs, assign unique pairs, assigns groups and more
- A download-able Slackbot that posts inspiring messages into Slack periodically or on-demand

### Broad Ideas

Here is a collection of broader ideas of inspiration to help guide your project direction.

- Create an API that will allow you to create things and view things and manage the relationship between things
  - Think about:
    - What information is important to you? What relationship between important information exists?
    - How can you go about getting that information today? Is there an easier way? Can you create an API that does it easier?
- Create an automation tool that does something simpler given a few parameters
  - Think about:
    - What processes do you do often?
    - Can the steps of that process be bundled together in some way?
    - Should this process be automatically triggered during a certain event?
- Build upon an existing lab project and make it an NPM package that anyone can download
- Create a tool for an existing application that you use
  - A Chrome plugin
  - A GitHub tool
  - A Slackbot
- Add hardware to your code to allow for more input/output opportunities
  - Raspberry PI
  - Motion Detectors
  - Fingerprint scanners
  - Webcams
  - Phones

## Project Tools

Use some project management tools to help manage your team and keep everyone on the same page.

- [Trello](https://trello.com/b/2GAur1IN/open-shelf-a-book-wiki?menu=filter&filter=label:Lab%2014)
- [Github Projects](https://help.github.com/articles/about-project-boards/)
- [Jira](https://www.atlassian.com/software/jira)
- [Azure Boards](https://azure.microsoft.com/en-us/services/devops/boards/)

## Tips and Tricks

In a team environment, it is very important to communicate frequently and clearly.

- When something is difficult, ask for help
- When you don't know what to do, talk to your project manager, T.A. or Instructor
- Be respectful of your teammates - they're going through tough things too!

When deciding what project to work on, keep in mind your time and space constraints.

- Break up your project into small pieces and figure out priorities for these pieces
- Ensure you're able to deliver _something_, even if it's not the full project
- Don't over-complicate. Sometimes, the simplest solution can be the most scalable and stable. Favor stability and tightness over wizardry
