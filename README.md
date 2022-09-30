# To-Do Project.

The To-Do Project was built using different technologies such as Node, EJS and MongoDB.
Besides, the To-Do app was deployed to different cloud services: **Google Cloud Platform** and **Microsoft Azure** through docker containers.

![](/images/ToDo-App.png)

You can visit the website and add more items to the app. All of these objects will be saved in MongoDB.

This web application was developed by following these steps:

1. Create a Dockerfile and the docker-compose.yml in your localhost.
2. Launch the containers needed (Mongo and Node).
3. Once the app is finished, commit the changes and create the Repo on Docker Hub.
4. Push the image to Docker Hub.
5. Use any service you want to keep your app online.
6. Test it and Enjoy!

## Index.

1. [Docker.](#docker)
2. [Microsoft Azure.](#microsoft-azure)
3. [Google Cloud Platform.](#google-cloud-platform)
4. [Mongo DB.](#mongo-db)
5. [Tailwind CSS.](#tailwind-css-installation)
6. [Author.](#author)

## Docker.

You can find the images in the Docker Hub with the latest version.
In order to pull the Docker image, go to the next link:

https://hub.docker.com/repository/docker/jorge107/02-to-do-list

- [Docker docs.](./docs/docker.md)
## Microsoft Azure.

I've used Microsoft Azure to deploy the To Do App with the container.
You can visit the website by clicking on the next link:

https://to-do-node-container-app.redisland-2bf328e9.centralus.azurecontainerapps.io/

You can see all the steps needed to upload this web application on GCP clicking on the next link.
- [Microsoft Azure docs.](./docs/azure.md)
## Google Cloud Platform.

I've used Google Cloud Platform to deploy the To Do App with the container.
You can visit the website by clicking on the next link:

https://to-do-node-app-02-xzoakglu6a-uc.a.run.app/

You can see all the steps needed to upload this web application on GCP clicking on the next link.
- [Google Cloud Platform docs.](./docs/gcp.md)
## Mongo DB

All the configuration needed in this web application was reviewed using MongoDB docs.
In order to use Mongo and install it in your project, follow these steps:

1. Install the node packages: `npm install mongoose mongodb`.
2. Require the mongoose package in your index.js file.
3. Connect to the database by using this line (development enviroment):
  ```
  mongoose.connect('mongodb://mongo_service_name:27017/toDoProjectDB', { useNewUrlParser: true });
  ```
4. Create the Schema for your DB.
5. Create the model that will communicate with the Schema.
6. In order to connect with the database on the docker container: `docker exec -it mongo-container mongosh`.
7. Implement your Querys and enjoy!

You can click on the next link to see the Cluster Mongo configuration to allow any post from any URL.
-[Mongo docs.](./docs/mongo.md)

## Tailwind CSS installation.

All the configuration needed in this web aplication was implemented using the Tailwind CSS docs.
In order to install Tailwind CSS in this project, we will need to follow these steps:

1. Install the tailwind css package: `npm install -D tailwindcss`.
2. Stop the container and rebuild the image: `docker compose up --build`
3. Generate the tailwind.config.js file: `npm tailwindcss init`.
4. Add the appropiate configuration as in this project.
5. Create a public folder and a subfolder: **src**.
6. In the src folder, create an **input.css** file and include the tailwind directives.
7. Create the output file: `npx tailwindcss -i ./public/src/input.css -o ./public/dist/output.css --watch`
8. Add the link in your ejs file to call the css file.
9. Rebuild the image and launch the container.
10. Open a new terminal and mantain the same command on point 7.
11. Enjoy!

You can visit it by clicking on the next link: https://tailwindcss.com/docs/installation

## Author.

* Jorge Ortiz.
* Software engineer, udemy instructor and entrepreneur.
* jorge.ortiz107@outlook.com
