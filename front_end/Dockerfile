FROM node:8
RUN mkdir -p /tmp/app
COPY code /tmp/app/
WORKDIR /tmp/app
RUN npm install
EXPOSE 8080
CMD npm run dev