# Stage 1 - the build process
# base image
FROM node:10.16.0-alpine AS build-deps

# teste para criar pasta
# RUN mkdir /usr/src/app

# set working directory
WORKDIR /usr/src/app

# add `/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# add `/app/node_modules/` to NODE_PATH
ENV NODE_PATH=/node_modules

# Bundle app source
COPY . ./

# install and cache app dependencies
RUN yarn
RUN npm install react-scripts@3.0.1 -g --silent

# Build and optimize react app
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.16.0-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# Working with react-router
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]