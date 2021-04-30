# quick-start-vue-2.5
### The best solution for quick start a simple web application
Advantages:
1. Fully Dockerized.
2. Cross Platform.
3. RESTful (Base URL in src/vuex/store.js/BASE_URL).
4. Has basic template with Navbar, Footer and router-view components.
5. Responsive layout.


# Installation
``` bash
git clone https://github.com/nikitakashin/quick-start-vue-2.5.git
npm i
```

## Local dev server

``` bash
npm run dev
```

## Build Setup

``` bash
npm run build
```

## Build Setup with Docker

``` bash
docker build . -t projectname
docker run -it -p 8080:8080 projectname
```

