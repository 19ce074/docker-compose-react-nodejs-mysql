# Stage 1
FROM node:14-alpine as build-stage
WORKDIR /trainee_frontend
COPY package.json .
RUN npm install
COPY . .
# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN npm run build
#expose on multiple port

# Stage 2
FROM nginx:1.17.0-alpine
COPY --from=build-stage /trainee_frontend/build /usr/share/nginx/html
#COPY /home/vivek/Projects/docker-compose-react-nodejs-mysql/nginx/default.conf /etc/nginx/conf.d


EXPOSE 80
CMD nginx -g 'daemon off;'
