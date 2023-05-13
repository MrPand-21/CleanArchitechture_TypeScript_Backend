<div align="center">

# Clean Architecture Backend Example

[![Contributors](https://img.shields.io/github/contributors/MrPand-21/CleanArchitechture_TypeScript_Backend.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/MrPand-21/CleanArchitechture_TypeScript_Backend.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/network/members)
[![Stars](https://img.shields.io/github/stars/MrPand-21/CleanArchitechture_TypeScript_Backend.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/stars)

 <p align="center">
    <a href="#about">About</a> •
    <a href="#key-features">Key Feaures</a> •
    <a href="#installation">Installation</a> •
    <a href="#learn-more">Learn More</a> •
    <a href="#contributing">Contribute</a> •
    <a href="https://github.com/MrPand-21/HRMS_Frontend/issues">Report Bug</a> •
    <a href="https://github.com/MrPand-21/HRMS_Frontend/issues">Request Feature</a>
  </p>

## About

  [![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

 
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-FF6E4F?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)

[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Clean Architecture](https://img.shields.io/badge/Clean%20Architecture-7795FF?style=for-the-badge)](https://en.wikipedia.org/wiki/Clean_Architecture)
[![Environment Files](https://img.shields.io/badge/Environment%20Files-999999?style=for-the-badge)](https://en.wikipedia.org/wiki/Environment_variable)


Welcome, good sir or madam, to the esteemed Backend Repository! Herein lies a backend project, meticulously crafted in the wondrous realm of **NestJS**, making skillful use of the noble **TypeScript**, as well as the mighty tools of **MySQL** and **TypeORM**. This project faithfully adheres to the principles of **Clean Architecture**, guiding its structure with wisdom and foresight.

Behold, it boasts the power of **JWT authentication** with role-based authorization, ensuring the safeguarding of realms. Furthermore, it graciously accommodates multiple environment files for both the grand spectacle of production and the humble stages of development.

The noble objective of this endeavor is to serve as a robust foundation for the creation of backend applications, placing great emphasis on modularity, extensibility, and scalability. By harnessing the remarkable features of NestJS and TypeScript, along with the virtues of Clean Architecture, this project presents a reliable and flexible solution for building enterprise-grade backend systems.
</div>

## Key Features
- **NestJS**: Built on top of the popular Node.js framework, NestJS provides a robust and efficient foundation for developing scalable server-side applications.
- **TypeScript**: Leveraging the benefits of static typing, TypeScript enhances code readability, catch potential errors early, and enables better tooling and refactoring capabilities.
- **MySQL**: The project utilizes MySQL as the database system, ensuring reliable and efficient data storage and retrieval.
- **TypeORM**: With the help of TypeORM, a powerful and flexible Object-Relational Mapping (ORM) library, working with the database becomes effortless, providing a seamless experience for managing database operations.
- **Clean Architecture**: Following the principles of Clean Architecture, this project ensures separation of concerns, loose coupling, and a focus on testability, making it easier to understand, maintain, and extend the codebase.
- **JWT Authentication**: The project incorporates JWT-based authentication, providing a secure and stateless mechanism for user authentication and authorization.
- **Multiple Environment Files**: To cater to different environments, such as production and development, the project supports multiple environment files, enabling easy configuration and customization.

## Installation
To use this project, follow these steps:

1. Clone the repository from [here](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/tree/main).
2. Install Dependencies: Navigate to the project directory and install the required dependencies using your preferred package manager. Run the following command:
```bash
npm install
# or
yarn install
```
3.Configure Environment Variables: The project requires environment variables for configuration. Create the necessary .env files for different environments (e.g., .env.production and .env.development). These files should contain the specific configuration values for each environment.

4. Configure Database: Set up a MySQL database and update the database configuration in the .env file with the appropriate credentials.

5. Run the Project: Once the dependencies and environment variables are set up, you can start the project using the available scripts:

 - Build: Builds the project and stores it into the dist directory. Run the following command:
```bash
npm run build
```
 - Start:local: Starts the local version of the project. Run the following command
```bash
npm run start:local
```
- Start:dev: Starts the development version of the project with hot reload. It uses the nest.sh script, which terminates if the port is already in use. Run the following command:
```bash
npm run start:dev
```

Note: The start:dev script runs the nest.sh script, which terminates if the specified port is already in use.

That's it! After completing these steps, you will have the project set up and running on your local machine. You can now explore its features and functionalities.

## Learn More

To dive deeper into the concepts and technologies used in this project, refer to the following resources:

[NestJS Official Documentation](https://docs.nestjs.com/) - Explore the official documentation of NestJS to gain a comprehensive understanding of the framework's features, modules, and best practices.

[TypeScript Handbook](https://www.typescriptlang.org/docs/) - Visit the official TypeScript handbook to learn more about the language's syntax, types, and advanced features.

[MySQL Documentation](https://dev.mysql.com/doc/) - Refer to the MySQL documentation for detailed information on setting up and working with MySQL databases.

[TypeORM Documentation](https://typeorm.io/#/) - Explore the official TypeORM documentation to learn how to use the library for database integration, migrations, and querying.

[Clean Architecture Principles](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Read Uncle Bob's blog post on Clean Architecture to understand the principles and benefits of building applications with a clean and modular architecture.

[JSON Web Tokens (JWT)](https://jwt.io/introduction/) - Learn more about JSON Web Tokens and how they are used for authentication and authorization in web applications.

Feel free to explore these resources to enhance your knowledge and skills in developing backend applications using NestJS, TypeScript, MySQL, TypeORM, and Clean Architecture.

<h2>Contributing</h2>

<p>Contributions are welcome and greatly appreciated! To contribute to this project, please follow these guidelines:</p>

<ol>
  <li>Fork the repository on GitHub.</li>
  <li>Create a new branch from the <code>main</code> branch for your contribution.</li>
  <li>Make your changes and ensure they follow the coding style and best practices used in the project.</li>
  <li>Write appropriate tests to validate your changes.</li>
  <li>Commit your changes with descriptive commit messages.</li>
  <li>Push your branch to your forked repository.</li>
  <li>Submit a pull request to the <code>main</code> branch of the original repository.</li>
  <li>Your pull request will be reviewed, and any necessary feedback or changes will be communicated.</li>
  <li>Once your pull request is approved, it will be merged into the <code>main</code> branch.</li>
  <li>Congratulations! You have successfully contributed to the project.</li>
</ol>

[![Contributors](https://img.shields.io/github/contributors/MrPand-21/HRMS_Frontend.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/graphs/contributors)

<h3>Opening an Issue</h3>

<p>If you encounter any issues or have suggestions for improvements, you can open an issue on the GitHub repository. When opening an issue, please provide detailed information about the problem or feature request, including steps to reproduce the issue if applicable.</p>

[![Opening an Issue](https://img.shields.io/badge/Open%20an%20Issue-Create-red.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/issues/new)

<h3>Reporting a Bug</h3>

<p>To report a bug, follow these steps:</p>

<ol>
  <li>Go to the GitHub repository's "Issues" tab.</li>
  <li>Click on the "New Issue" button.</li>
  <li>Provide a descriptive title and a clear description of the bug.</li>
  <li>Include steps to reproduce the bug if possible.</li>
  <li>Add any relevant code snippets, screenshots, or error messages.</li>
  <li>Submit the issue, and it will be reviewed by the project maintainers.</li>
</ol>

[![Reporting a Bug](https://img.shields.io/badge/Report%20a%20Bug-Submit-orange.svg?style=for-the-badge)](https://github.com/MrPand-21/CleanArchitechture_TypeScript_Backend/issues/new?labels=bug)

<p>Feel free to contribute, open issues, or report bugs. Your contributions will help improve the project and make it more robust and reliable.</p>

### Acknowledgements

This repository is derived from the exemplary work of Pavel Varentsov, found at https://github.com/pvarentsov/typescript-clean-architecture. In the pursuit of academic rigor, I have undertaken the task of reorganizing and streamlining the aforementioned work, eliminating overdesigns and overabstractions, while introducing novel features and refining outdated or suboptimal components, such as the implementation of hot-reload functionality. It is important to note that despite its foundational origins in Pavel Varentsov's work, this rendition stands as a distinct entity, diverging significantly in its composition and character.
