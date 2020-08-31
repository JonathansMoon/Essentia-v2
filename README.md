<h1 align="center">
    <img alt="Jonathan's" src="https://i.pinimg.com/originals/52/1a/fa/521afaada5d1c270249703e2420fbbb3.png" />
    <br>
    Essentia
</h1>

<p align="center">

<p align="center">
  <a href="#Moon-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img src="https://github.com/JonathansMoon/files/blob/master/images/essentiav2.png">
</p>

## :computer: Technologies

This project was developed at the [Jonathan's Moon](#) with the following technologies:

<h3>Databases</h3>

- [Mysql](https://www.mysql.com/)

<h3>DevOps</h3>

- [docker](https://www.docker.com/)

<h3>Backend - PHP</h3>

- [Laravel](https://laravel.com/)
- [PHP Unit](https://phpunit.de/)

<h3>Frontend</h3>

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Datatables](https://l-lin.github.io/angular-datatables/#/getting-started)
- [Javasscript](https://www.javascript.com/)
  
## :pencil2: Methodologies

This project was developed at the [Jonathan's Moon](#) with the following Design Patterns:

- Test PHPUnit
- Services
- Dependency Injection

## :information_source: How To Use

To clone and run this application, you'll only need [Docker](https://www.docker.com/), and [node](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JonathansMoon/Essentia-v2.git

# Go into the repository
$ cd Essentia-v2

# Run the command for permission.
$ chmod +x ./run.sh

# Run the command to mount the php and nginx image on the docker
# This will automatically perform the migrations and seeds,
# Install dependencies for all projects
# in addition to configuring and running your project via docker.
$ sudo ./run.sh

# To run tests on the backend, perform the following:
$ docker exec -it essentia-app bash
$ php artisan test

# Execute to stop execution in backend
$ sudo docker-compose down
```

## :memo: License

This project is under the MIT license.

Made with ♥ by Jonathan Silva :wave: [Get in touch!](https://www.linkedin.com/in/jonathan-silva-gomes-53271a168/)

[vc]: https://code.visualstudio.com/
