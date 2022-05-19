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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../products/product.service");
const get_product_discount_dto_1 = require("./dto/get-product-discount.dto");
const user_guard_1 = require("../authentication/user.guard");
let PaymentsController = class PaymentsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProductDiscount(getProductDiscountDTO) {
        const { productCode } = getProductDiscountDTO;
        const product = await this.productsService.getProduct({
            code: productCode,
        });
        const productDiscount = await this.productsService.getProductHierarchyDiscount(product);
        return productDiscount;
    }
};
__decorate([
    (0, common_1.Get)('product-discount'),
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_discount_dto_1.GetProductDiscountDTO]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "getProductDiscount", null);
PaymentsController = __decorate([
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], PaymentsController);
exports.PaymentsController = PaymentsController;
//# sourceMappingURL=payments.controller.js.map