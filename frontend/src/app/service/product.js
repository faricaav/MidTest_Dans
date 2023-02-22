import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});

const getAll = () => {
    return http.get("/product");
};

const get = id => {
    return http.get(`/product/${id}`);
};

const ProductService = {
    getAll,
    get
};

export default ProductService;