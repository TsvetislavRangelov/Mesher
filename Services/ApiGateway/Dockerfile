FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $gateway_UID
WORKDIR /gateway
EXPOSE 6543

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /gateway
COPY ApiGateway.csproj /gateway
RUN dotnet restore "ApiGateway.csproj"
COPY . .
RUN dotnet build "ApiGateway.csproj" -c $BUILD_CONFIGURATION -o /gateway/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "ApiGateway.csproj" -c $BUILD_CONFIGURATION -o /gateway/publish /p:UseAppHost=false

FROM base AS final
LABEL org.opencontainers.image.source=https://github.com/TsvetislavRangelov/mesher
LABEL org.opencontainers.image.description="Mesher API Gateway"
WORKDIR /gateway
COPY --from=publish /gateway/publish .
ENTRYPOINT ["dotnet", "ApiGateway.dll"]
