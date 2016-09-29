"use strict";
var Product = (function () {
    function Product(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Review = (function () {
    function Review(id, productId, timestamp, user, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return products.map(function (p) { return new Product(p.id, p.title, p.price, p.rating, p.description, p.categories); });
    };
    ProductService.prototype.getProductById = function (productId) {
        return products.find(function (p) { return p.id === productId; });
    };
    ProductService.prototype.getReviewsForProduct = function (productId) {
        return reviews
            .filter(function (r) { return r.productId === productId; })
            .map(function (r) { return new Review(r.id, r.productId, Date.parse(r.timestamp), r.user, r.rating, r.comment); });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var products = [
    {
        "id": 0,
        "title": "First Product",
        "price": 24.99,
        "rating": 4.3,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Second Product",
        "price": 64.99,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    },
    {
        "id": 2,
        "title": "Third Product",
        "price": 74.99,
        "rating": 4.2,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics"]
    },
    {
        "id": 3,
        "title": "Fourth Product",
        "price": 84.99,
        "rating": 3.9,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["hardware"]
    },
    {
        "id": 4,
        "title": "Fifth Product",
        "price": 94.99,
        "rating": 5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 5,
        "title": "Sixth Product",
        "price": 54.99,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }
];
var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent..." },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
    }];
//# sourceMappingURL=product.service.js.map