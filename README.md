**UnoUni**

This project is a simple yet comprehensive WebApp designed to showcase information about universities in Pakistan. It utilizes the MERN stack (MongoDB, Express, React, Node.js) for seamless integration and efficient data management.

### Features:
- Displays fee structures and available fields of study for each university
- Modular design for easy scalability and future expansions
- RESTful API for smooth communication with the MongoDB database
- Responsive frontend powered by React

### Technologies Used:
- MongoDB
- Express.js
- React.js
- Node.js

### Installation:
1. Clone the repository:
```
git clone https://github.com/redsteadz/UnoUni.git
```
2. Install dependencies in `Front/` & `Back/`:
```
cd UnoUni
npm install
```

4. Add an API Link from [How to get a connection string](https://docs.mongodb.com/manual/reference/connection-string/):

Make a `Back/.env` file with the following content:

```
MONGO_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test"
```

3. Start the server from `Back/`:
```
npm start
```
4. Start the client from `Front/`:
```
npm start
```

5. Navigate to `http://localhost:5173/` in your browser

### Contributing:
Contributions are welcome! Feel free to fork the repository and submit pull requests for any improvements or additional features.

### License:
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
