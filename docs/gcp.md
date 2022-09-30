# Google Cloud Platform.

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
