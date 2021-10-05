# GTM Server Side Tracking Docker Container

This Docker package contains all information to provision a GTM Server Side Tracking Server with Docker.

We hace two types of provisioning the container

## Manually provision a preview server

The preview server enables you to preview the server container. In order to run the preview server, run the Docker image with the following environment variables passed to the Docker environment.

Required settings
`CONTAINER_CONFIG` CONTAINER_CONFIG - The configuration string for the server container. In Tag Manager, navigate to your server container workspace and click on the container ID at the top-right of the page. Click on Manually provision tagging server to find the Container Config value.

`RUN_AS_PREVIEW_SERVER` - Set this to true to provision the server as a preview server.

This two environment variables is set in .env file. In docker compose file there is an option pointed to local.env file with this configuration. Have a look at `local.preview-server.template.env` file.

Here [Official documentation](https://developers.google.com/tag-manager/serverside/manual-setup-guide#manually_provision_a_preview_server)

## Manually provision a server-side tagging cluster

The SST cluster serves as the entry point, proxies preview requests to the preview server, and handles all other requests as described in An introduction to server-side tagging. Use the following required settings with the tagging server Docker image to provision a SST cluster in any environment that supports Docker.

Required settings
`CONTAINER_CONFIG` - The configuration string for the server container. In Tag Manager, navigate to your server container workspace and click on the container ID at the top-right of the page. Click on Manually provision tagging server to find the Container Config value.

`PREVIEW_SERVER_URL` - The HTTPS URL for the preview server. This setting should only be set for provisioning the tagging server and is not needed for provisioning the preview server. See the above section for a guide on setting up the preview server.

This two environment variables is set in .env file. In docker compose file there is an option pointed to local.env file with this configuration. Have a look at `local.server-side-tagging-template.env` file.

Here [Official documentation](https://developers.google.com/tag-manager/serverside/manual-setup-guide#manually_provision_a_server-side_tagging_cluster)

## Use .env file

Depending of your choice of provision type, choose one of another env file template. Rename it to local.env file and fill up environment value.

There is a couple of command in the package.sjon file to up or down the container:

```
yarn docker:up
yarn docker:down
```
