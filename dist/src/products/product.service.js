"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("./product.schema");
const categories_service_1 = require("../categories/categories.service");
let ProductService = class ProductService {
    constructor(productModel, categoriesService) {
        this.productModel = productModel;
        this.categoriesService = categoriesService;
    }
    async addProduct(createProducDTO) {
        const newProduct = await this.productModel.create(createProducDTO);
        return newProduct;
    }
    async getProduct(query) {
        const product = await this.productModel.findOne(query);
        console.log('Get product ', query);
        return product;
    }
    async getProductHierarchyDiscount(product) {
        const { discount, categoryReference } = product;
        if (discount > 0)
            return discount;
        const categoryDiscount = await this.categoriesService.getRecursiveCategoryDiscount(categoryReference);
        return categoryDiscount;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        categories_service_1.CategoriesService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map