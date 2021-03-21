FROM node:14.9 AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm ng build --prod --optimization=false --base-href "https://stage-dot-tesis-301803.ue.r.appspot.com/"

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/proyeccion-social-client /usr/share/nginx/html
EXPOSE 80
--------------------------------------------------

FROM node:12.0

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 4200

CMD [ "npm", "start" ]
