This is a simple note application using React, GraphQL and MongoDB. I've created it for fun and as a future reference to bootstrap GraphQL apps.

Features:

- Uses Create React App
- Typescript
- Persistence using MongoDB
- Full text search
- Client caching
- Responsive (platform specific flows and layouts)
- Light & dark themes
- GraphQL code generation
- Docker image for easy deploys
- Decoupled resolvers with reusable services
- No UI framework, custom handcrafted components
- Focused on using few dependencies as possible but just enough to keep things simple.

![Demo](demo.gif)

## API

Start the server

```bash
cd api
docker-compose up -d
```

Default environment variables:

```
MONGO_URI=mongodb://root:dev@localhost:27017
MONGO_DB=graphql-notes
```

## web

Start the web app

```bash
cd web
yarn install
yarn start
```

Default environment variables:

```
REACT_APP_API=http://localhost:4000
```

## TODO

- Add tests
