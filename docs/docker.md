# Docker.

This web application was developed using Docker and Docker Compose and the images was uploaded to a public repository.
You can access it by click on the next link:

https://to-do-node-container-app.redisland-2bf328e9.centralus.azurecontainerapps.io/


## Steps.

1. Finish your web application using Docker and be sure that is working locally.
2. Create an account on [Docker Hub.](https://hub.docker.com/)
3. Create a public repository with a name.
4. On your local machine, inspect the image's name you were using for your appliction.
5. Change the name with the exact name in your Docker repository you created. For example:
```
docker tag my-app-image:latest docker_username/repository_name:latest
```
6. Log in from your local bash: `docker login`.
7. Push the image to the Docker repository: `docker push docker_username/repository_name:latest`.
8. Refresh the page and enjoy.

## Docker Configuration.

This is an example of how your repository could be name:

![](/images/01-node.png)

The repository name must have the same name as the image that you want to push.
