[![Watch the video](https://miro.medium.com/max/1400/1*-YNY3KLuXt6HIR7h-eIcow.jpeg)]()

# Docker-lamp

Docker con Apache, MySQL 8.0, PHPMyAdmin and PHP.


Uso docker-compose como creacion de contenedores. Para ejecutar estos contenedores:

```
docker-compose up -d
```

Abre el phpmyadmin en [http://127.0.0.1:8000](http://127.0.0.1:8000) /// [http://localhost:8000](http://localhost:8000) / Ambas son la misma

Abre el navegador para poder entrar en la aplicacion [http://127.0.0.1:80](http://127.0.0.1:80) /// [http://localhost:80](http://localhost:80) / Ambas son la misma

Clona tu projecto en `www/` y luego, abre tu web [http://127.0.0.1/YourProject](http://127.0.0.1/YourProject) /// [http://localhost/YourProject](http://localhost/YourProject) / Ambas son la misma


Para ejecutar el mysql cliente ejecute el comando siguiente

- `docker-compose exec db mysql -u root -p` 


