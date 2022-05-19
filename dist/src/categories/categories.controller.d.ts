import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
export declare class CategoriesController {
    private categoryService;
    constructor(categoryService: CategoriesService);
    addCategory(createCategoryDTO: CreateCategoryDTO): Promise<void>;
}
