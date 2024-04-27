# Mesher
Mesher is a service used to procedurally generate 3D models, which can be used as game level assets in Unreal Engine or Unity.

## Build
Mesher is completely containerized using [Docker](https://www.docker.com/).
```bash
# clone the repo
git clone https://github.com/TsvetislavRangelov/mesher

# cd into the directory.
cd Mesher

# Execute the build script (Linux).
./build.sh
```
This will call docker compose by passing in the `build.yaml` file. It will build all services that are defined there. 

## Structure
This is the monorepo for Mesher. It contains all services related to mesher, both client and server. The client-side can be found under `mesher-client` and the backend services can be found under `Services`. The server-side is written in .NET 8.0 and the client is made with React TypeScript.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

.Please make sure to update tests as appropriate.

## License

To be updated.
