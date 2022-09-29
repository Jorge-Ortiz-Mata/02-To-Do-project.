# To-Do list.

## Docker.

## Tailwind CSS installation.

All the configuration needed to this web aplication was implemented using the Tailwind CSS docs.
In order to install Tailwind CSS in this project, we will need to follow these steps:

1. Install the tailwind css package: `npm install -D tailwindcss`.
2. Stop the container and rebuild the image: `docker compose up --build`
3. Generate the tailwind.config.js file: `npm tailwindcss init`.
4. Add the appropiate configuration as in this project.
5. Create a public folder and a subfolder: **src**.
6. In the src folder, create an **input.css** file and include the tailwind directives.
7. Create the output file: `npx tailwindcss -i ./public/src/input.css -o ./public/dist/output.css --watch`
8. Rebuild the image and launch the container.
9. Open a new terminal and mantain the same command on point 7.
10. Enjoy!

You can visit it by clicking on the next link: https://tailwindcss.com/docs/installation
