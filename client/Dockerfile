FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g serve

COPY . .

EXPOSE 8080

RUN npm run build

CMD ["serve","-s", "build"]
