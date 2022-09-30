# Microsoft Azure.

These are the steps made in order to host this web application in Microsoft Azure.

## Steps.

1. Create an account on Microsoft Azure: https://azure.microsoft.com/
2. Go to the dashboard and in the search bar, look for **Container Apps** and create a new one.
3. You will have to create a service and the container's enviroment.
4. If you want, you can give a name to analytics enviroment.
5. Select the image from Docker Hub and click on Create.
6. Click on **Go to resources** and click on **Overview**.
7. You will see the URL for your web application.
8. Test it and enjoy!

## Microsoft Azure Configuration.

If you haven't created a service, you can create it or select one. You have to select the enviroment for your container apps.

![](/images/01-azure.png)

Unselect the **Use quickstart Image**, select **Docker Hub or other registries** and add the name of your image. This example is for public Docker repositories.

![](/images/02-azure.png)

Allow the access. In order to use your application from any other device, you have to choose **Accepting traffic anywhere**.

![](/images/03-azure.png)

After that, click on Create button to lunch your application and have it online.
