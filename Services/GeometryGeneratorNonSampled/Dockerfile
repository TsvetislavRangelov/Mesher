FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
COPY . /source
WORKDIR /source
ARG TARGETARCH

RUN --mount=type=cache,id=nuget,target=/root/.nuget/packages \
    dotnet publish -a ${TARGETARCH/amd64/x64} --use-current-runtime --self-contained false -o /out \
    
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS final
WORKDIR /out

COPY --from=build /out .
USER $APP_UID

ENTRYPOINT ["dotnet", "GeometryGeneratorNonSampled.dll"]
