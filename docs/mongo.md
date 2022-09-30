# Mongo DB.

This section covers all the configuration needed to communicate with MongoDB servers and store the data online.

## Steps.

1. Create a free account on [MongoDB.](https://www.mongodb.com/)
2. Create a new project on Mongo DB and members(if there's someone else working).
3. Deploy a new database for free and create your cluster.
4. Add users who have access to read/write on this DB.
5. You can add your own IP address to give access to your computer.
6. In **Network settings** click on the edit button and add access from any other devices.
7. Go to Database and click on **connect** and select the option: **connect from your application**. Select Node and copy the short link.
8. Paste it in your Node App.
9. Add the username and password to start saving objects in the DB and enjoy!

## Mongo Configuration.

Create a new project on Mongo.

![](/images/01-mongo.png)

Add access to other users. Click on create.

![](/images/02-mongo.png)

Choose a free plan in MongoDB.

![](/images/03-mongo.png)

Select the service that you want and region.

![](/images/04-mongo.png)

Set a name to your cluster.

![](/images/05-mongo.png)

Add a username and password for the users will have access to write and read the objects in this DB.

![](/images/06-mongo.png)

You can your IP address to give your computer access to this DB.

![](/images/07-mongo.png)

Select **Allow access from anywhere** to allow your docker container access to this DB from any place.

![](/images/08-mongo.png)

Copy the link and paste it in your web application.

![](/images/09-mongo.png)
