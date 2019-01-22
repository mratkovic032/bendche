<?php
    namespace App\Controllers;

    use App\Models\CategoryModel;    
    use App\Core\Controller;
    use App\Validators\StringValidator;

    class MainController extends Controller {        
        
        public function home() {
            $categoryModel = new CategoryModel($this->getDatabaseConnection());
            $categories = $categoryModel->getAll();            
            $this->set('categories', $categories);
        }                    
    }