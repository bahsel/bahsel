# BAHSEL Website

A proposed framework for the BAHSEL website backend. The proposal is a funky experimental stack where the server runs express.js and MongoDB, serving a Next.js site while having open socket.io ports.

```
express.js ─────────► Next.js client
    │                        ▲
    │                        │
    ├─────► MongoDB ─────────┤
    │                        │
    └─────► socket.io ───────┘
```

## Why????

heh,

### Why Next.js?

[Next.js](https://nextjs.org/) is a [React](https://reactjs.org/) framework. 

_Why React?_

Once a React app is built, the intent is that the page will never have to refresh to navigate (the React app will build and display new elements instead of the client asking for a new HTML document for each new page). React also has components, which means that you can define a header and use it in multiple different pages (object oriented web programming :O). There are some [other benefits](https://www.freecodecamp.org/news/why-use-react-for-web-development/) of React, too.

_Why Next.js?_

In vanilla React, an empty HTML file with a ton of javascript is sent to the client. The client has to evaluate that ton of javascript to build an interactive React app before being able to show the desired landing page. 

Next.js 'compiles' each page into HTML before sending it to the client, so the client only has to evaluate the HTML before the desired landing page is visible. Then, it evaluates javascript to 'rehydrate' the React app, essentially building a dynamic React app out of the static pre-generated static landing page. There are a few benefits to this:
- The page loads relatively quickly no matter how potato the viewer's device (or phone) is.
- Enhanced SEO: because React pages have no data until the app is built via the javascript being ran, search engine scrapers (which usually don't evaluate javascript) get nearly no information from vanilla React apps. Because Next.js delivers a generated static site, the search engine still has a full site to parse.

[Here's an article](https://tsh.io/blog/what-is-next-js-used-for/) that probably explains all of this better.

### Why socket.io?

[socket.io](https://socket.io/) makes possible socket connections between the server and the client. Typically, the client has to request the server to receive any information. With a socket, the server is also able to 'push' information to the client (and the same in the reverse direction), making websites with changing quickly changing data possible. 

I imagine using this for stream overlays, where someone can input team names, reset timers, etc. from a client, which (through a socket connection) alerts the server, which (through a socket connection) alerts any streamers using a page of our website as a stream input.

### Why MongoDB?

With a [MongoDB](https://www.mongodb.com/) database, we can store for example tournament information, team and school names, descriptions, and photos, etc and dynamically have pages for all these tournamenets/teams/schools within our website. This is possible through a combination of [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) and [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).

I was hoping for the front page to feature a scrolling collage of teams' or schools' logos, similar to the scrolling images on [GenG's main page](https://geng.gg/), by pulling images from our MongoDB database. We can also upload graphics for upcoming events onto our database and serve that as an element for streamers to use.

### Why express.js?

With [express.js](https://expressjs.com/), we can split incoming requests into different routes (e.g. the stuff after the website domain: `https://mydomain.com/<route>/<more route wheee>`). This makes it so that we can make a route for socket.io traffic.

### Do we really need all this?!?!?!?!

no. i'm just having fun. 

I think we can definitely handle Next.js at minimum, though even that's optional -- we could use only a React app (or even just vanilla HTML).

express.js is required if we want to be able to separate traffic for socket.io. It also allows us to protect some routes behind authentification, though Next.js [does have this](https://nextjs.org/docs/authentication) built-in.

socket.io is completely optional, and it might be used very minimally if we don't do stuff for streams. but it would be soooo sick...

MongoDB is also optional, we could hard code every page. but a) where's the fun in that and b) then we can't let clubs edit their own page (and have it update in the database and therefore the website) which is sad :(

## what are all these folders and files

oh, i was hoping you'd know... cuz i don't...
```
root
│
├─── pages: Pages of the site (the React app)
│
├─┬─ components: Components of the site
│ │
│ ├─── elements: Specific elements used on different pages
│ │
│ └─── templates: Components that can be reused on different pages
│
├─── public: Files that Next.js automatically serves on the root level. Images, icons, fonts, ...
│
├─── util: JavaScript files used by the backend
│
│
├─── server.js: Exports an express.js server
│
├─── app.js: Production app. Sets up the server (from server.js) to listen on HTTPS (using certificate) and redirect HTTP traffic to HTTPS.
│
└─── devapp.js: For development. Sets up the server to listen on localhost:3000. This is different from next dev because it's the whole shebang: express routes, sockets, etc.
```

## Getting Started (Developing pages)

To work on pages within the site, you can run Next.js's developer server on your computer:
1. Install (Node.js)[https://nodejs.org/en/]
2. Navigate to this repository's directory and run `npm install` to install all dependencies defined in `package.json`. (If you use `npm install <dependency>` in this directory, it will automatically be added to `package.json`).
3. Run `npm run dev` to start the Next.js developer server. Changes should update live.

## Deploying (to an actual server)

coming soon to theatres near you