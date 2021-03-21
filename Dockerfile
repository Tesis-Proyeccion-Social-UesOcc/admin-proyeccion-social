FROM node:14.9 AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run-script build
# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/proyeccion-social-client /usr/share/nginx/html
EXPOSE 80


