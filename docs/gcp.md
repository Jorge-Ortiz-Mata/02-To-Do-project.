# Google Cloud Platform.

These are the steps made in order to host this web application in Google Cloud Run.

## Steps.

1. Create an account on GCP.
2. Go to Cloud Run (you will need to enable some API tools as well as adding a debit card to use them).
3. Create a new service and open a new terminal.
4. Pull the image in the Google Console.
5. Change the name of the image with the next format, for example:
```
docker tag username/image_name:latest gcr.io/project_id/new_image_name
```
6. Push the image to Google Cloud.
7. Select the image in the service registration.
8. Select the port where the container will be export.


## Cloud Run Configuration.

You have to select the docker image with the format **gcr.io** and type the port where your container will be exposed.

![](/images/01-gcp.png)

You will have to allow all the traffic from the World Wide Web. And you will have to select allow permissions without authentication.

![](/images/04-gcp.png)

You can select the container's requests quantity. In this example, it was selected 25.

![](/images/02-gcp.png)

The same quantity was applied in this section (number of instances).

![](/images/03-gcp.png)

After this, click on create button and wait until de container is deployed.
