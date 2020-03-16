webpackJsonp([2],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExerciseImagesPage = (function () {
    function ExerciseImagesPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.type = this.navParams.get('type');
        this.init();
    }
    ExerciseImagesPage.prototype.init = function () {
        this.correct = false;
        this.incorrect = false;
        this.question = this.dataProvider.generateQuestion(this.type);
    };
    ExerciseImagesPage.prototype.isCorrect = function (position) {
        if (this.question.options[position].value === this.question.result) {
            this.correct = true;
            this.incorrect = false;
            for (var _i = 0, _a = this.question.options; _i < _a.length; _i++) {
                var optionIncorrect = _a[_i];
                optionIncorrect.visible = false;
            }
        }
        else {
            this.question.options[position].visible = false;
            this.correct = false;
            this.incorrect = true;
        }
    };
    ExerciseImagesPage.prototype.getUrlImage = function (position) {
        return "url('assets/imgs/" + this.type + "/" + this.question.options[position].value + ".jpeg')";
    };
    ExerciseImagesPage.prototype.disableOption = function (position) {
        return !this.question.options[position].visible ? true : false;
    };
    ExerciseImagesPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciseImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise-images',template:/*ion-inline-start:"C:\git\memory-ionic\src\pages\exercise-images\exercise-images.html"*/'<ion-content padding>\n\n  <div ion-fixed>\n\n    <button ion-button id="back" (click)="back()">{{ \'MENU\' | translate }}</button>\n\n    <h1 *ngIf="!correct">{{ \'TOUCH\' | translate }} {{ question.question | translate }}</h1>\n\n    <h1 *ngIf="correct">{{ \'CONGRATS MESSAGE\' | translate }}</h1>\n\n    <ion-row *ngIf="!correct">\n\n      <ion-col class="leftOption">\n\n        <button ion-button [style.background-image]="getUrlImage(0)" (press)="isCorrect(0)" (click)="isCorrect(0)" [disabled]="disableOption(0)"></button>\n\n      </ion-col>\n\n      <ion-col class="rightOption">\n\n        <button ion-button [style.background-image]="getUrlImage(1)" (press)="isCorrect(1)" (click)="isCorrect(1)" [disabled]="disableOption(1)"></button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="!correct">\n\n      <ion-col class="leftOption">\n\n        <button ion-button [style.background-image]="getUrlImage(2)" (press)="isCorrect(2)" (click)="isCorrect(2)" [disabled]="disableOption(2)"></button>\n\n      </ion-col>\n\n      <ion-col class="rightOption">\n\n        <button ion-button [style.background-image]="getUrlImage(3)" (press)="isCorrect(3)" (click)="isCorrect(3)" [disabled]="disableOption(3)"></button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="correct" class="feedbackOptionCorrect">\n\n      <img src="assets/imgs/{{type}}/{{question.result}}.jpeg" />\n\n    </ion-row>\n\n    <ion-row *ngIf="incorrect" class="feedbackError">\n\n      <ion-col> {{ \'FEEDBACK ERROR\' | translate }} </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <div>\n\n    <button *ngIf="correct" ion-button class="newExercise" (click)="init()">Seguir</button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\git\memory-ionic\src\pages\exercise-images\exercise-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ExerciseImagesPage);
    return ExerciseImagesPage;
}());

//# sourceMappingURL=exercise-images.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExerciseTextPage = (function () {
    function ExerciseTextPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.type = this.navParams.get('type');
        this.init();
    }
    ExerciseTextPage.prototype.init = function () {
        this.correct = false;
        this.incorrect = false;
        switch (this.type) {
            case this.dataProvider.TYPE.MATHS:
                this.question = this.dataProvider.generateMathQuestion();
                break;
            default:
                break;
        }
    };
    ExerciseTextPage.prototype.isCorrect = function (position) {
        if (this.question.options[position].value === this.question.result) {
            this.correct = true;
            this.incorrect = false;
            for (var _i = 0, _a = this.question.options; _i < _a.length; _i++) {
                var optionIncorrect = _a[_i];
                optionIncorrect.visible = false;
            }
        }
        else {
            this.question.options[position].visible = false;
            this.correct = false;
            this.incorrect = true;
        }
    };
    ExerciseTextPage.prototype.disableOption = function (position) {
        return !this.question.options[position].visible ? true : false;
    };
    ExerciseTextPage.prototype.getOption = function (position) {
        return this.question.options[position].value;
    };
    ExerciseTextPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciseTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise-text',template:/*ion-inline-start:"C:\git\memory-ionic\src\pages\exercise-text\exercise-text.html"*/'<ion-content padding>\n  <div ion-fixed>\n      <button ion-button id="back" (click)="back()">{{ \'RETURN TO MENU\' | translate }}</button>\n    <h1 *ngIf="!correct"> {{ \'MATH QUESTION\' | translate }} {{ question.question }}</h1>\n    <h1 *ngIf="correct">{{ \'CONGRATS MESSAGE\' | translate }}</h1>\n    <ion-row *ngIf="!correct">\n      <ion-col class="leftOption">\n        <button ion-button (press)="isCorrect(0)" (click)="isCorrect(0)" [disabled]="disableOption(0)">{{ getOption(0) }}</button>\n      </ion-col>\n      <ion-col class="rightOption">\n        <button ion-button (press)="isCorrect(1)" (click)="isCorrect(1)" [disabled]="disableOption(1)">{{ getOption(1) }}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!correct">\n      <ion-col class="leftOption">\n        <button ion-button (press)="isCorrect(2)" (click)="isCorrect(2)" [disabled]="disableOption(2)">{{ getOption(2) }}</button>\n      </ion-col>\n      <ion-col class="rightOption">\n        <button ion-button (press)="isCorrect(3)" (click)="isCorrect(3)" [disabled]="disableOption(3)">{{ getOption(3) }}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="correct" class="feedbackOptionCorrect">\n      <div>{{ question.result }}</div>\n    </ion-row>\n    <ion-row *ngIf="incorrect" class="feedbackError">\n      <ion-col> {{ \'FEEDBACK ERROR\' | translate }} </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div>\n    <button *ngIf="correct" ion-button class="newExercise" (click)="init()">Seguir</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\git\memory-ionic\src\pages\exercise-text\exercise-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ExerciseTextPage);
    return ExerciseTextPage;
}());

//# sourceMappingURL=exercise-text.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/exercise-images/exercise-images.module": [
		412,
		1
	],
	"../pages/exercise-text/exercise-text.module": [
		413,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_exercise_text_exercise_text__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_exercise_images_exercise_images__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_exercise_images_exercise_images__["a" /* ExerciseImagesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_exercise_text_exercise_text__["a" /* ExerciseTextPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/exercise-images/exercise-images.module#ExerciseImagesPageModule', name: 'ExerciseImagesPage', segment: 'exercise-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercise-text/exercise-text.module#ExerciseTextPageModule', name: 'ExerciseTextPage', segment: 'exercise-text', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_exercise_images_exercise_images__["a" /* ExerciseImagesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_exercise_text_exercise_text__["a" /* ExerciseTextPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseQuestion; });
var ExerciseQuestion = (function () {
    function ExerciseQuestion(question, options, result) {
        this.question = question;
        this.options = options;
        this.result = result;
    }
    return ExerciseQuestion;
}());

//# sourceMappingURL=ExerciseQuestion.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = {"animals":["CAT","COW","DOG","DOLPHIN","ELEPHANT","FISH","FROG","GIRAFFE","GORILLA","HORSE","LION","MONKEY","PARROT","RABBIT","SNAKE","SPIDER","TIGER","TORTOISE"]}

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = {"colours":["BLACK","BLUE","BROWN","GRAY","GREEN","ORANGE","PINK","PURPLE","RED","YELLOW"]}

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = {"food":["BREAD","BURGER","CHEESE","CORN","CROISSANT","EGGS","HAM","MACARONI","MEAT","NOODLES","PIZZA","POTATOES","RICE","SAUSAGE","SOUP","SPAGHETTI"]}

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = {"fruits":["APPLE","AVOCADO","BANANA","BLACKBERRY","BLUEBERRY","BROCCOLI","CARROT","CAULIFLOWER","CHERRY","COCONUT","CUCUMBER","GARLIC","GRAPE","KIWI","LEMON","ONION","ORANGE FRUIT","PEACH","PEAR","PEPPER","PINEAPPLE","POMEGRANATE","RASPBERRY","STRAWBERRY","TOMATO","WATERMELON"]}

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = {"objects":["BASKETBALL","BED","BIKE","BOTTLE","BUS","CALCULATOR","CAR","CHAIR","COMPUTER","DOOR","FOOTBALL","FORK","GLASS","GLASSES","KITCHEN","KNIFE","MOTORBIKE","PEN","PENCIL","SMARTPHONE","SOFA","SPOON","TABLE","TENNIS BALL","TOILET SINK","TV"]}

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService) {
        var _this = this;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            _this.translateService.setDefaultLang('es');
            _this.translateService.use('es');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\git\memory-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\git\memory-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ExerciseQuestion__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_animals_json__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_animals_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_data_animals_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_colours_json__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_colours_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_data_colours_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_data_food_json__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_data_food_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_data_food_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_data_fruits_json__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_data_fruits_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_data_fruits_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_data_objects_json__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_data_objects_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_data_objects_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.TYPE = {
            ANIMALS: 'ANIMALS',
            COLOURS: 'COLOURS',
            FOOD: 'FOOD',
            FRUIT: 'FRUITS',
            OBJECTS: 'OBJECTS',
            MATHS: 'MATHS'
        };
        this.OPERATIONS = [{
                SIGN: '+',
                method: function (a, b) { return a + b; }
            }, {
                SIGN: '-',
                method: function (a, b) { return a - b; }
            }];
        this.OPERATION_LIMITS = {
            MIN: 1,
            MAX: 10
        };
        this.animalCollection = [];
        this.colourCollection = [];
        this.foodCollection = [];
        this.fruitCollection = [];
        this.objectCollection = [];
        console.log('Hello DataProvider Provider');
        this.animalCollection = __WEBPACK_IMPORTED_MODULE_3__assets_data_animals_json__["animals"];
        this.colourCollection = __WEBPACK_IMPORTED_MODULE_4__assets_data_colours_json__["colours"];
        this.foodCollection = __WEBPACK_IMPORTED_MODULE_5__assets_data_food_json__["food"];
        this.fruitCollection = __WEBPACK_IMPORTED_MODULE_6__assets_data_fruits_json__["fruits"];
        this.objectCollection = __WEBPACK_IMPORTED_MODULE_7__assets_data_objects_json__["objects"];
    }
    DataProvider.prototype.generateQuestion = function (type) {
        var arrayOfValues;
        switch (type) {
            case this.TYPE.ANIMALS:
                arrayOfValues = this.animalCollection;
                break;
            case this.TYPE.COLOURS:
                arrayOfValues = this.colourCollection;
                break;
            case this.TYPE.FOOD:
                arrayOfValues = this.foodCollection;
                break;
            case this.TYPE.FRUIT:
                arrayOfValues = this.fruitCollection;
                break;
            case this.TYPE.OBJECTS:
                arrayOfValues = this.objectCollection;
                break;
            default:
                break;
        }
        var objectOptions = [];
        var stringOptions = (Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["shuffle"])(arrayOfValues)).slice(0, 4);
        for (var _i = 0, stringOptions_1 = stringOptions; _i < stringOptions_1.length; _i++) {
            var stringOption = stringOptions_1[_i];
            objectOptions.push({ value: stringOption, visible: true });
        }
        var resultOption = objectOptions[Math.floor(Math.random() * objectOptions.length)];
        return new __WEBPACK_IMPORTED_MODULE_2__model_ExerciseQuestion__["a" /* ExerciseQuestion */](resultOption.value, objectOptions, resultOption.value);
    };
    DataProvider.prototype.generateMathQuestion = function () {
        var mathOptions = [];
        var selectedOperatorIndex = Math.floor(Math.random() * this.OPERATIONS.length);
        var selectedOperator = this.OPERATIONS[selectedOperatorIndex].SIGN;
        var a = this.randomNumber(this.OPERATION_LIMITS.MAX - 1);
        var b;
        if (selectedOperator === '+') {
            b = this.randomNumber(this.OPERATION_LIMITS.MAX - a);
        }
        else if (selectedOperator === '-') {
            b = this.randomNumber(a - 1);
        }
        var result = this.OPERATIONS[selectedOperatorIndex].method(a, b);
        mathOptions.push({ value: result, visible: true });
        while (mathOptions.length < 4) {
            var randomNumber = this.randomNumber(this.OPERATION_LIMITS.MAX);
            if (Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"])(mathOptions, { value: randomNumber }) === -1) {
                mathOptions.push({ value: randomNumber, visible: true });
            }
        }
        mathOptions = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["shuffle"])(mathOptions);
        return new __WEBPACK_IMPORTED_MODULE_2__model_ExerciseQuestion__["a" /* ExerciseQuestion */](a + " " + selectedOperator + " " + b, mathOptions, result);
    };
    DataProvider.prototype.randomNumber = function (max) {
        return Math.floor((Math.random() * max) + 1);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercise_text_exercise_text__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercise_images_exercise_images__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
    }
    HomePage.prototype.goToAnimals = function () {
        this.goToImagePage(this.dataProvider.TYPE.ANIMALS);
    };
    HomePage.prototype.goToColours = function () {
        this.goToImagePage(this.dataProvider.TYPE.COLOURS);
    };
    HomePage.prototype.goToFood = function () {
        this.goToImagePage(this.dataProvider.TYPE.FOOD);
    };
    HomePage.prototype.goToFruits = function () {
        this.goToImagePage(this.dataProvider.TYPE.FRUIT);
    };
    HomePage.prototype.goToMaths = function () {
        this.goToTextPage(this.dataProvider.TYPE.MATHS);
    };
    HomePage.prototype.goToObjects = function () {
        this.goToImagePage(this.dataProvider.TYPE.OBJECTS);
    };
    // Push pages
    HomePage.prototype.goToImagePage = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exercise_images_exercise_images__["a" /* ExerciseImagesPage */], { type: type });
    };
    HomePage.prototype.goToTextPage = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exercise_text_exercise_text__["a" /* ExerciseTextPage */], { type: type });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\git\memory-ionic\src\pages\home\home.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-4>\n      <ion-card (click)="goToAnimals()">\n        <img src="assets/imgs/ANIMALS/GORILLA.jpeg" />\n        <div class="card-title"><span>{{ \'ANIMALS\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card (click)="goToColours()">\n        <img src="assets/imgs/COLOURS/PURPLE.jpeg" />\n        <div class="card-title"><span>{{ \'COLOURS\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card (click)="goToFood()">\n        <img src="assets/imgs/FOOD/PIZZA.jpeg" />\n        <div class="card-title"><span>{{ \'FOOD\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-4>\n      <ion-card (click)="goToFruits()">\n        <img src="assets/imgs/FRUITS/BLUEBERRY.jpeg" />\n        <div class="card-title"><span>{{ \'FRUITS\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card (click)="goToMaths()">\n        <img src="assets/imgs/MATHS/MATHS.jpeg" />\n        <div class="card-title"><span>{{ \'MATHS\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card (click)="goToObjects()">\n        <img src="assets/imgs/OBJECTS/DOOR.jpeg" />\n        <div class="card-title"><span>{{ \'OBJECTS\' | translate | uppercase }}</span></div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\git\memory-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map