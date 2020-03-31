# Docker images

Practice of build and run docker image

<a href="https://www.udemy.com/share/101DrYB0MbcFtVQHs=/">Udemy Docker course</a>

Own dockerapp based on:
<a href="https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/">Dockerizing a Node.js web app</a>

To build docker image it's necessary run the next command:

```poweshell
docker build -t <username>/<docker-image-name> .
```

To run docker image run the next command:

```powershell
docker run -p <Port>:<Docker port exposed> -d <username>/<docker-image-name>
```

## Aux commands

List all images used:

```poweshell
docker images -a
```

remove a image

```powershell
docker image <IMAGE ID>
```

remove all images:

```powershell
docker rmi $(docker images -a -q)
```

List all containers:

```powershell
docker ps -a
```

Stop container:

```powershell
docker stop <CONTAINER ID>
```

Remove container:

```powershell
docker rm <CONTAINER ID>
```

## References

[Delete images, containers, and volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

[Stop Docker container](https://docs.docker.com/engine/reference/commandline/stop/)

[packege.json](https://docs.npmjs.com/files/package.json)