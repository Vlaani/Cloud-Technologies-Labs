FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY keys /etc/nginx/ssl

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]