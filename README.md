# FlightNest: Flight Booking System

FlightNest is a flight booking system implemented using Micro-Service Architecture. It consists of several microservices including Search Service, Booking Service, Authentication Service, Reminder Service, and API Gateway.

### Frontend

- **UI**: The UI is inspired by SkyScanner. Utilized tailwindCSS and ReactJS for building user interface.

![Screenshot (372)](https://github.com/TejasSankhla/FlightNest/assets/96951896/df6375e6-0c64-48a8-8df3-01b70ccb25b5)

### Backend

- **Micro-Service Architecture**: Implemented using 5 microservices:

  - Search Service
  - Booking Service
  - Authentication Service
  - Reminder Service
  - API Gateway


- **RabbitMQ Message Queue Service**: Utilized for sending reminders to users. The Reminder Service interacts with RabbitMQ for reliable message delivery.

- **Sequelize Package**: Utilized npm Sequelize package for interacting with SQL databases, ensuring efficient and reliable data storage and retrieval.

## Installation

To run FlightNest Backend Server locally, follow these steps:

1. Clone the repository:

```
git clone
```

2. Change Directories to install dependencies

```
cd Frontend && npm install

```

Install dependencies for each microservice:

```
cd Backend
cd search-service && npm install
cd ../booking-service && npm install
cd ../authentication-service && npm install
cd ../reminder-service && npm install
cd ../api-gateway && npm install
```

3. Start each microservice:

```
cd search-service && npm start
cd ../booking-service && npm start
cd ../authentication-service && npm start
cd ../reminder-service && npm start
cd ../api-gateway && npm start
```

## Contributing

We welcome contributions to FlightNest! Feel free to open issues or submit pull requests.
