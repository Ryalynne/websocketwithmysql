
## Getting Started

Server Side <br>
backend/index.ts <br>
---- setuping backend---- <br>
npm init  -y <br>
npx tsc --init <br>
---- using socket.io ---- <br>
npm i socket.io express nodemon <br>
npm i http <br>
npm i @types/http <br>

"watch":"tsc -w", <br>
"dev": "tsc -b && nodemon dist/index.js" <br>
---use to npm run dev instead of node js--- <br>

create dist folder <br>
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

