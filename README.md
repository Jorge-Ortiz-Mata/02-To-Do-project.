# To-Do list.

## Docker.

## Google Cloud Platform.

## Mongo DB

All the configuration needed in this web application was reviewed using MongoDB docs.
In order to use Mongo and install it in your project, follow these steps:

1. Install the node packages: `npm install mongoose mongodb`.
2. Require the mongoose package in your index.js file.
3. In order to connect with the database on the docker container: `docker exec -it mongo-container mongosh`.
3. Connect to the database by using this line (development enviroment):
  ```
    mongoose.connect("mongodb://localhost:27017/toDoList", { useNewUrlParser: true });
  ```
4. Create the Schema for your DB.
5. Create the model that will communicate with the Schema.
6. Implement your Querys and enjoy!

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
* Software engineer.
