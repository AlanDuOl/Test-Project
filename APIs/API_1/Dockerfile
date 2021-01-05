#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["API_1/API_1.csproj", "API_1/"]
RUN dotnet restore "API_1/API_1.csproj"
COPY . .
WORKDIR "/src/API_1"
RUN dotnet build "API_1.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "API_1.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "API_1.dll"]
