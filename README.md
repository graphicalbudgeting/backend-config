2022/11/14 Under maintenance for next update!

# How to set up the Graphical Budgeting Backend

Graphical Budgeting supports MongoDB Cloud as a backend.
To get started, you need to create a backend Realm app in your MongoDB Cloud with App Configuration for Graphical Budgeting.

As the deployment method, you can choose Automatic GitHub Deployment or Realm CLI.

Whichever method you choose, you'll need a MongoDB Atlas account first. Then, create a cluster in MongoDB Atlas and a Realm App that links to the cluster.

## Create an Atlas account

Create your Atlas Account. After logging in, create an Atlas Organization and then create a Project.

<https://docs.atlas.mongodb.com/tutorial/create-atlas-account/>


## Create an Atlas Cluster

Create your Atlas Cluster for your Graphical Budgeting Realm App.

<https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/>

<https://docs.atlas.mongodb.com/tutorial/create-new-cluster/>

:information_source: Do not select the serverless instance for database deployment type, as it is a preview release and has not 
been tested in Graphical Budgeting.

## Take the necessary actions for each deployment method you have chosen.

:large_blue_circle: [Automatic GitHub Deployment](https://github.com/graphicalbudgeting/backend-config/wiki/Set-up-the-Graphical-Budgeting-Backend-with-GitHub)

:large_blue_circle: [Realm CLI](https://github.com/graphicalbudgeting/backend-config/wiki/Set-up-the-Graphical-Budgeting-Backend-with-Realm-CLI)
