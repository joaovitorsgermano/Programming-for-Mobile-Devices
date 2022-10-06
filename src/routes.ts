import { Router } from "express";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { ListUsersController } from "./controllers/User/ListUsersController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";

import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController";
import { ListCategoriesController } from "./controllers/Category/ListCategoriesController";
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController";

import { CreateProductController } from "./controllers/Product/CreateProductController";
import { DeleteProductController } from "./controllers/Product/DeleteProductController";
import { ListProductsController } from "./controllers/Product/ListProductController";
import { UpdateProductController } from "./controllers/Product/UpdateProductController";


import {AuthenticateUserController} from "./controllers/User/AuthenticateUserController";

import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";

const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const deleteUserController  = new DeleteUserController();
const updateUserController  = new UpdateUserController();

const createCategoryController  = new CreateCategoryController();
const listCategoriesController  = new ListCategoriesController();
const deleteCategoryController  = new DeleteCategoryController();
const updateCategoryController  = new UpdateCategoryController();

const createProductController  = new CreateProductController();
const listProductsController   = new ListProductsController();
const deleteProductController  = new DeleteProductController();
const updateProductController  = new UpdateProductController();

const autenticationUserController  = new AuthenticateUserController();


const router = Router();

router.post("/users", createUserController.handle);
router.post("/login", autenticationUserController.handle);


router.use(ensureAuthenticated)
router.put("/users", updateUserController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.get("/users", listUsersController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoriesController.handle);
router.delete("/categories", deleteCategoryController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductsController.handle);


export {router}