# Event Driven Capstone Project

## Building an Event Based API

> This is an UNGRADED pair programming assignment. Read the following requirements and please feel free to ask any questions to your instructor!

### Requirements
- Create a file called `app.js` that instantiates an `express` application with the following features.
    - Stores an in memory data structure called `messages`. Which stores a list of messages with the following properties:
        - `id: { String } - Must be unique`
        - `contents: { String }`
        - `created_at: { Date }`
    - Brings in the Net module from Node for emitting API events:
        - Net Module should open up a TCP connection listening for client sockets. 
    - Listens for the following HTTP endpoints:
        - GET /messages
            - Sends the `messages` data structure in the response object.
            - Emits a TCP `data` event titled `MESSAGE_FETCH` and sends a payload to all connected sockets, containing `messages`.
        - POST /messages
            - receives a message object on the request.
            - Adds a new message object to `messages`.
            - Sends `messages` in the response body.
            - Emits a TCP `data` event titled `MESSAGE_WRITE` and sends a payload to all connected sockets, containing the new message object.
        - PUT /messages/:id
            - Receives a message object on the request.
            - Replaces a message object in `messages` by searching for the `id` on a message object matching the request parameter `:id`.
            - Emits a TCP `data` event titled `MESSAGE_UPDATE` and sends a payload to all connected sockets, containing the updated message object.

- Create a file called `logger.js` that connects to the open Socket server.
    - The logger listens for three events:
        - `MESSAGE_FETCH` - console.logs 'Reading messages: ' and the list of messages.
        - `MESSAGE_WRITE` - console.logs 'New message: ' and the new message.
        - `MESSAGE_UPDATE`- console.logs 'Message updated: ' and the updated message.
