FROM node:17-alpine as builder

WORKDIR /app
# COPY package.json . 
# RUN npm install
# COPY . .
ENTRYPOINT ["npm", "start"]
