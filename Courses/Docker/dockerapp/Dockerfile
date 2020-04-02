FROM node:10
#Create app directory
WORKDIR /usr/src/dockerapp

#Install Dependencies
COPY package*.json ./
RUN npm install

#Bundle app's source
COPY ./ ./

#Container expose port
EXPOSE 6050

#Run app
CMD [ "node", "server.js" ]