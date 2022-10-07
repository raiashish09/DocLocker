# DocLocker
Doc Locker is a web application for storing Documents and user can download and share the docs.
It provides a service to access authorize user to his documents in digital format which eliminates the use of physical documents which was uploaded by user. It provides storage space to registered users . First user needs to registered himself/herself. Registered user can create folder and upload any type of documents in it.User can share his uploaded documents through QR code/link.The person who accessing the QR code/link can see or download the documents.This service eliminates the use of physical documents and user can carry his documents easily.

Used Technologies:
Backend: Spring Boot,JPA/Hibernate,MySQL,thymleaf.

Frontend: HTML,CSS,Bootsrap,React.JS,JavaScript

Other:Github,StarUML,draw.io

Installation
-Clone project using link in git -https://github.com/raiashish09/DocLocker.git

Make new Environment to run the project. ** Frontend will be manage in vscode Tool.

create new React project. npx create-react-app myapp
install node modules use below command npm install
copy the files from respective folder from clone folder to new environment project folders.
install the required dependancies as follows. "@emotion/react": "^11.10.4", "@mui/icons-material": "^5.10.3", "@testing-library/jest-dom": "^5.16.5", "@testing-library/react": "^13.4.0", "@testing-library/user-event": "^13.5.0", "axios": "^0.27.2", "react": "^18.2.0", "react-bootstrap": "^2.5.0", "react-dom": "^18.2.0", "react-router-dom": "^6.3.0", "react-scripts": "5.0.1", "web-vitals": "^2.1.4"
Go to terminal and run the project on 3000 port use below commands

cd myapp
npm start
@Home page will be shown when run on port 3000.

** Backend will be manage in SpringBoot Tool -Below Dependencies used in Spring Boot:

mysql-connector-java Spring Boot DevTools Spring Configuration Processor spring-boot-starter-data-jpa hibernate-jpa-2.0-api spring-boot-starter-web spring-boot-starter-thymeleaf com.google.zxing

create new Spring Project else directly open the cloned backend project in spring boot by importing it to the environment.

update the project

go to "src/main/resources/application.properties" do the respective changes as per your database. eg:- username password make connection to database .

run the project as java application

while uploading document fire below command in mysql

alter table doc_info_tbl modify column content mediumblob

Web Application is ready to use on your machine.
