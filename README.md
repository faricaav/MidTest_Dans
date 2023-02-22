# MidTest_Dans

### Clone Repo :
```sh
git clone https://github.com/faricaav/MidTest_Dans.git
```

### Backend
```sh
 cd backend
 ```
 1. Install Package
 ```sh
 npm install
 ```
 2. Create DB MySQL
 ```sh
 midtest_dans
 ```
 3. Migrate DB
 ```sh
 sequelize db:migrate
 ```
 4. Start
 ```sh
 npm start
 ```
 
 ---------------------------------------------------------

<b>Dokumentasi API</b>:

<b>API USER</b> <br>
GET ALL : http://localhost:8080/user <br>
GET FIND BY ID : http://localhost:8080/user/{id} (API untuk get profile) <br>
POST : http://localhost:8080/user (API untuk register user) <br>
PUT : http://localhost:8080/user/{id} <br>
DELETE : http://localhost:8080/user/{id} <br>

---------------------------------------------------------

<b>API LOGIN</b> <br>
POST : http://localhost:8080/login <br>

---------------------------------------------------------

<b>API PRODUCT</b> <br>
GET ALL : http://localhost:8080/product <br>
GET FIND BY ID : http://localhost:8080/product/{id} <br>

---------------------------------------------------------

 
### Frontend
```sh
 cd frontend
 ```
1. Install Package
 ```sh
 npm install
 ```
2. Start
 ```sh
 npm start
 ```
 
 <b>Login Page</b>
![Screenshot (314)](https://user-images.githubusercontent.com/100252923/220667481-351b2113-7686-4fc7-ba30-02e2ae60d4c7.png)
<br>
<b>Register Page</b>
![Screenshot (320)](https://user-images.githubusercontent.com/100252923/220668344-21e66c75-b24e-4a59-a09e-3dc8e8c5b22c.png)
<br>
<b>Dashboard</b>
![Screenshot (316)](https://user-images.githubusercontent.com/100252923/220668493-55501bd0-07f0-460f-8cda-988b3fef0e2d.png)
<br>
<b>Product Page</b>
![Screenshot (317)](https://user-images.githubusercontent.com/100252923/220668719-42cc8f93-c094-45c8-8f8a-c9658f98396b.png)
<br>
<b>Detail Product Page</b>
![Screenshot (318)](https://user-images.githubusercontent.com/100252923/220668820-8e0d738d-e330-4375-964e-050f50b19abe.png)
