# # base image
# FROM node:19-alpine

# # set working directory
# # RUN mkdir /app
# WORKDIR /app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# # ENV PATH /usr/src/app/node_modules/.bin:$PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY . .
# RUN npm install


# # start app
# CMD ["npm", "run", "dev"]

FROM node:19-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]