FROM node:15.13-alpine
WORKDIR /bfi-app-react
COPY package*.json ./
RUN npm install
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]