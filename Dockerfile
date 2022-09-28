FROM node:16

WORKDIR /todo-app

RUN chown -R ${USER}:${USER} .

COPY package.json .

RUN npm install

RUN npm install -g nodemon

VOLUME [ "/todo-app/node_modules" ]

COPY . .

CMD [ "nodemon", "index.js" ]
