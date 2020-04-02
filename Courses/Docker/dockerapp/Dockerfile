FROM node:10
#Create app directory
WORKDIR /usr/src/dockerapp

#Install Dependencies
COPY package*.json ./
RUN npm install

#Bundle app's source
COPY . ./

#Container expose port
EXPOSE 8080

#Run app
CMD [ "node", "server.js" ]