FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY nuget.config .
COPY DrinZ.Domain/DrinZ.Domain.csproj DrinZ.Domain/
COPY DrinZ.Application/DrinZ.Application.csproj DrinZ.Application/
COPY DrinZ.Infrastructure/DrinZ.Infrastructure.csproj DrinZ.Infrastructure/
COPY DrinZ.API/DrinZ.API.csproj DrinZ.API/

RUN dotnet restore DrinZ.API/DrinZ.API.csproj

COPY . .
RUN dotnet publish DrinZ.API/DrinZ.API.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "DrinZ.API.dll"]
