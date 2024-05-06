# Mesher

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89044ded98aa448ab76b17f90f812f6d)](https://app.codacy.com/gh/TsvetislavRangelov/mesher?utm_source=github.com&utm_medium=referral&utm_content=TsvetislavRangelov/mesher&utm_campaign=Badge_Grade)

Mesher is a service used to procedurally generate 3D models, which can be used as game level assets in Unreal Engine or Unity.

## Build
Mesher is implemented via a microservice architecture. The design is native to Kubernetes and a k8s cluster is required in order to deploy the services.

The web client is static and can be built independently of the backend services.
```bash
# clone the repo
git clone https://github.com/TsvetislavRangelov/mesher

# cd into the directory.
cd Mesher

# build and run the client (either with dev or prod configuration).
npm run dev # development
npm run production # production

# Deploy to a kubernetes cluster of your choosing (example uses docker-desktop kubernetes).
kubectl config use-context docker-desktop
cd /deploy/local
./deploy-local-kubectl.sh
```
The script that is executed will deploy and expose an Envoy API Gateway, with the external IP being the loopback address. Afterwards, it will deploy all the microservices present in the `/Services` folder. 

## Structure
This is the monorepo for Mesher. It contains all services related to mesher, both client and server. The client-side can be found under `mesher-client` and the backend services can be found under `Services`. The server-side is written in .NET 8.0 and the client is made with React TypeScript.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

.Please make sure to update tests as appropriate.

## License

To be updated.
