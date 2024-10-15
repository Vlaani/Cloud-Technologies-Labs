FROM node:20

WORKDIR /server.js/

COPY . /server.js/

EXPOSE 8080

RUN rm -rf node_modules/ && npm update && npm install

RUN --mount=type=secret,id=password

RUN useradd -u 1100 UserA

USER UserA

CMD ["node", "--env-file=.env", "./main.js"]