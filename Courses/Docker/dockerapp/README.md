# Docker images

**Description:** Practice of build and run docker image

Own dockerapp based on:
<a href="https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/">Dockerizing a Node.js web app</a>

Build docker image it's necessary run the next command:

```poweshell
docker build -t <USERNAME>/<DOCKER-IMAGE-NAME>:<VERSION> .
```

Watch the layers of docker image run the next command:

```powershell
docker history <USERNAME>/<DOCKER-IMAGE-NAME>:<VERSION>
```

Execute image in container run the next command:

```powershell
docker run -p <HOST-PORT>:<CONTAINER-EXPOSED-PORT> -d <USERNAME>/<DOCKER-IMAGE-NAME>:<VERSION>
```

Change image tag/version if neccesary:

```powershell
docker tag <IMAGE ID> <USER NAME>/<IMAGE NAME>:<VERSION>
```

Update image to docker-hub to share the image or deploy in production:

```powershell
docker login --username=<USER NAME>
docker push <REPOSITORY>:<TAG>
```

## Aux commands

List all images:

```poweshell
docker images -a
```

Remove a image:

```powershell
docker rmi -f <IMAGE ID>
```

Remove all images:

```powershell
docker rmi $(docker images -a -q)
```

List all containers:

```powershell
docker ps -a
```

Execute a linux container:

```powershell
docker exect -it <CONTAINER ID> bin/bash
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