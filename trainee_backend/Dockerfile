FROM node:14-alpine

WORKDIR /trainee_backend
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
