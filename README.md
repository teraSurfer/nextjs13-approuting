## Steps to install dependencies

Install prisma:

```bash
npm i -D prisma

npx prisma init --datasource-provider posgresql
```

add the following line to `package.json`
```json
"scripts": {
    // other scripts
    "generate:prisma": "prisma generate",
    // other scripts
}
```

this will generate a directory called `prisma` and create a file `schema.prisma`

## Steps to run locally

```bash
npx prisma migrate dev --name init

npm run generate:prisma

npx prisma db seed
```
