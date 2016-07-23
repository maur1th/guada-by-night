FROM node:6

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/api/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/api
RUN npm install && npm cache clean

CMD ["node", "index.js"]
