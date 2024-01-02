FROM node:14-alpine3.15

WORKDIR /app_dir

COPY ["package.json" , "package-lock.json" , "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]