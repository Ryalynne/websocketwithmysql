
## Getting Started

Server Side
backend/index.ts
---- setuping backend----
npm init  -y
npx tsc --init
---- using socket.io ----
npm i socket.io express nodemon
npm i http
npm i @types/http

"watch":"tsc -w",
"dev": "tsc -b && nodemon dist/index.js"
---use to npm run dev instead of node js---

create dist folder
src/index.ts
change directory , 
configure tsconfig.json > src and outdist ;


Now on the Client Side
npm i socket.io-client

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

