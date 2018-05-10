webpackJsonp([1,5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantAuthServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MerchantAuthServiceService = /** @class */ (function () {
    function MerchantAuthServiceService() {
    }
    MerchantAuthServiceService.prototype.checkMerchantLogin = function (merchant) {
        if (merchant.username == 'admin' && merchant.password == 'admin') {
            return true;
        }
    };
    MerchantAuthServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MerchantAuthServiceService);
    return MerchantAuthServiceService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/merchant-auth-service.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateserviceService = /** @class */ (function () {
    function ValidateserviceService() {
    }
    ValidateserviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateserviceService);
    return ValidateserviceService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/validateservice.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(410);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentProcessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var count = 0;
var ProgressBar = __webpack_require__(366);



var AgentProcessComponent = /** @class */ (function () {
    function AgentProcessComponent(router, http, userDataService) {
        this.router = router;
        this.http = http;
        this.userDataService = userDataService;
        this.orders = ['a', 'b', 'c', 'd'];
        this.orderItems = [];
        this.cartItems = [];
        this.totalCost = 0;
    }
    AgentProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init');
        if (this.userDataService.agentName != null) {
            var username = {
                username: this.userDataService.agentName
            };
            console.log(this.userDataService.agentName);
            this.getAgentReceivedOrders(username).subscribe(function (data) {
                if (data.success) {
                    var cost = 0;
                    console.log(data.success);
                    console.log(data.orders);
                    data.orders.forEach(function (i) {
                        //  const image =  "../" + i.catalogImage;
                        //  this.totalCost += parseInt(i.totalCost) ;
                        _this.id = i._id;
                        _this.description = i.catalog;
                        _this.totalCost = i.cost;
                        _this.status = i.statusForCustomer;
                        _this.clothName = i.clothName;
                        _this.length = i.length;
                        _this.statusForAgent = i.statusForAgent;
                        console.log(i._id);
                        console.log(typeof i.totalCost);
                        console.log(typeof _this.totalCost);
                        if (i.statusForAgent == 'Approved') {
                            _this.currentStatus = 'Approved';
                            _this.nextStatus = 'supplier';
                        }
                        if (i.statusForAgent == 'supplier') {
                            _this.currentStatus = 'supplier';
                            _this.nextStatus = 'Dye';
                        }
                        if (i.statusForAgent == 'Dye') {
                            _this.currentStatus = 'Dye';
                            _this.nextStatus = 'Machinery';
                        }
                        if (i.statusForAgent == 'Machinery') {
                            _this.currentStatus = 'Machinery';
                            _this.nextStatus = 'Finishing';
                        }
                        if (i.statusForAgent == 'Payment Received') {
                            _this.currentStatus = 'Payment Received';
                            _this.nextStatus = '';
                        }
                        _this.orderItems.push(new OrderItem(i.catalogImage, i.catalog, i.clothName, i.statusForCustomer, i.cost, i._id, i.length, i.statusForAgent, _this.nextStatus, _this.currentStatus));
                    });
                }
            });
        }
        else {
            this.router.navigate(['/agent/login']);
        }
        //
    };
    AgentProcessComponent.prototype.getAgentReceivedOrders = function (username) {
        console.log("functions");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/get_agent_orders', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AgentProcessComponent.prototype.update = function (order, stat, pos) {
        console.log(order.currentStatus);
        console.log(order.nextStatus);
        if (order.currentStatus == 'Approved' && order.nextStatus == 'supplier') {
            order.currentStatus = order.nextStatus;
            order.nextStatus = 'Dye';
            this.changeBackend(order.id, order.currentStatus, pos);
            return;
            //this.orderIems.find(item => item.id == order.id).nextStatus = ;
        }
        if (order.currentStatus == 'supplier' && order.nextStatus == 'Dye') {
            order.currentStatus = order.nextStatus;
            order.nextStatus = 'Machinery';
            this.changeBackend(order.id, order.currentStatus, pos);
            //this.orderIems.find(item => item.id == order.id).nextStatus = ;
            return;
        }
        if (order.currentStatus == 'Dye' && order.nextStatus == 'Machinery') {
            order.currentStatus = order.nextStatus;
            order.nextStatus = 'Finishing';
            this.changeBackend(order.id, order.currentStatus, pos);
            //this.orderIems.find(item => item.id == order.id).nextStatus = ;
            return;
        }
        if (order.currentStatus == 'Machinery' && order.nextStatus == 'Finishing') {
            order.currentStatus = 'Payment Received';
            order.nextStatus = '';
            this.changeFinalBackend(order.id, order.currentStatus, pos);
            //  this.orderItems.splice(pos,1)
            //  this.changeBackend(order.id)
            return;
            //this.orderIems.find(item => item.id == order.id).nextStatus = ;
        }
        if (order.currentStatus == 'Order Processed' && order.nextStatus == '') {
            //  order.currentStatus='Order Processed'
            //  this.orderItems.splice(pos,1)
            //order.nextStatus='';
            //this.orderIems.find(item => item.id == order.id).nextStatus = ;
            return;
        }
    };
    AgentProcessComponent.prototype.changeBackend = function (ordernumber, newstatus, pos) {
        var _this = this;
        var orderchange = {
            orderId: ordernumber,
            statusToBeUpdated: newstatus
        };
        this.f(orderchange).subscribe(function (data) {
            if (data.success) {
                var cost = 0;
                console.log(data.success);
                //this.orderItems.splice(pos,1)
                if (newstatus == 'Payment Received')
                    _this.orderItems.splice(pos, 1);
            }
        });
        //  console.log(orderId)
    };
    AgentProcessComponent.prototype.f = function (orderchange) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/updateStatus', orderchange, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AgentProcessComponent.prototype.changeFinalBackend = function (ordernumber, newstatus, pos) {
        var _this = this;
        var orderFinalchange = {
            orderId: ordernumber,
            statusToBeUpdated: newstatus,
            statusMerchant: 'Delivered',
            statusCustomer: 'ready'
        };
        this.final(orderFinalchange).subscribe(function (data) {
            if (data.success) {
                var cost = 0;
                console.log(data.success);
                //this.orderItems.splice(pos,1)
                if (newstatus == 'Payment Received')
                    _this.orderItems.splice(pos, 1);
            }
        });
        //  console.log(orderId)
    };
    AgentProcessComponent.prototype.final = function (orderFinalchange) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/updateFinalStatus', orderFinalchange, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AgentProcessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-process',
            template: __webpack_require__(722),
            styles: [__webpack_require__(683)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object])
    ], AgentProcessComponent);
    return AgentProcessComponent;
    var _a, _b, _c;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem(imageUrl, catalog, clothName, statusForCustomer, cost, id, length, statusForAgent, nextStatus, currentStatus) {
        this.imageUrl = imageUrl;
        this.catalog = catalog;
        this.clothName = clothName;
        this.statusForCustomer = statusForCustomer;
        this.cost = cost;
        this.id = id;
        this.length = length;
        this.statusForAgent = statusForAgent;
        this.nextStatus = nextStatus;
        this.currentStatus = currentStatus;
    }
    return OrderItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-process.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_agent_authservice_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgentProfileComponent = /** @class */ (function () {
    function AgentProfileComponent(userDataService, router, agentService) {
        this.userDataService = userDataService;
        this.router = router;
        this.agentService = agentService;
        this.agent = {};
    }
    AgentProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.agentName != null) {
            var username = {
                username: this.userDataService.agentName
            };
            this.agentService.getAgent(username).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.agent = {
                        "agency_name": data.agent_obj.agency_name,
                        "name": data.agent_obj.name,
                        "email": data.agent_obj.email,
                        "address": data.agent_obj.address,
                        "registration_number": data.agent_obj.registration_number,
                    };
                    // if(i._id != undefined)
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    AgentProfileComponent.prototype.openDetails = function () {
        // this.router.navigate(['/agent/profile']);
    };
    AgentProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-profile',
            template: __webpack_require__(723),
            styles: [__webpack_require__(684)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_agent_authservice_service__["a" /* AuthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_agent_authservice_service__["a" /* AuthserviceService */]) === "function" && _c || Object])
    ], AgentProfileComponent);
    return AgentProfileComponent;
    var _a, _b, _c;
}());

var Agent = /** @class */ (function () {
    function Agent(agency_name, name, email, address, registration_number) {
        this.agency_name = agency_name;
        this.name = name;
        this.email = email;
        this.address = address;
        this.registration_number = registration_number;
    }
    return Agent;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-profile.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgentHomeComponent = /** @class */ (function () {
    function AgentHomeComponent() {
    }
    AgentHomeComponent.prototype.ngOnInit = function () {
    };
    AgentHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-home',
            template: __webpack_require__(724),
            styles: [__webpack_require__(685)]
        }),
        __metadata("design:paramtypes", [])
    ], AgentHomeComponent);
    return AgentHomeComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-home.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgentLoginComponent = /** @class */ (function () {
    function AgentLoginComponent(validateService, authService, router, _flashMessagesService, saveUserSession) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.saveUserSession = saveUserSession;
    }
    AgentLoginComponent.prototype.ngOnInit = function () {
        this.saveUserSession.agentName = "";
    };
    AgentLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var agent = {
            username: this.username.toLowerCase(),
            password: this.password
        };
        if (!this.validateService.validateLogin(agent)) {
            console.log("");
            this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 1000 });
            return false;
        }
        this.authService.loginAgent(agent).subscribe(function (data) {
            if (data.success) {
                console.log("Login Successful!");
                _this.saveUserSession.agentName = agent.username.toLowerCase();
                _this.router.navigate(['/agent/home']);
            }
            else {
                _this._flashMessagesService.show('Agent Not Registered Yet!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    AgentLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-login',
            template: __webpack_require__(725),
            styles: [__webpack_require__(686)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__["a" /* AgentvalidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__["a" /* AgentvalidationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__["a" /* AuthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__["a" /* AuthserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _e || Object])
    ], AgentLoginComponent);
    return AgentLoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-login.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentRegistrationComponent = /** @class */ (function () {
    function AgentRegistrationComponent(validateService, authService, router, _flashMessagesService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    AgentRegistrationComponent.prototype.ngOnInit = function () {
    };
    AgentRegistrationComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var agent = {
            agency_name: this.agency_name,
            email: this.email,
            name: this.name.toLowerCase(),
            address: this.address,
            registration_number: this.registration_number,
            username: this.username.toLowerCase(),
            password: this.password,
        };
        //Validating required fields
        if (!this.validateService.validateRegister(agent)) {
            //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
            this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        //Validating required email
        if (!this.validateService.validateEmail(agent.email)) {
            this._flashMessagesService.show('Enter a valid Email!', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        //Register Agent
        this.authService.registerAgent(agent).subscribe(function (data) {
            if (data.success) {
                console.log("Registered!");
                _this._flashMessagesService.show('Registered!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/agent/login']);
            }
            else {
                console.log("Registration failed");
                _this._flashMessagesService.show('Registration Failed!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/agent/register']);
            }
        });
    };
    AgentRegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-registration',
            template: __webpack_require__(726),
            styles: [__webpack_require__(687)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__["a" /* AgentvalidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_agent_agentvalidation_service__["a" /* AgentvalidationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__["a" /* AuthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_agent_authservice_service__["a" /* AuthserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], AgentRegistrationComponent);
    return AgentRegistrationComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-registration.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompletedOrdersComponent = /** @class */ (function () {
    function CompletedOrdersComponent(router, http, userDataService) {
        this.router = router;
        this.http = http;
        this.userDataService = userDataService;
        this.orders = ['a', 'b', 'c', 'd'];
        this.orderItems = [];
        this.cartItems = [];
        this.totalCost = 0;
    }
    CompletedOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.agentName != null) {
            var username = {
                username: this.userDataService.agentName
            };
            console.log(this.userDataService.agentName);
            this.getProcessedOrders(username).subscribe(function (data) {
                if (data.success) {
                    var cost = 0;
                    console.log(data.success);
                    console.log(data.orders);
                    data.orders.forEach(function (i) {
                        //  const image =  "../" + i.catalogImage;
                        //  this.totalCost += parseInt(i.totalCost) ;
                        _this.id = i._id;
                        _this.description = i.catalog;
                        _this.totalCost = i.cost;
                        _this.status = i.statusForCustomer;
                        _this.clothName = i.clothName;
                        _this.length = i.length;
                        _this.statusForAgent = i.statusForAgent;
                        console.log(i._id);
                        console.log(typeof i.totalCost);
                        console.log(typeof _this.totalCost);
                        if (i.statusForAgent == 'received') {
                            _this.currentStatus = 'received';
                            _this.nextStatus = 'supplier';
                        }
                        if (i.statusForAgent == 'supplier') {
                            _this.currentStatus = 'supplier';
                            _this.nextStatus = 'Dye';
                        }
                        if (i.statusForAgent == 'Dye') {
                            _this.currentStatus = 'Dye';
                            _this.nextStatus = 'Machinery';
                        }
                        if (i.statusForAgent == 'Machinery') {
                            _this.currentStatus = 'Machinery';
                            _this.nextStatus = 'Finishing';
                        }
                        if (i.statusForAgent == 'Order Processed') {
                            _this.currentStatus = 'Order Processed';
                            _this.nextStatus = 'cool';
                        }
                        _this.orderItems.push(new OrderItem(i.catalogImage, i.catalog, i.clothName, i.statusForCustomer, i.cost, i._id, i.length, i.statusForAgent));
                    });
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    CompletedOrdersComponent.prototype.getProcessedOrders = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/getProcessedOrders', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompletedOrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-completed-orders',
            template: __webpack_require__(727),
            styles: [__webpack_require__(688)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object])
    ], CompletedOrdersComponent);
    return CompletedOrdersComponent;
    var _a, _b, _c;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem(imageUrl, catalog, clothName, statusForCustomer, cost, id, length, statusForAgent) {
        this.imageUrl = imageUrl;
        this.catalog = catalog;
        this.clothName = clothName;
        this.statusForCustomer = statusForCustomer;
        this.cost = cost;
        this.id = id;
        this.length = length;
        this.statusForAgent = statusForAgent;
    }
    return OrderItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/completed-orders.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_merchant_get_orders_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivedOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceivedOrdersComponent = /** @class */ (function () {
    function ReceivedOrdersComponent(router, getAllOrders, saveUserSession, _flashMessagesService) {
        this.router = router;
        this.getAllOrders = getAllOrders;
        this.saveUserSession = saveUserSession;
        this._flashMessagesService = _flashMessagesService;
        this.orders = [];
    }
    ReceivedOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.saveUserSession.agentName != null) {
            console.log(this.saveUserSession.agentName);
            var orderParam = {
                "agentName": this.saveUserSession.agentName,
                "status": "Received"
            };
            this.getAllOrders.getOrdersForAgentWaiting(orderParam).subscribe(function (data) {
                data.order.forEach(function (i) {
                    console.log(i);
                    var imageUrl = i.catalogImage;
                    if (i._id != undefined)
                        _this.orders.push(new Orders(i._id, imageUrl, i.clothName, i.cost, i.length));
                });
            });
        }
        else {
            this.router.navigate(['/agent/login']);
        }
    };
    ReceivedOrdersComponent.prototype.acceptOrder = function (item) {
        var _this = this;
        var index = this.orders.indexOf(item);
        var itemToBeAccepted = {
            orderId: item.id,
            status: "Accept"
        };
        console.log(itemToBeAccepted);
        this.getAllOrders.acceptDeclineOrder(itemToBeAccepted).subscribe(function (data) {
            if (data.success) {
                _this.orders.splice(index, 1);
                _this._flashMessagesService.show('Order Approved', { cssClass: 'alert-success', timeout: 1000 });
            }
            else {
            }
        });
    };
    ReceivedOrdersComponent.prototype.declineOrder = function (item) {
        var _this = this;
        var index = this.orders.indexOf(item);
        var itemToBeAccepted = {
            orderId: item.id,
            status: "Decline"
        };
        this.getAllOrders.acceptDeclineOrder(itemToBeAccepted).subscribe(function (data) {
            if (data.success) {
                _this.orders.splice(index, 1);
                _this._flashMessagesService.show('Order Declined', { cssClass: 'alert-success', timeout: 1000 });
            }
            else {
            }
        });
    };
    ReceivedOrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-received-orders',
            template: __webpack_require__(728),
            styles: [__webpack_require__(689)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_merchant_get_orders_service__["a" /* GetOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_merchant_get_orders_service__["a" /* GetOrdersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], ReceivedOrdersComponent);
    return ReceivedOrdersComponent;
    var _a, _b, _c, _d;
}());

var Orders = /** @class */ (function () {
    function Orders(id, imageUrl, clothName, cost, length) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.clothName = clothName;
        this.cost = cost;
        this.length = length;
    }
    return Orders;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/received-orders.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(729),
            styles: [__webpack_require__(690)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component_guest_user_view_guest_user_view_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_component_navbar_navbar_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merchant_components_login_login_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__merchant_components_home_home_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_component_main_main_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__merchant_components_approve_catalog_approve_catalog_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_merchant_merchant_auth_service_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_merchant_merchant_flash_message_service_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_merchant_validateservice_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__merchant_components_agentapproval_agentapproval_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agent_component_agentLogin_agent_login_agent_login_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agent_component_agentRegistration_agent_registration_agent_registration_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agent_component_agentHome_agent_home_agent_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_agent_authservice_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_agent_agentvalidation_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_merchant_merchant_services_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_component_cross_cross_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_component_horizontal_horizontal_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_component_plain_plain_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_component_user_home_user_home_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_component_vertical_vertical_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__user_component_user_login_user_login_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_component_user_register_user_register_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_users_userauthservice_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_users_user_validate_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__agent_component_agent_profile_agent_profile_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__user_component_view_catalog_view_catalog_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_bootstrap__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__merchant_components_create_catalog_create_catalog_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_catalogService_creat_catalog_service_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_catalogService_get_catalogs_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_placeorders_place_order_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__agent_component_received_orders_received_orders_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__merchant_components_receivedOrdersForMerchant_received_orders_from_merchant_received_orders_from_merchant_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_merchant_get_orders_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__user_component_customize_catalog_customize_catalog_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__user_component_user_cart_cart_cart_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__user_component_checkout_checkout_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_cart_cart_service_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__merchant_components_agent_histogram_agent_histogram_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dashboard_component_footer_component_footer_component_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angular_image_slider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_animations__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__agent_component_agent_process_agent_process_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__user_component_view_item_view_item_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_charts__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__redirect_login_redirect_login_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__user_component_order_order_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_miscService_save_state_service__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__user_component_pastorder_pastorder_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__user_component_user_profile_user_profile_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__agent_component_completed_orders_completed_orders_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__merchant_components_merchant_order_track_merchant_order_track_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_common__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_component_main_main_component__["a" /* MainComponent */] },
    { path: 'merchant/home/receivedOrders', component: __WEBPACK_IMPORTED_MODULE_41__merchant_components_receivedOrdersForMerchant_received_orders_from_merchant_received_orders_from_merchant_component__["a" /* ReceivedOrdersFromMerchantComponent */] },
    { path: 'merchant/home/histogram', component: __WEBPACK_IMPORTED_MODULE_47__merchant_components_agent_histogram_agent_histogram_component__["a" /* AgentHistogramComponent */] },
    { path: 'merchant/home/approvals', component: __WEBPACK_IMPORTED_MODULE_15__merchant_components_agentapproval_agentapproval_component__["a" /* AgentapprovalComponent */] },
    { path: 'merchant/home', component: __WEBPACK_IMPORTED_MODULE_8__merchant_components_home_home_component__["a" /* HomeComponent */] },
    { path: 'merchant/login', component: __WEBPACK_IMPORTED_MODULE_7__merchant_components_login_login_component__["a" /* LoginComponent */] },
    { path: 'agent/register', component: __WEBPACK_IMPORTED_MODULE_17__agent_component_agentRegistration_agent_registration_agent_registration_component__["a" /* AgentRegistrationComponent */] },
    { path: 'agent/login', component: __WEBPACK_IMPORTED_MODULE_16__agent_component_agentLogin_agent_login_agent_login_component__["a" /* AgentLoginComponent */] },
    { path: 'user/home', component: __WEBPACK_IMPORTED_MODULE_25__user_component_user_home_user_home_component__["a" /* UserHomeComponent */] },
    { path: 'user/plain', component: __WEBPACK_IMPORTED_MODULE_24__user_component_plain_plain_component__["a" /* PlainComponent */] },
    { path: 'user/vertical', component: __WEBPACK_IMPORTED_MODULE_26__user_component_vertical_vertical_component__["a" /* VerticalComponent */] },
    { path: 'user/horizontal', component: __WEBPACK_IMPORTED_MODULE_23__user_component_horizontal_horizontal_component__["a" /* HorizontalComponent */] },
    { path: 'user/cross', component: __WEBPACK_IMPORTED_MODULE_22__user_component_cross_cross_component__["a" /* CrossComponent */] },
    { path: 'user/registration', component: __WEBPACK_IMPORTED_MODULE_28__user_component_user_register_user_register_component__["a" /* UserRegisterComponent */] },
    { path: 'user/login', component: __WEBPACK_IMPORTED_MODULE_27__user_component_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'agent/home/profile', component: __WEBPACK_IMPORTED_MODULE_31__agent_component_agent_profile_agent_profile_component__["a" /* AgentProfileComponent */] },
    { path: 'merchant/createcatalog', component: __WEBPACK_IMPORTED_MODULE_35__merchant_components_create_catalog_create_catalog_component__["a" /* CreateCatalogComponent */] },
    { path: 'merchant/home/approvecatalog', component: __WEBPACK_IMPORTED_MODULE_11__merchant_components_approve_catalog_approve_catalog_component__["a" /* ApproveCatalogComponent */] },
    { path: 'user/home/viewcatalog/cart', component: __WEBPACK_IMPORTED_MODULE_44__user_component_user_cart_cart_cart_component__["a" /* CartComponent */] },
    { path: 'user/home/viewcatalog', component: __WEBPACK_IMPORTED_MODULE_33__user_component_view_catalog_view_catalog_component__["a" /* ViewCatalogComponent */] },
    { path: 'guest/viewcatalog', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_component_guest_user_view_guest_user_view_component__["a" /* GuestUserViewComponent */] },
    { path: 'agent/home/receivedOrders', component: __WEBPACK_IMPORTED_MODULE_40__agent_component_received_orders_received_orders_component__["a" /* ReceivedOrdersComponent */] },
    { path: 'agent/home/process', component: __WEBPACK_IMPORTED_MODULE_51__agent_component_agent_process_agent_process_component__["a" /* AgentProcessComponent */] },
    { path: 'agent/home', component: __WEBPACK_IMPORTED_MODULE_18__agent_component_agentHome_agent_home_agent_home_component__["a" /* AgentHomeComponent */] },
    { path: 'user/home/customzieCatalog', component: __WEBPACK_IMPORTED_MODULE_43__user_component_customize_catalog_customize_catalog_component__["a" /* CustomizeCatalogComponent */] },
    { path: 'user/home/viewcatalog/viewitem', component: __WEBPACK_IMPORTED_MODULE_52__user_component_view_item_view_item_component__["a" /* ViewItemComponent */] },
    { path: 'RedirectLoginComponent', component: __WEBPACK_IMPORTED_MODULE_54__redirect_login_redirect_login_component__["a" /* RedirectLoginComponent */] },
    { path: 'user/home/order', component: __WEBPACK_IMPORTED_MODULE_55__user_component_order_order_component__["a" /* OrderComponent */] },
    { path: 'user/home/cart/checkout', component: __WEBPACK_IMPORTED_MODULE_45__user_component_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'user/home/cart', component: __WEBPACK_IMPORTED_MODULE_44__user_component_user_cart_cart_cart_component__["a" /* CartComponent */] },
    { path: 'user/home/order', component: __WEBPACK_IMPORTED_MODULE_55__user_component_order_order_component__["a" /* OrderComponent */] },
    { path: 'user/home/pastorder', component: __WEBPACK_IMPORTED_MODULE_57__user_component_pastorder_pastorder_component__["a" /* PastorderComponent */] },
    { path: 'user/home/profile', component: __WEBPACK_IMPORTED_MODULE_58__user_component_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'merchant/home/merchantOrderTrack', component: __WEBPACK_IMPORTED_MODULE_60__merchant_components_merchant_order_track_merchant_order_track_component__["a" /* MerchantOrderTrackComponent */] },
    { path: 'agent/home/completedOrders', component: __WEBPACK_IMPORTED_MODULE_59__agent_component_completed_orders_completed_orders_component__["a" /* CompletedOrdersComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__merchant_components_approve_catalog_approve_catalog_component__["a" /* ApproveCatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__merchant_components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__merchant_components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__merchant_components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__merchant_components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__merchant_components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_component_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_15__merchant_components_agentapproval_agentapproval_component__["a" /* AgentapprovalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__agent_component_agentLogin_agent_login_agent_login_component__["a" /* AgentLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__agent_component_agentRegistration_agent_registration_agent_registration_component__["a" /* AgentRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__agent_component_agentHome_agent_home_agent_home_component__["a" /* AgentHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_component_cross_cross_component__["a" /* CrossComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_component_horizontal_horizontal_component__["a" /* HorizontalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__user_component_plain_plain_component__["a" /* PlainComponent */],
                __WEBPACK_IMPORTED_MODULE_25__user_component_user_home_user_home_component__["a" /* UserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_component_vertical_vertical_component__["a" /* VerticalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__user_component_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__user_component_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__agent_component_agent_profile_agent_profile_component__["a" /* AgentProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_33__user_component_view_catalog_view_catalog_component__["a" /* ViewCatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__merchant_components_create_catalog_create_catalog_component__["a" /* CreateCatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agent_component_received_orders_received_orders_component__["a" /* ReceivedOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_41__merchant_components_receivedOrdersForMerchant_received_orders_from_merchant_received_orders_from_merchant_component__["a" /* ReceivedOrdersFromMerchantComponent */],
                __WEBPACK_IMPORTED_MODULE_43__user_component_customize_catalog_customize_catalog_component__["a" /* CustomizeCatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__user_component_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_51__agent_component_agent_process_agent_process_component__["a" /* AgentProcessComponent */],
                __WEBPACK_IMPORTED_MODULE_48__dashboard_component_footer_component_footer_component_component__["a" /* FooterComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_44__user_component_user_cart_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_45__user_component_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_47__merchant_components_agent_histogram_agent_histogram_component__["a" /* AgentHistogramComponent */],
                __WEBPACK_IMPORTED_MODULE_52__user_component_view_item_view_item_component__["a" /* ViewItemComponent */],
                __WEBPACK_IMPORTED_MODULE_54__redirect_login_redirect_login_component__["a" /* RedirectLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_55__user_component_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_57__user_component_pastorder_pastorder_component__["a" /* PastorderComponent */],
                __WEBPACK_IMPORTED_MODULE_58__user_component_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_59__agent_component_completed_orders_completed_orders_component__["a" /* CompletedOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_60__merchant_components_merchant_order_track_merchant_order_track_component__["a" /* MerchantOrderTrackComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_component_guest_user_view_guest_user_view_component__["a" /* GuestUserViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_49_angular_image_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34_ng2_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_53_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_merchant_merchant_auth_service_service__["a" /* MerchantAuthServiceService */],
                __WEBPACK_IMPORTED_MODULE_13__services_merchant_merchant_flash_message_service_service__["a" /* MerchantFlashMessageServiceService */],
                __WEBPACK_IMPORTED_MODULE_29__services_users_userauthservice_service__["a" /* UserauthserviceService */],
                __WEBPACK_IMPORTED_MODULE_30__services_users_user_validate_service__["a" /* UserValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_merchant_validateservice_service__["a" /* ValidateserviceService */],
                __WEBPACK_IMPORTED_MODULE_19__services_agent_authservice_service__["a" /* AuthserviceService */],
                __WEBPACK_IMPORTED_MODULE_20__services_agent_agentvalidation_service__["a" /* AgentvalidationService */],
                __WEBPACK_IMPORTED_MODULE_36__services_catalogService_creat_catalog_service_service__["a" /* CreatCatalogServiceService */],
                __WEBPACK_IMPORTED_MODULE_37__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */],
                __WEBPACK_IMPORTED_MODULE_38__services_miscService_save_user_data_service__["a" /* SaveUserDataService */],
                __WEBPACK_IMPORTED_MODULE_39__services_placeorders_place_order_service__["a" /* PlaceOrderService */],
                __WEBPACK_IMPORTED_MODULE_42__services_merchant_get_orders_service__["a" /* GetOrdersService */],
                __WEBPACK_IMPORTED_MODULE_46__services_cart_cart_service_service__["a" /* CartServiceService */],
                __WEBPACK_IMPORTED_MODULE_56__services_miscService_save_state_service__["a" /* SaveStateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_61__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_61__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_21__services_merchant_merchant_services_service__["a" /* MerchantServicesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponentComponent = /** @class */ (function () {
    function FooterComponentComponent() {
    }
    FooterComponentComponent.prototype.ngOnInit = function () {
    };
    FooterComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-component',
            template: __webpack_require__(730),
            styles: [__webpack_require__(691)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponentComponent);
    return FooterComponentComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/footer-component.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestUserViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GuestUserViewComponent = /** @class */ (function () {
    function GuestUserViewComponent(catalogService, _flashMessagesService, userDataService, placeOrderService, cartService, router) {
        this.catalogService = catalogService;
        this._flashMessagesService = _flashMessagesService;
        this.userDataService = userDataService;
        this.placeOrderService = placeOrderService;
        this.cartService = cartService;
        this.router = router;
        this.catalogList = [];
        this.cloth_length = [];
        this.cost = [];
        this.clothtypes = [];
        this.selectedItem = {};
        this.show = false;
    }
    GuestUserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clothtypes.push(new clothTypes(0, "SILK", "$", 25));
        this.clothtypes.push(new clothTypes(1, "COTTON", "$", 15));
        this.clothtypes.push(new clothTypes(2, "LINEN", "$", 10));
        this.clothtypes.push(new clothTypes(3, "WOOL", "$", 18));
        this.clothtypes.push(new clothTypes(4, "SYNTHETIC FIBERS", "$", 20));
        this.clothtypes.push(new clothTypes(5, "RAYON", "$", 15));
        //if(this.userDataService.username != null){
        this.userObject = this.userDataService.username;
        this.catalogService.getCatalog().subscribe(function (data) {
            console.log(data.success);
            if (data.success) {
                data.catalogs.forEach(function (i) {
                    var imageUrl = i.imageURL;
                    _this.catalogList.push(new Catalog(imageUrl, i.title, i.desc, i.unitLengthCost));
                });
                console.log(_this.catalogList);
            }
        });
    };
    GuestUserViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guest-user-view',
            template: __webpack_require__(731),
            styles: [__webpack_require__(692)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__["a" /* PlaceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__["a" /* PlaceOrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__["a" /* CartServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__["a" /* CartServiceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _f || Object])
    ], GuestUserViewComponent);
    return GuestUserViewComponent;
    var _a, _b, _c, _d, _e, _f;
}());

var Catalog = /** @class */ (function () {
    function Catalog(imageURL, title, desc, unitLengthCost) {
        this.imageURL = imageURL;
        this.title = title;
        this.desc = desc;
        this.unitLengthCost = unitLengthCost;
    }
    return Catalog;
}());
var clothTypes = /** @class */ (function () {
    function clothTypes(id, cloth, currency, cost) {
        this.id = id;
        this.cloth = cloth;
        this.currency = currency;
        this.cost = cost;
    }
    return clothTypes;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/guest-user-view.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_image_slider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_catalogService_get_catalogs_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(BrowserAnimationsModule, SliderModule, BrowserModule, catalogService) {
        this.BrowserAnimationsModule = BrowserAnimationsModule;
        this.SliderModule = SliderModule;
        this.BrowserModule = BrowserModule;
        this.catalogService = catalogService;
        //public imagesUrl;
        this.imagesUrl = [];
        this.catalogList = [];
        this.cloth_length = [];
        this.cost = [];
        this.clothtypes = [];
        this.selectedItem = {};
    }
    MainComponent.prototype.ngOnInit = function () {
        /*this.imagesUrl = [
          'https://static.contrado.com/resources/images/2017-2/55807/sensation-silk-fabric-online-110251.jpg',
          'https://img.etsystatic.com/il/10e9ce/797187829/il_570xN.797187829_cjpy.jpg?version=0',
          'https://static.contrado.com/resources/images/2015-4/18010/fabric-printing-services-19013_l.jpg',
          'https://img.etsystatic.com/il/544a69/884357753/il_fullxfull.884357753_2r9p.jpg?version=0',
          'https://pixel.nymag.com/imgs/thecut/slideshows/2016/06/india-fasntastique/india-fantastique-07.nocrop.w530.h670.jpg'
        ]*/
        var _this = this;
        this.catalogService.getTopCatalog().subscribe(function (data) {
            console.log(data.success);
            if (data.success) {
                data.catalogs.forEach(function (i) {
                    var imageUrl = i.imageURL;
                    _this.imagesUrl.push(imageUrl);
                    _this.catalogList.push(new Catalog(imageUrl, i.title, i.desc, i.unitLengthCost));
                });
                console.log(_this.catalogList);
            }
        });
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(732),
            styles: [__webpack_require__(693)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular_image_slider__["a" /* SliderModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_image_slider__["a" /* SliderModule */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */]) === "function" && _d || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b, _c, _d;
}());

var Catalog = /** @class */ (function () {
    function Catalog(imageURL, title, desc, unitLengthCost) {
        this.imageURL = imageURL;
        this.title = title;
        this.desc = desc;
        this.unitLengthCost = unitLengthCost;
    }
    return Catalog;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/main.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(733),
            styles: [__webpack_require__(694)]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_services_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentHistogramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgentHistogramComponent = /** @class */ (function () {
    function AgentHistogramComponent(router, getActiveAgents, userDataService) {
        this.router = router;
        this.getActiveAgents = getActiveAgents;
        this.userDataService = userDataService;
        this.agents = [];
        this.acceptOrds = [];
        this.declineOrds = [];
        this.receivedOrds = [];
        this.deliveredOrds = [];
        this.scoreAgent = [];
        this.acceptOrdsData = null;
        this.declineOrdsData = null;
        this.receivedOrdsData = null;
        this.deliveredOrdsData = null;
        this.demoAgents = null;
        this.chart = [];
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        /*
        this.demoAgents
      
      
        {data: this.receivedOrdsData, label: 'Orders Received'},
        {data: this.acceptOrdsData, label: 'Orders accepted'},
        {data: this.declineOrdsData, label: 'Orders Declined' },
        {data: this.deliveredOrdsData, label: 'Orders Delivered'}
        */
        this.barChartData = [
            //{data: this.receivedOrdsData, label: 'Orders Received'},
            { data: this.acceptOrdsData, label: 'Orders accepted' },
            { data: this.declineOrdsData, label: 'Orders Declined' },
            { data: this.scoreAgent, label: 'Score' }
        ];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    }
    AgentHistogramComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.merchant != null) {
            this.getActiveAgents.getActiveAgents().subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    data.agent.forEach(function (i) {
                        if (i.name != undefined)
                            console.log(i.name);
                        _this.agents.push(String(i.name));
                        _this.acceptOrds.push(String(i.orders.acceptOrders));
                        _this.declineOrds.push(String(i.orders.declineOrders));
                        _this.receivedOrds.push(String(i.orders.receivedOrders));
                        _this.deliveredOrds.push(String(i.orders.deliveredOrders));
                        _this.scoreAgent.push(String(i.score));
                    });
                    var receivedOrdsData = JSON.stringify(_this.receivedOrds);
                    var acceptOrdsData = JSON.stringify(_this.acceptOrds);
                    var declineOrdsData = JSON.stringify(_this.declineOrds);
                    var deliveredOrdsData = JSON.stringify(_this.deliveredOrds);
                    var demoAgent = JSON.stringify(_this.agents);
                    _this.receivedOrdsData = JSON.parse(receivedOrdsData);
                    _this.acceptOrdsData = JSON.parse(acceptOrdsData);
                    _this.declineOrdsData = JSON.parse(declineOrdsData);
                    _this.deliveredOrdsData = JSON.parse(deliveredOrdsData);
                    _this.demoAgents = JSON.parse(demoAgent);
                    console.log(_this.demoAgents);
                    console.log(_this.acceptOrdsData);
                    console.log(_this.declineOrdsData);
                    console.log(_this.receivedOrdsData);
                    console.log(_this.deliveredOrdsData);
                    var datad = [];
                    var barChartLabels = _this.demoAgents;
                    _this.barChartLabels = barChartLabels;
                    datad[0] = _this.acceptOrdsData;
                    datad[1] = _this.declineOrdsData;
                    datad[2] = _this.scoreAgent;
                    //datad[3] = this.deliveredOrdsData;
                    var barChartData = [
                        //{data: [], label: 'Orders Received'},
                        { data: [], label: 'Orders accepted' },
                        { data: [], label: 'Orders Declined' },
                        { data: [], label: 'Score' }
                    ];
                    _this.barChartData[0]['data'] = datad[0];
                    _this.barChartData[1]['data'] = datad[1];
                    _this.barChartData[2]['data'] = datad[2];
                    //this.barChartData[3]['data'] = datad[3];
                    /*this.barChartData.forEach((data,index)=>{
          
                      this.barChartData[index]  = Object.assign({},this.barChartData[index],{
                        data: [this.barChartData[index].data,datad[index]]
                      })
                    })
          */
                    //let clone = JSON.parse(JSON.stringify(barChartData));
                    //          this.barChartLabels = [this.barChartLabels, barChartLabels];
                    //clone[0].data = datad;
                    //console.log("++++++++" + clone[1].data);
                    //clone[0][0].data = datad[0];
                    //clone[0][1].data = datad[1];
                    //clone[0][2].data = datad[2];
                    //clone[0][3].data = datad[3];
                    //this.barChartData = barChartData;
                    //console.log(clone[0]);
                    //this.barChartData = clone;
                }
            });
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    // events
    AgentHistogramComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AgentHistogramComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AgentHistogramComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-histogram',
            template: __webpack_require__(734),
            styles: [__webpack_require__(695)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_services_service__["a" /* MerchantServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_services_service__["a" /* MerchantServicesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object])
    ], AgentHistogramComponent);
    return AgentHistogramComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agent-histogram.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentapprovalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentapprovalComponent = /** @class */ (function () {
    function AgentapprovalComponent(merchantService, _flashMessagesService, userDataService, router) {
        this.merchantService = merchantService;
        this._flashMessagesService = _flashMessagesService;
        this.userDataService = userDataService;
        this.router = router;
        this.agentsList = [];
    }
    AgentapprovalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.merchant != null) {
            this.merchantService.getAgentsWaitingForApproval().subscribe(function (data) {
                if (data.success) {
                    data.agents.forEach(function (i) {
                        if (i.name != undefined)
                            // console.log(i.name);
                            _this.agentsList.push(new AgentApprovalModel(i.name, i.agency_name, i.registration_number));
                    });
                }
            });
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    AgentapprovalComponent.prototype.deleteItem = function (item) {
        var _this = this;
        {
            var index_1 = this.agentsList.indexOf(item);
            var agent = { username: item,
                changeStatus: "3" };
            this.merchantService.changeAgentApprovalStatus(agent).subscribe(function (data) {
                if (data.success) {
                    _this._flashMessagesService.show('Agent Declined!', { cssClass: 'alert-success', timeout: 1000 });
                    _this.agentsList.splice(index_1, 1);
                }
            });
        }
    };
    AgentapprovalComponent.prototype.acceptAgent = function (item) {
        var _this = this;
        var index = this.agentsList.indexOf(item);
        var agent = { username: item,
            changeStatus: "2" };
        console.log(agent);
        this.merchantService.changeAgentApprovalStatus(agent).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Agent Approved!', { cssClass: 'alert-success', timeout: 1000 });
                _this.agentsList.splice(index, 1);
            }
        });
    };
    AgentapprovalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agentapproval',
            template: __webpack_require__(735),
            styles: [__webpack_require__(696)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__["a" /* MerchantServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__["a" /* MerchantServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], AgentapprovalComponent);
    return AgentapprovalComponent;
    var _a, _b, _c, _d;
}());

var AgentApprovalModel = /** @class */ (function () {
    function AgentApprovalModel(name, agency_name, registration_number) {
        this.name = name;
        this.agency_name = agency_name;
        this.registration_number = registration_number;
    }
    return AgentApprovalModel;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agentapproval.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApproveCatalogComponent = /** @class */ (function () {
    function ApproveCatalogComponent(merchantService, _flashMessagesService, router, userDataService) {
        this.merchantService = merchantService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.userDataService = userDataService;
        this.catalogList = [];
        this.cost = [];
    }
    ApproveCatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.merchant != null) {
            this.merchantService.getCatalogWaitingList().subscribe(function (data) {
                console.log(data.success);
                if (data.success) {
                    data.catalogs.forEach(function (i) {
                        console.log(i);
                        var imageUrl = i.imageURL;
                        _this.catalogList.push(new Catalog(i._id, imageUrl, i.title, i.desc));
                    });
                    console.log(_this.catalogList);
                }
            });
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    ApproveCatalogComponent.prototype.approveCatalog = function (catalog, index) {
        var _this = this;
        var catalogObj = {
            id: catalog.id,
            unitLengthCost: this.cost[index]
        };
        console.log(catalogObj);
        this.merchantService.approveWaitinglistCatalog(catalogObj).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Catalog Approved', { cssClass: 'alert-success', timeout: 1000 });
                _this.cost[index] = 0;
                _this.catalogList.splice(index, 1);
            }
        });
    };
    ApproveCatalogComponent.prototype.declineCatalog = function (catalog, index) {
        var _this = this;
        var catalogObj = {
            id: catalog.id
        };
        this.merchantService.declineWaitinglistCatalog(catalogObj).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Catalog Declined', { cssClass: 'alert-success', timeout: 1000 });
                _this.cost[index] = 0;
                _this.catalogList.splice(index, 1);
            }
        });
    };
    ApproveCatalogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approve-catalog',
            template: __webpack_require__(736),
            styles: [__webpack_require__(697)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__["a" /* MerchantServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_merchant_merchant_services_service__["a" /* MerchantServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _d || Object])
    ], ApproveCatalogComponent);
    return ApproveCatalogComponent;
    var _a, _b, _c, _d;
}());

var Catalog = /** @class */ (function () {
    function Catalog(id, imageURL, title, desc) {
        this.id = id;
        this.imageURL = imageURL;
        this.title = title;
        this.desc = desc;
    }
    return Catalog;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/approve-catalog.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCatalogComponent = /** @class */ (function () {
    function CreateCatalogComponent(createcatalog, router, _flashMessagesService, http, userDataService) {
        this.createcatalog = createcatalog;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.userDataService = userDataService;
        this.multiple = false;
    }
    CreateCatalogComponent.prototype.ngOnInit = function () {
        if (this.userDataService.merchant != null) {
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    CreateCatalogComponent.prototype.onCreateCatalogSubmit = function () {
        var _this = this;
        var create = {
            imageURL: this.filename,
            unitLengthCost: this.unitLengthCost,
            desc: this.desc,
            title: this.title,
            status: "approved"
        };
        console.log("This is in TS " + create);
        this.createcatalog.uploadimage(create).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Catalog Added Successfully', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    CreateCatalogComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]();
            this.http.post('https://textilemanagementsystem.herokuapp.com/create/upload', formData, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var Response = data.success;
                if (Response) {
                    // this.uploadFile.push(data);
                    console.log(data);
                    _this.filename = data.filename;
                }
                else {
                    // this.showFileError = data['_error'];
                }
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreateCatalogComponent.prototype, "multiple", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], CreateCatalogComponent.prototype, "inputEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], CreateCatalogComponent.prototype, "fileInput", void 0);
    CreateCatalogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-catalog',
            template: __webpack_require__(737),
            styles: [__webpack_require__(698)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__["a" /* CreatCatalogServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__["a" /* CreatCatalogServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _f || Object])
    ], CreateCatalogComponent);
    return CreateCatalogComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/create-catalog.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(738),
            styles: [__webpack_require__(699)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/home.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_merchant_validateservice_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_auth_service_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(validateService, authService, router, saveUserSession) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.saveUserSession = saveUserSession;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.saveUserSession.merchant = "";
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var merchant = {
            username: this.username,
            password: this.password
        };
        if (this.authService.checkMerchantLogin(merchant)) {
            this.saveUserSession.merchant = this.username;
            this.router.navigate(['/merchant/home']);
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(739),
            styles: [__webpack_require__(700)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_merchant_validateservice_service__["a" /* ValidateserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_merchant_validateservice_service__["a" /* ValidateserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_auth_service_service__["a" /* MerchantAuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_merchant_merchant_auth_service_service__["a" /* MerchantAuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/login.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_merchant_get_orders_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantOrderTrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MerchantOrderTrackComponent = /** @class */ (function () {
    function MerchantOrderTrackComponent(router, getAllOrders, userDataService) {
        this.router = router;
        this.getAllOrders = getAllOrders;
        this.userDataService = userDataService;
        this.orders = ['a', 'b', 'c', 'd'];
        this.orderItems = [];
        this.cartItems = [];
        this.totalCost = 0;
    }
    MerchantOrderTrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.merchant != null) {
            this.getAllOrders.getAllOrdersForMerchant().subscribe(function (data) {
                if (data.success) {
                    var cost = 0;
                    console.log(data.success);
                    data.orders.forEach(function (i) {
                        //  const image =  "../" + i.catalogImage;
                        //  this.totalCost += parseInt(i.totalCost) ;
                        _this.id = i._id;
                        _this.description = i.catalog;
                        _this.totalCost = i.cost;
                        _this.status = i.statusForCustomer;
                        _this.clothName = i.clothName;
                        _this.length = i.length;
                        _this.statusForAgent = i.statusForAgent;
                        _this.statusForMerchant = i.statusForMerchant;
                        console.log(i._id);
                        console.log(typeof i.totalCost);
                        console.log(typeof _this.totalCost);
                        if (i.statusForAgent == 'received') {
                            _this.currentStatus = 'received';
                            _this.nextStatus = 'supplier';
                        }
                        if (i.statusForAgent == 'supplier') {
                            _this.currentStatus = 'supplier';
                            _this.nextStatus = 'Dye';
                        }
                        if (i.statusForAgent == 'Dye') {
                            _this.currentStatus = 'Dye';
                            _this.nextStatus = 'Machinery';
                        }
                        if (i.statusForAgent == 'Machinery') {
                            _this.currentStatus = 'Machinery';
                            _this.nextStatus = 'Finishing';
                        }
                        if (i.statusForAgent == 'Order Processed') {
                            _this.currentStatus = 'Order Processed';
                            _this.nextStatus = '';
                        }
                        _this.orderItems.push(new OrderItem(i.catalogImage, i.catalog, i.clothName, i.statusForCustomer, i.cost, i._id, i.length, i.statusForAgent, i.statusForMerchant));
                    });
                }
            });
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    MerchantOrderTrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-merchant-order-track',
            template: __webpack_require__(740),
            styles: [__webpack_require__(701)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_merchant_get_orders_service__["a" /* GetOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_merchant_get_orders_service__["a" /* GetOrdersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object])
    ], MerchantOrderTrackComponent);
    return MerchantOrderTrackComponent;
    var _a, _b, _c;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem(imageUrl, catalog, clothName, statusForCustomer, cost, id, length, statusForAgent, statusForMerchant) {
        this.imageUrl = imageUrl;
        this.catalog = catalog;
        this.clothName = clothName;
        this.statusForCustomer = statusForCustomer;
        this.cost = cost;
        this.id = id;
        this.length = length;
        this.statusForAgent = statusForAgent;
        this.statusForMerchant = statusForMerchant;
    }
    return OrderItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/merchant-order-track.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_merchant_get_orders_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_merchant_merchant_services_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivedOrdersFromMerchantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReceivedOrdersFromMerchantComponent = /** @class */ (function () {
    function ReceivedOrdersFromMerchantComponent(router, getAllOrders, getActiveAgents, userDataService, _flashMessagesService) {
        this.router = router;
        this.getAllOrders = getAllOrders;
        this.getActiveAgents = getActiveAgents;
        this.userDataService = userDataService;
        this._flashMessagesService = _flashMessagesService;
        this.orders = [];
        this.agents = [];
        this.agentSelection = [];
    }
    ReceivedOrdersFromMerchantComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.merchant != null) {
            this.getAllOrders.getOrdersForMerchant().subscribe(function (data) {
                if (data.success) {
                    data.orders.forEach(function (i) {
                        var imageUrl = i.catalogImage;
                        console.log(imageUrl);
                        console.log(i._id);
                        console.log(i);
                        if (i._id != undefined)
                            _this.orders.push(new Orders(i._id, imageUrl, i.catalog, i.cost, i.clothName, i.length, i.username, i.address));
                    });
                }
            });
            this.getActiveAgents.getActiveAgents().subscribe(function (data) {
                if (data.success) {
                    _this.agents.push("Select an Agent");
                    data.agent.forEach(function (i) {
                        if (i.name != undefined) {
                            _this.agents.push(i.name);
                        }
                    });
                }
            });
        }
        else {
            this.router.navigate(['/merchant/login']);
        }
    };
    ReceivedOrdersFromMerchantComponent.prototype.changeAgent = function (val, i) {
        this.agentSelection[i] = val;
    };
    ReceivedOrdersFromMerchantComponent.prototype.assignAgent = function (orderId, agentName) {
        var _this = this;
        if (agentName != "Select an Agent") {
            var index_1 = this.orders.indexOf(orderId);
            console.log(index_1);
            var orderParam = {
                id: orderId,
                agentName: agentName
            };
            this.getActiveAgents.assignAgent(orderParam).subscribe(function (data) {
                if (data.success) {
                    console.log("Order Assigned to agent");
                    _this.orders.splice(index_1, 1);
                }
                else {
                    console.log("Could Not Assign Order");
                }
            });
        }
        else {
            this._flashMessagesService.show('Please Select an Agent', { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    ReceivedOrdersFromMerchantComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-received-orders-from-merchant',
            template: __webpack_require__(741),
            styles: [__webpack_require__(702)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_merchant_get_orders_service__["a" /* GetOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_merchant_get_orders_service__["a" /* GetOrdersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_merchant_merchant_services_service__["a" /* MerchantServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_merchant_merchant_services_service__["a" /* MerchantServicesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
    ], ReceivedOrdersFromMerchantComponent);
    return ReceivedOrdersFromMerchantComponent;
    var _a, _b, _c, _d, _e;
}());

var Orders = /** @class */ (function () {
    function Orders(id, imageURL, catalog, cost, clothName, length, username, address) {
        this.id = id;
        this.imageURL = imageURL;
        this.catalog = catalog;
        this.cost = cost;
        this.clothName = clothName;
        this.length = length;
        this.username = username;
        this.address = address;
    }
    return Orders;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/received-orders-from-merchant.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedirectLoginComponent = /** @class */ (function () {
    function RedirectLoginComponent() {
    }
    RedirectLoginComponent.prototype.ngOnInit = function () {
    };
    RedirectLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redirect-login',
            template: __webpack_require__(742),
            styles: [__webpack_require__(703)]
        }),
        __metadata("design:paramtypes", [])
    ], RedirectLoginComponent);
    return RedirectLoginComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/redirect-login.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantFlashMessageServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MerchantFlashMessageServiceService = /** @class */ (function () {
    function MerchantFlashMessageServiceService() {
    }
    MerchantFlashMessageServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MerchantFlashMessageServiceService);
    return MerchantFlashMessageServiceService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/merchant-flash-message-service.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaveStateService = /** @class */ (function () {
    function SaveStateService() {
    }
    SaveStateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaveStateService);
    return SaveStateService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/save-state.service.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_cart_service_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_placeorders_place_order_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(saveUserData, router, cartService, _flashMessagesService, placeOrder) {
        this.saveUserData = saveUserData;
        this.router = router;
        this.cartService = cartService;
        this._flashMessagesService = _flashMessagesService;
        this.placeOrder = placeOrder;
        this.cartItems = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.saveUserData.username != null) {
            var username = {
                "username": this.saveUserData.username
            };
            this.cartService.getCartElement(username).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    data.cartItems.forEach(function (i) {
                        var order = {
                            "cartId": i._id,
                            "catalog": i.catalogName,
                            "catalogImage": i.catalogImage,
                            "cost": i.totalCost,
                            "length": i.lengthEntered,
                            "clothName": i.clothName,
                        };
                        _this.cartItems.push(order);
                    });
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    CheckoutComponent.prototype.checkout = function () {
        var _this = this;
        var address = this.address1 + " " + this.address2;
        var placeOrder = {
            "username": this.saveUserData.username,
            "address": address,
            "orders": this.cartItems
        };
        this.placeOrder.placeOrders(placeOrder).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Order Placed Successfully', { cssClass: 'alert-success', timeout: 3000 });
                // this.router.navigate(['/user/home/viewcatalog']);
            }
            else {
                console.log("Here in error of place order");
            }
        });
    };
    CheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(743),
            styles: [__webpack_require__(704)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_cart_service_service__["a" /* CartServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_cart_service_service__["a" /* CartServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_placeorders_place_order_service__["a" /* PlaceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_placeorders_place_order_service__["a" /* PlaceOrderService */]) === "function" && _e || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a, _b, _c, _d, _e;
}());

var CartItem = /** @class */ (function () {
    function CartItem(cartId, imageURL, title, length, totalCost, typeOfCloth, id) {
        this.cartId = cartId;
        this.imageURL = imageURL;
        this.title = title;
        this.length = length;
        this.totalCost = totalCost;
        this.typeOfCloth = typeOfCloth;
        this.id = id;
    }
    return CartItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/checkout.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrossComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrossComponent = /** @class */ (function () {
    function CrossComponent() {
    }
    CrossComponent.prototype.ngOnInit = function () {
    };
    CrossComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cross',
            template: __webpack_require__(744),
            styles: [__webpack_require__(705)]
        }),
        __metadata("design:paramtypes", [])
    ], CrossComponent);
    return CrossComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/cross.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizeCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomizeCatalogComponent = /** @class */ (function () {
    function CustomizeCatalogComponent(userDataService, createcatalog, router, _flashMessagesService, http) {
        this.userDataService = userDataService;
        this.createcatalog = createcatalog;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.multiple = false;
    }
    CustomizeCatalogComponent.prototype.ngOnInit = function () {
        if (this.userDataService.username != null) {
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    CustomizeCatalogComponent.prototype.onCreateCatalogSubmit = function () {
        var _this = this;
        var create = {
            imageURL: this.filename,
            desc: this.desc,
            title: this.title,
            status: "waiting"
        };
        this.createcatalog.uploadimage(create).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Catalog Added Successfully', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    CustomizeCatalogComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            this.http.post('https://textilemanagementsystem.herokuapp.com/create/upload', formData, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var Response = data.success;
                if (Response) {
                    // this.uploadFile.push(data);
                    console.log(data);
                    _this.filename = data.filename;
                }
                else {
                    // this.showFileError = data['_error'];
                }
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomizeCatalogComponent.prototype, "multiple", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], CustomizeCatalogComponent.prototype, "inputEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], CustomizeCatalogComponent.prototype, "fileInput", void 0);
    CustomizeCatalogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customize-catalog',
            template: __webpack_require__(745),
            styles: [__webpack_require__(706)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__["a" /* CreatCatalogServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_catalogService_creat_catalog_service_service__["a" /* CreatCatalogServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _f || Object])
    ], CustomizeCatalogComponent);
    return CustomizeCatalogComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/customize-catalog.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent() {
    }
    HorizontalComponent.prototype.ngOnInit = function () {
    };
    HorizontalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-horizontal',
            template: __webpack_require__(746),
            styles: [__webpack_require__(707)]
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalComponent);
    return HorizontalComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/horizontal.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBar = __webpack_require__(366);



var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, http, userDataService) {
        this.router = router;
        this.http = http;
        this.userDataService = userDataService;
        this.orders = ['a', 'b', 'c', 'd'];
        this.orderItems = [];
        this.cartItems = [];
        this.totalCost = 0;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.username != null) {
            var username = {
                username: this.userDataService.username
            };
            console.log(this.userDataService.username);
            this.getActiveOrders(username).subscribe(function (data) {
                if (data.success) {
                    if (data.orders != null && data.orders.length > 0) {
                        var cost = 0;
                        data.orders.forEach(function (i) {
                            //  const image =  "../" + i.catalogImage;
                            //  this.totalCost += parseInt(i.totalCost) ;
                            _this.id = i._id;
                            _this.description = i.catalog;
                            _this.totalCost = i.cost;
                            _this.status = i.statusForCustomer;
                            _this.clothName = i.clothName;
                            _this.length = i.length;
                            _this.image = i.catalogImage;
                            console.log(i);
                            // console.log(typeof i.totalCost);
                            // console.log(typeof this.totalCost);
                            _this.orderItems.push(new OrderItem(i.catalogImage, i.catalog, i.clothName, i.statusForCustomer, i.cost, i._id, i.length, _this.image));
                        });
                    }
                    else {
                        console.log("Nothing Here");
                    }
                }
            });
        }
        for (var i in this.orderItems) {
            console.log(i);
        }
    };
    /*  getActiveOrders(){
        let headers = new Headers();
        headers.append('Content-type','application-json');
        return this.http.get('http://localhost:3001/endUsers/get_active_orders')
          .map((res) => res.json());
      }*/
    OrderComponent.prototype.getActiveOrders = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/get_active_orders', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderComponent.prototype.trackOrder = function (order, status, pos) {
        console.log(typeof pos);
        console.log(status);
        //  var main= document.getElementById('main');
        //var container = <HTMLDivElement>(document.createElement('div'));
        //var hiddenInput = document.createElement("div");
        //var hiddenInput = <HTMLDivElement>(document.createElement('div'));
        /*container.id=order+1
        hiddenInput.id =order;
        hiddenInput.className = "line"
        main.appendChild(container)
        container.appendChild(hiddenInput);*/
        //document.getElementById("mySidenav").style.width = "250px";
        console.log(order.cost);
        this.x = "" + pos;
        console.log(this.x);
        console.log(typeof this.x);
        //this.totalCost += parseInt(i.totalCost)
        if (document.getElementById("" + pos).innerHTML == "") {
            var bar = new ProgressBar.Line("#\\3" + pos, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                    value: 'line',
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#999',
                        //position: 'relative',
                        right: '0',
                        top: '30px',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false,
                },
                //value:'Shipped',
                from: { color: '#FFEA82' },
                to: { color: '#ED6A5A' },
                step: function (state, bar) {
                    //attachment.text.innerHTML="shipped"
                }
            });
            if (status == 'placed') {
                bar.animate(0.25);
                bar.setText(status);
            }
            if (status == 'processed') {
                bar.animate(0.33);
                bar.setText(status);
            }
            if (status == 'Delivered') {
                bar.animate(1);
                bar.setText(status);
            }
            if (status == 'ready') {
                bar.animate(0.66);
                bar.setText(status);
            }
            //bar.setText('Shipped');
        }
    };
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(747),
            styles: [__webpack_require__(708)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem(imageUrl, catalog, clothName, statusForCustomer, cost, id, length, image) {
        this.imageUrl = imageUrl;
        this.catalog = catalog;
        this.clothName = clothName;
        this.statusForCustomer = statusForCustomer;
        this.cost = cost;
        this.id = id;
        this.length = length;
        this.image = image;
    }
    return OrderItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/order.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_placeorders_place_order_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastorderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PastorderComponent = /** @class */ (function () {
    function PastorderComponent(placeOrder, userDataService, router) {
        this.placeOrder = placeOrder;
        this.userDataService = userDataService;
        this.router = router;
        this.pastOrder = [];
    }
    PastorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.username != null) {
            console.log(this.userDataService.username);
            var username = {
                username: this.userDataService.username
            };
            this.placeOrder.getPastOrders(username).subscribe(function (data) {
                if (data.success) {
                    console.log(data.orders);
                    if (data.orders != null && data.orders.length > 0) {
                        data.orders.forEach(function (i) {
                            console.log(i);
                            if (i != undefined) {
                                _this.pastOrder.push(new Order(i.catalogImage, i.clothType, i.length, i.catalog, i.cost));
                            }
                        });
                    }
                    else {
                        console.log("Nothing Here");
                    }
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    PastorderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pastorder',
            template: __webpack_require__(748),
            styles: [__webpack_require__(709)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_placeorders_place_order_service__["a" /* PlaceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_placeorders_place_order_service__["a" /* PlaceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], PastorderComponent);
    return PastorderComponent;
    var _a, _b, _c;
}());

var Order = /** @class */ (function () {
    function Order(catalogImage, clothName, length, catalog, cost) {
        this.catalogImage = catalogImage;
        this.clothName = clothName;
        this.length = length;
        this.catalog = catalog;
        this.cost = cost;
    }
    return Order;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/pastorder.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlainComponent = /** @class */ (function () {
    function PlainComponent() {
    }
    PlainComponent.prototype.ngOnInit = function () {
    };
    PlainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plain',
            template: __webpack_require__(749),
            styles: [__webpack_require__(710)]
        }),
        __metadata("design:paramtypes", [])
    ], PlainComponent);
    return PlainComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/plain.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, userDataService, router, _flashMessagesService) {
        this.cartService = cartService;
        this.userDataService = userDataService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.cartItems = [];
        this.totalCost = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.username != null) {
            var username = {
                username: this.userDataService.username
            };
            this.cartService.getCartElement(username).subscribe(function (data) {
                if (data.success) {
                    var cost = 0;
                    data.cartItems.forEach(function (i) {
                        var image = i.catalogImage;
                        _this.totalCost += parseInt(i.totalCost);
                        console.log(i._id);
                        console.log(typeof i.totalCost);
                        console.log(typeof _this.totalCost);
                        _this.cartItems.push(new CartItem(image, i.catalogName, i.lengthEntered, i.totalCost, i.clothName, i._id));
                    });
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    CartComponent.prototype.checkoutClick = function () {
        if (this.cartItems.length > 0) {
            this.router.navigate(['/user/home/cart/checkout']);
        }
        else {
            this._flashMessagesService.show('Nothing to checkout', { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    CartComponent.prototype.deleteElement = function (cartItem) {
        var _this = this;
        var index = this.cartItems.indexOf(cartItem);
        console.log(index);
        var id = {
            "_id": cartItem.id
        };
        this.cartService.removeCartElement(id).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Item Removed!', { cssClass: 'alert-success', timeout: 3000 });
                _this.totalCost -= parseInt(cartItem.totalCost);
                _this.cartItems.splice(index, 1);
            }
            else {
                _this._flashMessagesService.show('Unable to remove Item!', { cssClass: 'alert-success', timeout: 3000 });
            }
        });
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(750),
            styles: [__webpack_require__(711)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service_service__["a" /* CartServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service_service__["a" /* CartServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b, _c, _d;
}());

var CartItem = /** @class */ (function () {
    function CartItem(imageURL, title, length, totalCost, typeOfCloth, id) {
        this.imageURL = imageURL;
        this.title = title;
        this.length = length;
        this.totalCost = totalCost;
        this.typeOfCloth = typeOfCloth;
        this.id = id;
    }
    return CartItem;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/cart.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_image_slider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogService_get_catalogs_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserHomeComponent = /** @class */ (function () {
    //public imagesUrl;
    function UserHomeComponent(router, SliderModule, catalogService, userDataService) {
        this.router = router;
        this.SliderModule = SliderModule;
        this.catalogService = catalogService;
        this.userDataService = userDataService;
        this.imagesUrl = [];
        this.catalogList = [];
        this.cloth_length = [];
        this.cost = [];
        this.clothtypes = [];
        this.selectedItem = {};
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        /* this.imagesUrl = [
           'https://static.contrado.com/resources/images/2017-2/55807/sensation-silk-fabric-online-110251.jpg',
           'https://img.etsystatic.com/il/10e9ce/797187829/il_570xN.797187829_cjpy.jpg?version=0',
           'https://static.contrado.com/resources/images/2015-4/18010/fabric-printing-services-19013_l.jpg',
           //'https://img.etsystatic.com/il/544a69/884357753/il_fullxfull.884357753_2r9p.jpg?version=0',
           // 'https://pixel.nymag.com/imgs/thecut/slideshows/2016/06/india-fasntastique/india-fantastique-07.nocrop.w530.h670.jpg'
         ]*/
        var _this = this;
        if (this.userDataService.username != null) {
            this.userObject = this.userDataService.username;
            this.catalogService.getTopCatalog().subscribe(function (data) {
                console.log(data.success);
                if (data.success) {
                    data.catalogs.forEach(function (i) {
                        var imageUrl = i.imageURL;
                        _this.imagesUrl.push(imageUrl);
                        _this.catalogList.push(new Catalog(imageUrl, i.title, i.desc, i.unitLengthCost));
                    });
                    console.log(_this.catalogList);
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    /*plainPage(){
      this.router.navigate(['/user/plain']);
    }
    verticalPage(){
      this.router.navigate(['/user/vertical']);
    }
    horizontalPage(){
      this.router.navigate(['/user/horizontal']);
    }
    crossPage(){
      this.router.navigate(['/user/cross']);
    }*/
    UserHomeComponent.prototype.viewCatalogue = function () {
        this.router.navigate(['/user/home/viewcatalog']);
    };
    UserHomeComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    UserHomeComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    UserHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(751),
            styles: [__webpack_require__(712)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_image_slider__["a" /* SliderModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_image_slider__["a" /* SliderModule */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _d || Object])
    ], UserHomeComponent);
    return UserHomeComponent;
    var _a, _b, _c, _d;
}());

var Catalog = /** @class */ (function () {
    function Catalog(imageURL, title, desc, unitLengthCost) {
        this.imageURL = imageURL;
        this.title = title;
        this.desc = desc;
        this.unitLengthCost = unitLengthCost;
    }
    return Catalog;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/user-home.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(authService, validateService, router, _flashMessagesService, userDataService) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.userDataService = userDataService;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.userDataService.username = "";
    };
    UserLoginComponent.prototype.onSubmitUserLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateUserLogin(user)) {
            //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
            console.log("Please fill all the fields");
            this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                console.log("Login Successful!");
                _this.userDataService.username = user.username;
                _this.router.navigate(['/user/home']);
            }
            else {
                console.log("Login has failed");
                _this._flashMessagesService.show('Login has failed!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
        });
    };
    UserLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(752),
            styles: [__webpack_require__(713)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__["a" /* UserauthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__["a" /* UserauthserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__["a" /* UserValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__["a" /* UserValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _e || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/user-login.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_userauthservice_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userDataService, router, userService) {
        this.userDataService = userDataService;
        this.router = router;
        this.userService = userService;
        this.user = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.username != null) {
            var username = {
                username: this.userDataService.username
            };
            this.userService.getUser(username).subscribe(function (data) {
                if (data.success) {
                    console.log(data.User);
                    _this.user = {
                        "name": data.User.name,
                        "email": data.User.email,
                        "username": data.User.username
                    };
                    // if(i._id != undefined)
                }
            });
        }
        else {
            this.router.navigate(['/user/login']);
        }
    };
    UserProfileComponent.prototype.openDetails = function () {
        // this.router.navigate(['/agent/profile']);
    };
    UserProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(753),
            styles: [__webpack_require__(714)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_userauthservice_service__["a" /* UserauthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_userauthservice_service__["a" /* UserauthserviceService */]) === "function" && _c || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b, _c;
}());

var User = /** @class */ (function () {
    function User(name, email, username) {
        this.name = name;
        this.email = email;
        this.username = username;
    }
    return User;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/user-profile.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(authService, validateService, router, _flashMessagesService) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.onSubmitRegisterUser = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Validating required fields
        if (!this.validateService.validateUserRegister(user)) {
            //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
            console.log("Please fill all the fields");
            this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        //Validating required email
        if (!this.validateService.validateUserEmail(user.email)) {
            console.log("Please enter a valid email"); // {cssClass: 'alert-danger', timeout:3000}
            this._flashMessagesService.show('Please enter a valid email!', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log("Registered!");
                _this.router.navigate(['/user/login']);
            }
            else {
                _this._flashMessagesService.show('Registration Failed!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/user/register']);
            }
        });
    };
    UserRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(754),
            styles: [__webpack_require__(715)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__["a" /* UserauthserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_userauthservice_service__["a" /* UserauthserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__["a" /* UserValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_user_validate_service__["a" /* UserValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], UserRegisterComponent);
    return UserRegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/user-register.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerticalComponent = /** @class */ (function () {
    function VerticalComponent() {
    }
    VerticalComponent.prototype.ngOnInit = function () {
    };
    VerticalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vertical',
            template: __webpack_require__(755),
            styles: [__webpack_require__(716)]
        }),
        __metadata("design:paramtypes", [])
    ], VerticalComponent);
    return VerticalComponent;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/vertical.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewCatalogComponent = /** @class */ (function () {
    function ViewCatalogComponent(catalogService, _flashMessagesService, userDataService, placeOrderService, cartService, router) {
        this.catalogService = catalogService;
        this._flashMessagesService = _flashMessagesService;
        this.userDataService = userDataService;
        this.placeOrderService = placeOrderService;
        this.cartService = cartService;
        this.router = router;
        this.catalogList = [];
        this.cloth_length = [];
        this.cost = [];
        this.clothtypes = [];
        this.selectedItem = {};
        this.show = false;
    }
    ViewCatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDataService.username != null) {
            this.show = true;
        }
        else {
            this.show = false;
        }
        this.clothtypes.push(new clothTypes(0, "Select a cloth type", "$", 0));
        this.clothtypes.push(new clothTypes(0, "SILK", "$", 25));
        this.clothtypes.push(new clothTypes(1, "COTTON", "$", 15));
        this.clothtypes.push(new clothTypes(2, "LINEN", "$", 10));
        this.clothtypes.push(new clothTypes(3, "WOOL", "$", 18));
        this.clothtypes.push(new clothTypes(4, "SYNTHETIC FIBERS", "$", 20));
        this.clothtypes.push(new clothTypes(5, "RAYON", "$", 15));
        //if(this.userDataService.username != null){
        this.userObject = this.userDataService.username;
        this.catalogService.getCatalog().subscribe(function (data) {
            console.log(data.success);
            if (data.success) {
                data.catalogs.forEach(function (i) {
                    var imageUrl = i.imageURL;
                    _this.catalogList.push(new Catalog(imageUrl, i.title, i.desc, i.unitLengthCost));
                });
                console.log(_this.catalogList);
            }
        });
        //}else{
        //  this.router.navigate(['/user/login']);
    };
    //}
    ViewCatalogComponent.prototype.updatePrice = function (val, j) {
        for (var i = 0; i < this.clothtypes.length; i++) {
            if (this.clothtypes[i].cloth == val) {
                console.log(this.clothtypes[i]);
                this.cost[j] = this.clothtypes[i].cost;
            }
        }
    };
    ViewCatalogComponent.prototype.addToCart = function (catalog, index, clothType) {
        var _this = this;
        if (this.cloth_length[index] != null && this.cloth_length[index] > 0) {
            if (this.clothType != "Select a cloth type") {
                console.log(this.cloth_length[index]);
                this.unitLength = catalog.unitLengthCost;
                var clothCost = Number(clothType);
                console.log("ClothCost " + clothCost);
                console.log("UnitLength + ClothCost  " + Number(this.unitLength) + Number(clothCost));
                var totalCost = Number(this.cloth_length[index]) * (Number(this.unitLength) + Number(clothCost));
                console.log("Total Cost : " + totalCost);
                var cartItem = {
                    username: this.userDataService.username,
                    catalogName: catalog.title,
                    lengthEntered: this.cloth_length[index],
                    catalogImage: catalog.imageURL,
                    clothName: clothType,
                    totalCost: totalCost
                };
                this.cartService.addToCart(cartItem).subscribe(function (data) {
                    if (data.success) {
                        _this._flashMessagesService.show('Item Added to Cart!', { cssClass: 'alert-success', timeout: 3000 });
                    }
                    else {
                        console.log(data);
                    }
                });
            }
            else {
                this._flashMessagesService.show('Select a cloth type', { cssClass: 'alert-success', timeout: 3000 });
            }
        }
        else {
            this._flashMessagesService.show('Add a valid length', { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    ViewCatalogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-catalog',
            template: __webpack_require__(756),
            styles: [__webpack_require__(717)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalogService_get_catalogs_service__["a" /* GetCatalogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_miscService_save_user_data_service__["a" /* SaveUserDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__["a" /* PlaceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_placeorders_place_order_service__["a" /* PlaceOrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__["a" /* CartServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cart_cart_service_service__["a" /* CartServiceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _f || Object])
    ], ViewCatalogComponent);
    return ViewCatalogComponent;
    var _a, _b, _c, _d, _e, _f;
}());

var Catalog = /** @class */ (function () {
    function Catalog(imageURL, title, desc, unitLengthCost) {
        this.imageURL = imageURL;
        this.title = title;
        this.desc = desc;
        this.unitLengthCost = unitLengthCost;
    }
    return Catalog;
}());
var clothTypes = /** @class */ (function () {
    function clothTypes(id, cloth, currency, cost) {
        this.id = id;
        this.cloth = cloth;
        this.currency = currency;
        this.cost = cost;
    }
    return clothTypes;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/view-catalog.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewItemComponent = /** @class */ (function () {
    function ViewItemComponent() {
        this.clothtypes = [];
        this.selectedItem = {};
    }
    ViewItemComponent.prototype.ngOnInit = function () {
        this.clothtypes.push(new clothTypes("SILK", "$25"));
        this.clothtypes.push(new clothTypes("COTTON", "$15"));
        this.clothtypes.push(new clothTypes("LINEN", "$10"));
        this.clothtypes.push(new clothTypes("WOOL", "$18"));
        this.clothtypes.push(new clothTypes("SYNTHETIC FIBERS", "$20"));
        this.clothtypes.push(new clothTypes("RAYON", "$15"));
    };
    ViewItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-item',
            template: __webpack_require__(757),
            styles: [__webpack_require__(718)]
        }),
        __metadata("design:paramtypes", [])
    ], ViewItemComponent);
    return ViewItemComponent;
}());

var clothTypes = /** @class */ (function () {
    function clothTypes(cloth, cost) {
        this.cloth = cloth;
        this.cost = cost;
    }
    return clothTypes;
}());
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/view-item.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/environment.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartServiceService = /** @class */ (function () {
    function CartServiceService(http) {
        this.http = http;
    }
    CartServiceService.prototype.addToCart = function (cart) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/cart/addToCart', cart, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartServiceService.prototype.getCartElement = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/cart/getCartItem', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartServiceService.prototype.removeCartElement = function (id) {
        console.log(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/cart/deleteCartItem', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], CartServiceService);
    return CartServiceService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/cart-service.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCatalogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetCatalogsService = /** @class */ (function () {
    function GetCatalogsService(http) {
        this.http = http;
    }
    GetCatalogsService.prototype.getCatalog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://textilemanagementsystem.herokuapp.com/create/getCatalogElements', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetCatalogsService.prototype.getTopCatalog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://textilemanagementsystem.herokuapp.com/create/getTopCatalog', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetCatalogsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], GetCatalogsService);
    return GetCatalogsService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/get-catalogs.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantServicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MerchantServicesService = /** @class */ (function () {
    function MerchantServicesService(http) {
        this.http = http;
    }
    MerchantServicesService.prototype.getAgentsWaitingForApproval = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application-json');
        return this.http.get("https://textilemanagementsystem.herokuapp.com/merchants/getAgents")
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.changeAgentApprovalStatus = function (agent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application-json');
        console.log(agent);
        return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/changeAgentStatus', agent /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.getActiveAgents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application-json');
        return this.http.get("https://textilemanagementsystem.herokuapp.com/merchants/getActiveAgents")
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.assignAgent = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application-json');
        return this.http.post("https://textilemanagementsystem.herokuapp.com/merchants/assignAgents", order).
            map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.getCatalogWaitingList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/getWaitingCatalog', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.declineWaitinglistCatalog = function (catalog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/declineCatalog', catalog /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService.prototype.approveWaitinglistCatalog = function (catalog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/approveCatalog', catalog /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    MerchantServicesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], MerchantServicesService);
    return MerchantServicesService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/merchant-services.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceOrderService = /** @class */ (function () {
    function PlaceOrderService(http) {
        this.http = http;
    }
    PlaceOrderService.prototype.placeOrders = function (orderDetails) {
        console.log(orderDetails);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/place_order', orderDetails, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceOrderService.prototype.getAllOrdersForAgents = function (agent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
    };
    PlaceOrderService.prototype.getAllOrdersForCustomer = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
    };
    PlaceOrderService.prototype.getAllOrdersForMerchants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
    };
    PlaceOrderService.prototype.getActiveOrders = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/get_active_orders', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceOrderService.prototype.getPastOrders = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/get_order_history', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceOrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], PlaceOrderService);
    return PlaceOrderService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/place-order.service.js.map

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 204,
	"./ar-dz": 198,
	"./ar-dz.js": 198,
	"./ar-kw": 199,
	"./ar-kw.js": 199,
	"./ar-ly": 200,
	"./ar-ly.js": 200,
	"./ar-ma": 201,
	"./ar-ma.js": 201,
	"./ar-sa": 202,
	"./ar-sa.js": 202,
	"./ar-tn": 203,
	"./ar-tn.js": 203,
	"./ar.js": 204,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bn": 208,
	"./bn.js": 208,
	"./bo": 209,
	"./bo.js": 209,
	"./br": 210,
	"./br.js": 210,
	"./bs": 211,
	"./bs.js": 211,
	"./ca": 212,
	"./ca.js": 212,
	"./cs": 213,
	"./cs.js": 213,
	"./cv": 214,
	"./cv.js": 214,
	"./cy": 215,
	"./cy.js": 215,
	"./da": 216,
	"./da.js": 216,
	"./de": 219,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 219,
	"./dv": 220,
	"./dv.js": 220,
	"./el": 221,
	"./el.js": 221,
	"./en-au": 222,
	"./en-au.js": 222,
	"./en-ca": 223,
	"./en-ca.js": 223,
	"./en-gb": 224,
	"./en-gb.js": 224,
	"./en-ie": 225,
	"./en-ie.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 229,
	"./es-do": 228,
	"./es-do.js": 228,
	"./es.js": 229,
	"./et": 230,
	"./et.js": 230,
	"./eu": 231,
	"./eu.js": 231,
	"./fa": 232,
	"./fa.js": 232,
	"./fi": 233,
	"./fi.js": 233,
	"./fo": 234,
	"./fo.js": 234,
	"./fr": 237,
	"./fr-ca": 235,
	"./fr-ca.js": 235,
	"./fr-ch": 236,
	"./fr-ch.js": 236,
	"./fr.js": 237,
	"./fy": 238,
	"./fy.js": 238,
	"./gd": 239,
	"./gd.js": 239,
	"./gl": 240,
	"./gl.js": 240,
	"./gom-latn": 241,
	"./gom-latn.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 249,
	"./it.js": 249,
	"./ja": 250,
	"./ja.js": 250,
	"./jv": 251,
	"./jv.js": 251,
	"./ka": 252,
	"./ka.js": 252,
	"./kk": 253,
	"./kk.js": 253,
	"./km": 254,
	"./km.js": 254,
	"./kn": 255,
	"./kn.js": 255,
	"./ko": 256,
	"./ko.js": 256,
	"./ky": 257,
	"./ky.js": 257,
	"./lb": 258,
	"./lb.js": 258,
	"./lo": 259,
	"./lo.js": 259,
	"./lt": 260,
	"./lt.js": 260,
	"./lv": 261,
	"./lv.js": 261,
	"./me": 262,
	"./me.js": 262,
	"./mi": 263,
	"./mi.js": 263,
	"./mk": 264,
	"./mk.js": 264,
	"./ml": 265,
	"./ml.js": 265,
	"./mr": 266,
	"./mr.js": 266,
	"./ms": 268,
	"./ms-my": 267,
	"./ms-my.js": 267,
	"./ms.js": 268,
	"./my": 269,
	"./my.js": 269,
	"./nb": 270,
	"./nb.js": 270,
	"./ne": 271,
	"./ne.js": 271,
	"./nl": 273,
	"./nl-be": 272,
	"./nl-be.js": 272,
	"./nl.js": 273,
	"./nn": 274,
	"./nn.js": 274,
	"./pa-in": 275,
	"./pa-in.js": 275,
	"./pl": 276,
	"./pl.js": 276,
	"./pt": 278,
	"./pt-br": 277,
	"./pt-br.js": 277,
	"./pt.js": 278,
	"./ro": 279,
	"./ro.js": 279,
	"./ru": 280,
	"./ru.js": 280,
	"./sd": 281,
	"./sd.js": 281,
	"./se": 282,
	"./se.js": 282,
	"./si": 283,
	"./si.js": 283,
	"./sk": 284,
	"./sk.js": 284,
	"./sl": 285,
	"./sl.js": 285,
	"./sq": 286,
	"./sq.js": 286,
	"./sr": 288,
	"./sr-cyrl": 287,
	"./sr-cyrl.js": 287,
	"./sr.js": 288,
	"./ss": 289,
	"./ss.js": 289,
	"./sv": 290,
	"./sv.js": 290,
	"./sw": 291,
	"./sw.js": 291,
	"./ta": 292,
	"./ta.js": 292,
	"./te": 293,
	"./te.js": 293,
	"./tet": 294,
	"./tet.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 301,
	"./tzm-latn": 300,
	"./tzm-latn.js": 300,
	"./tzm.js": 301,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 305,
	"./uz-latn": 304,
	"./uz-latn.js": 304,
	"./uz.js": 305,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 656;


/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "#container {\r\n  margin: 20px;\r\n  width: 200px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n#container1{\r\n  margin: 20px;\r\n  width: 200px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "/*\n    DEMO STYLE\n*/\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background: #fafafa;\n}\n\np {\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999;\n}\n\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n.wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #7386D5;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n#sidebar.active {\n  margin-left: -250px;\n}\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #6d7fcc;\n}\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #47748b;\n}\n\n#sidebar ul p {\n  color: #fff;\n  padding: 10px;\n}\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff;\n}\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #6d7fcc;\n}\n\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\e259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em;\n}\na[aria-expanded=\"true\"]::before {\n  content: '\\e260';\n}\n\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc;\n}\n\nul.CTAs {\n  padding: 20px;\n}\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\n\na.download {\n  background: #fff;\n  color: #7386D5;\n}\n\na.article, a.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important;\n}\n\n\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px;\n  }\n  #sidebar.active {\n    margin-left: 0;\n  }\n  #sidebarCollapse span {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/** for circular div*/\r\n\r\n\r\n.circleBase {\r\n  border-radius: 50%;\r\n  behavior: url(PIE.htc); /* remove if you don't care about IE8 */\r\n}\r\n\r\n.type4 {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-left:10px;\r\n  margin-top:30px;\r\n  background-color: #C99C00;\r\n  background-image:url('http://fscomps.fotosearch.com/compc/CSP/CSP990/purple-silk-cloth-with-folds-picture__k10819537.jpg');\r\n  border: 2px solid white(49, 48, 48);\r\n}\r\n\r\n.type3 {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-left:10px;\r\n  margin-top:30px;\r\n  background-color: #C99C00;\r\n  background-image:url('https://cdn.shopify.com/s/files/1/2096/3029/products/Pink_Lemonade_2_530x@2x.jpg?v=1501392866');\r\n  border: 2px solid white(49, 48, 48);\r\n}\r\n\r\n.type2 {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-top:30px;\r\n  background: #C99C00;\r\n  background-image:url('https://thumb7.shutterstock.com/display_pic_with_logo/162030671/604487921/stock-photo-velvet-dress-material-cloth-texture-pattern-tailoring-stitching-concept-604487921.jpg');\r\n  border: 2px solid white(49, 48, 48);\r\n}\r\n\r\n.type1 {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-top:30px;\r\n  background: #C99C00;\r\n  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP');\r\n  border: 2px solid white(49, 48, 48);\r\n}\r\n\r\n/** for circular div*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*!* The side navigation menu *!*/\r\n/*.sidenav {*/\r\n/*height: 100%; !* 100% Full-height *!*/\r\n/*width: 0; !* 0 width - change this with JavaScript *!*/\r\n/*position: fixed; !* Stay in place *!*/\r\n/*z-index: 1; !* Stay on top *!*/\r\n/*top: 0; !* Stay at the top *!*/\r\n/*left: 0;*/\r\n/*background-color: #111; !* Black*!*/\r\n/*overflow-x: hidden; !* Disable horizontal scroll *!*/\r\n/*padding-top: 60px; !* Place content 60px from the top *!*/\r\n/*transition: 0.5s; !* 0.5 second transition effect to slide in the sidenav *!*/\r\n/*}*/\r\n\r\n/*!* The navigation menu links *!*/\r\n/*.sidenav a {*/\r\n/*padding: 8px 8px 8px 32px;*/\r\n/*text-decoration: none;*/\r\n/*font-size: 25px;*/\r\n/*color: #818181;*/\r\n/*display: block;*/\r\n/*transition: 0.3s;*/\r\n/*}*/\r\n\r\n/*!* When you mouse over the navigation links, change their color *!*/\r\n/*.sidenav a:hover {*/\r\n/*color: #f1f1f1;*/\r\n/*}*/\r\n\r\n/*!* Position and style the close button (top right corner) *!*/\r\n/*.sidenav .closebtn {*/\r\n/*position: absolute;*/\r\n/*top: 0;*/\r\n/*right: 25px;*/\r\n/*font-size: 36px;*/\r\n/*margin-left: 50px;*/\r\n/*}*/\r\n\r\n/*!* Style page content - use this if you want to push the page content to the right when you open the side navigation *!*/\r\n/*#main {*/\r\n/*transition: margin-left .5s;*/\r\n/*padding: 20px;*/\r\n/*}*/\r\n\r\n/*!* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) *!*/\r\n/*@media screen and (max-height: 450px) {*/\r\n/*.sidenav {padding-top: 15px;}*/\r\n/*.sidenav a {font-size: 18px;}*/\r\n/*}*/\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "#container {\r\n  margin: 20px;\r\n  width: 200px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "\n\n/** for circular div*/\n\n\n.circleBase {\n  border-radius: 50%;\n  behavior: url(PIE.htc); /* remove if you don't care about IE8 */\n}\n\n.type4 {\n  width: 250px;\n  height: 250px;\n  margin-left:10px;\n  margin-top:30px;\n  background-color: #C99C00;\n  background-image:url('http://fscomps.fotosearch.com/compc/CSP/CSP990/purple-silk-cloth-with-folds-picture__k10819537.jpg');\n  border: 2px solid white(49, 48, 48);\n}\n\n.type3 {\n  width: 250px;\n  height: 250px;\n  margin-left:10px;\n  margin-top:30px;\n  background-color: #C99C00;\n  background-image:url('https://cdn.shopify.com/s/files/1/2096/3029/products/Pink_Lemonade_2_530x@2x.jpg?v=1501392866');\n  border: 2px solid white(49, 48, 48);\n}\n\n.type2 {\n  width: 250px;\n  height: 250px;\n  margin-top:30px;\n  background: #C99C00;\n  background-image:url('https://thumb7.shutterstock.com/display_pic_with_logo/162030671/604487921/stock-photo-velvet-dress-material-cloth-texture-pattern-tailoring-stitching-concept-604487921.jpg');\n  border: 2px solid white(49, 48, 48);\n}\n\n.type1 {\n  width: 250px;\n  height: 250px;\n  margin-top:30px;\n  background: #C99C00;\n  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP');\n  border: 2px solid white(49, 48, 48);\n}\n\n/** for circular div*/\n\n\n\n\n\n\n\n\n/*!* The side navigation menu *!*/\n/*.sidenav {*/\n  /*height: 100%; !* 100% Full-height *!*/\n  /*width: 0; !* 0 width - change this with JavaScript *!*/\n  /*position: fixed; !* Stay in place *!*/\n  /*z-index: 1; !* Stay on top *!*/\n  /*top: 0; !* Stay at the top *!*/\n  /*left: 0;*/\n  /*background-color: #111; !* Black*!*/\n  /*overflow-x: hidden; !* Disable horizontal scroll *!*/\n  /*padding-top: 60px; !* Place content 60px from the top *!*/\n  /*transition: 0.5s; !* 0.5 second transition effect to slide in the sidenav *!*/\n/*}*/\n\n/*!* The navigation menu links *!*/\n/*.sidenav a {*/\n  /*padding: 8px 8px 8px 32px;*/\n  /*text-decoration: none;*/\n  /*font-size: 25px;*/\n  /*color: #818181;*/\n  /*display: block;*/\n  /*transition: 0.3s;*/\n/*}*/\n\n/*!* When you mouse over the navigation links, change their color *!*/\n/*.sidenav a:hover {*/\n  /*color: #f1f1f1;*/\n/*}*/\n\n/*!* Position and style the close button (top right corner) *!*/\n/*.sidenav .closebtn {*/\n  /*position: absolute;*/\n  /*top: 0;*/\n  /*right: 25px;*/\n  /*font-size: 36px;*/\n  /*margin-left: 50px;*/\n/*}*/\n\n/*!* Style page content - use this if you want to push the page content to the right when you open the side navigation *!*/\n/*#main {*/\n  /*transition: margin-left .5s;*/\n  /*padding: 20px;*/\n/*}*/\n\n/*!* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) *!*/\n/*@media screen and (max-height: 450px) {*/\n  /*.sidenav {padding-top: 15px;}*/\n  /*.sidenav a {font-size: 18px;}*/\n/*}*/\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "/** {*/\n  /*-moz-box-sizing: border-box;*/\n  /*-webkit-box-sizing: border-box;*/\n  /*box-sizing: border-box;*/\n  /*margin: 0;*/\n  /*padding: 0;*/\n/*}*/\n\n.item {\n  position: relative;\n\n  border: 1px solid #333;\n  margin: 2%;\n  overflow: hidden;\n  width: 400px;\n}\n.item img {\n  max-width: 100%;\n  transition: all 0.3s;\n}\n.item:hover img {\n  transform: scale(2.2);\n}\n"

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthserviceService = /** @class */ (function () {
    function AuthserviceService(http) {
        this.http = http;
    }
    AuthserviceService.prototype.registerAgent = function (agent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        console.log(agent);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/register', agent, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthserviceService.prototype.loginAgent = function (agent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/authenticate', agent, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthserviceService.prototype.getAgent = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/get_agent-profile', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthserviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], AuthserviceService);
    return AuthserviceService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/authservice.service.js.map

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/agent/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Agent Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Agent Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/profile']\"> <i class=\"menu-icon fa fa-laptop\"></i>Agent Profile</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/process']\"> <i class=\"menu-icon fa fa-th\"></i>Process Orders</a>\n          <a [routerLink] = \"['/agent/home/completedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Completed Orders</a>\n\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n<!-- Header-->\n<header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/agent/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n   </div>\n  </header>\n\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n       <!--for each product, this row will iterate-->\n       <div class=\"row\"  *ngFor=\"let order of orderItems; let i=index\">\n          <div class=\"col-sm-3\">\n            <img src=\"{{order.imageUrl}}\" height=\"170px\" width=\"170px\">\n          </div>\n          <div class=\"col-sm-2\">\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Product description</p>\n              {{order.catalog}}\n             </div>\n             <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Fabric Type</p>\n                {{order.clothName}}\n <!--dynamically needs to be populated-->\n              </div>\n         <!-- <div class=\"col-sm-2\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"silk\">Silk</option>\n              <option value=\"cotton\">Cotton</option>\n              <option value=\"handloom\">Handloom</option>\n              <option value=\"lace\">Lace</option>\n            </select></div>-->\n        <!--  <div class=\"col-sm-1\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n            </select></div>-->\n            <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Quantity</p>\n                {{order.length}}\n  <!--dynamically needs to be populated-->\n              </div>\n\n          <div class=\"col-sm-1\" >\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Price</p>\n              {{order.cost}}\n <!--dynamically needs to be populated-->\n            </div>\n            <div class=\"col-sm-1\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Current Status</p>\n                {{order.currentStatus}}\n   <!--dynamically needs to be populated-->\n              </div>\n              <div class=\"col-sm-1\" >\n                  <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Next Status</p>\n                  {{order.nextStatus}}\n     <!--dynamically needs to be populated-->\n                </div>\n            <div class=\"col-sm-2\">\n              <a class=\"btn .btn-primary\" style=\"margin-top:40px;height:50px;width:100%;background-color: #FFBF00;font-size: 16px\" (click)=\"update(order,order.statusForCustomer,i)\">Process Order</a>\n              <div id={{order.id.replace(order.id,i)}} lass=\"line\"></div>\n\n            </div>\n\n\n          </div>\n\n      </div>\n      <!--each product ends here-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n<!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/agent/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Agent Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Agent Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/profile']\"> <i class=\"menu-icon fa fa-laptop\"></i>Agent Profile</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/process']\"> <i class=\"menu-icon fa fa-th\"></i>Process Orders</a>\n          <a [routerLink] = \"['/agent/home/completedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Completed Orders</a>\n\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/agent/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n  </div>\n</header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n    </div>\n\n\n\n\n    <div class=\"jumbtron text-center\" >\n\n        <h1>Profile</h1>\n      <br>\n      <div class = \"row\">\n      </div>\n      <div class = \"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n          Agency Name :\n        </div>\n        <div class=\"col-md-4\">\n          {{agent.agency_name}}\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n          Name :\n        </div>\n        <div class=\"col-md-4\">\n          {{agent.name}}\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n          Email :\n        </div>\n        <div class=\"col-md-4\">\n          {{agent.email}}\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n          Address :\n        </div>\n        <div class=\"col-md-4\">\n          {{agent.address}}\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n          Registration Number :\n        </div>\n        <div class=\"col-md-4\">\n          {{agent.registration_number}}\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n\n\n\n\n    </div>\n\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/agent/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Agent Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Agent Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/profile']\"> <i class=\"menu-icon fa fa-laptop\"></i>Agent Profile</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/process']\"> <i class=\"menu-icon fa fa-th\"></i>Process Orders</a>\n          <a [routerLink] = \"['/agent/home/completedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Completed Orders</a>\n\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/agent/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"alert  alert-success alert-dismissible fade show\" role=\"alert\">\n        <span class=\"badge badge-pill badge-success\">Success</span> Welcome Agent.\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class= \"row\" style=\"margin-top:10px\">\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/agent/home/profile']\" style=\"height:150px;width:95%;background-color:#adebeb;margin-top:5px;margin-left:2px;\">\n            <img src = \"https://images.vexels.com/media/users/3/144178/isolated/lists/3d71188c55922ea5cef056f9aeb042f2-doctor-profile-icon.png\" style=\"margin-left:12px;margin-top:10px;\" height=\"120px\" width=\"80%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/agent/home/profile']\" style=\"height:60px;width:95%;background-color:#33cccc;margin-left:2px;\">\n            <p style=\"margin-left:50px;margin-top:10px;color: white;font-size: 20px;\">Agent profile</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/agent/home/receivedOrders']\" style=\"height:150px;width:95%;background-color:#ffe0b3;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://icons.iconarchive.com/icons/tpdkdesign.net/refresh-cl/256/System-Package-icon.png\" style=\"margin-left:20px;margin-top:10px;\" height=\"120px\" width=\"80%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/agent/home/receivedOrders']\" style=\"height:60px;width:95%;background-color:#ffc266;margin-left:2px;\">\n            <p style=\"margin-left:30px;color: white;margin-top:10px;font-size: 20px;\">Accept order</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/agent/home/process']\" style=\"height:150px;width:95%;background-color:#b3ecff;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://www.splashcpq.com/wp-content/uploads/2017/09/icon-order-fulfillment-blue-300x234.png\" style=\"margin-left:12px;margin-top:10px;\" height=\"120px\" width=\"90%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/agent/home/process']\" style=\"height:60px;width:95%;background-color:#4dd2ff;margin-left:2px;\">\n            <p style=\"margin-left:20px;margin-top:10px;color: white;font-size: 20px;\">Process Orders</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/agent/home/completedOrders']\" style=\"height:150px;width:95%;background-color:#ffb3b3;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://pluspng.com/img-png/png-debt-debt-collection-01-png-1000.png\" style=\"margin-left:20px;margin-top:10px;\" height=\"120px\" width=\"75%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/agent/home/completedOrders']\" style=\"height:60px;width:95%;background-color:#ff8080;margin-left:2px;\">\n            <p style=\"margin-left:30px;margin-top:10px;color: white;font-size: 20px;\">Completed Orders    </p>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n\n\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n        <!--  <a href=\"index.html\"> <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>-->\n        </li>\n      <!--  <h3 class=\"menu-title\">Order Console</h3>--><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/guest/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <!--  <ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n              <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n              <li><i class=\"fa fa-share-quare-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n              <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n            </ul>\n          <li class=\"menu-item-has-children dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n            <ul class=\"sub-menu children dropdown-menu\">\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n            </ul>-->\n          <!--  </li>-->\n          <!--  <li class=\"menu-item-has-children dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n              <ul class=\"sub-menu children dropdown-menu\">\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n              </ul>\n            </li>\n            <li class=\"menu-item-has-children dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n            </li>\n            <li class=\"menu-item-has-children dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n            </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n          <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n       </div>\n    </div>\n  </header>\n\n  <table id = \"login\" style=\"width:80%;margin-top:30px\">\n    <tr>\n\n      <td id=\"login_form\" >\n        <form (submit)=\"onLoginSubmit()\">\n          <table id=\"form\">\n            <th><h3 style=\"margin-left:250px;color:#2C333B;font-family:Century Gothic;font-size: 80px; font-weight:bold\">Login</h3>\n            </th>\n            <tr >\n              <td>\n                <label for=\"username\" style=\"margin-left:200px;margin-top:30px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Username*</label>\n              </td>\n              <td>\n                <input name=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\" style=\"width:100%; margin-top:30px;margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\"  value=\"\" maxlength=\"100\" />\n              </td>\n            </tr>\n            <tr >\n              <td>\n                <label for=\"password\" style=\"font-family:Century Gothic;margin-left:200px;color:#2C333B;float:left; width:100%; margin-bottom: 10px; margin-top:20px;font-size: 20px\">Password*</label>\n              </td>\n              <td>\n                <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\" style=\"width:100%; margin-bottom: 10px;margin-top:20px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n              </td>\n            </tr>\n            <tr id=\"buttons\" >\n              <td >\n                <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:80px;width:100px;margin-left:270px;background-color:#BAD26E\" value=\"Login\">\n              </td>\n              <td>\n                <a class=\"btn .btn-primary\" [routerLink] = \"['/agent/register']\"  style=\"margin-top:85px;width:100px;background-color:tomato\">Sign Up!</a>\n\n\n              </td>\n            </tr>\n          </table>\n        </form>\n      </td>\n    </tr>\n  </table>\n\n\n\n\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <!--  <li class=\"active\">\n            <a href=\"index.html\"> <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n          </li>-->\n        <!--   <h3 class=\"menu-title\">Order Console</h3>--><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <!--   <ul class=\"sub-menu children dropdown-menu\">\n               <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n               <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n               <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n               <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n             </ul>-->\n          <!--  <li class=\"menu-item-has-children dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          -->  <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n          <!--   </li>\n             <li class=\"menu-item-has-children dropdown\">\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n               <ul class=\"sub-menu children dropdown-menu\">\n                 <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n                 <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n               </ul>\n             </li>\n             <li class=\"menu-item-has-children dropdown\">\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n             </li>\n             <li class=\"menu-item-has-children dropdown\">\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n         -->    </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n    </div>\n  </header>\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n\n      <table id = \"registration\" style=\"width:80%;\">\n        <tr>\n\n          <td id=\"registration_form\" >\n            <form (submit)=\"onRegisterSubmit()\">\n              <table id=\"form\">\n                <th><h3 style=\"margin-left:20px;color:#2C333B;font-family:Century Gothic;font-size: 40px; font-weight:bold\">Register</h3>\n                </th>\n                <tr >\n                  <td>\n                    <label for=\"agency_name\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Agency&nbsp;Name*</label>\n                  </td>\n                  <td>\n                    <input name=\"agency_name\" [(ngModel)]=\"agency_name\" type=\"text\" id=\"agency_name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"email\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Email*</label>\n                  </td>\n                  <td>\n                    <input name=\"email\" [(ngModel)]=\"email\" type=\"text\" id=\"email\"  style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"name\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Name</label>\n                  </td>\n                  <td>\n                    <input name=\"name\" [(ngModel)]=\"name\" type=\"text\" id=\"name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"address\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Address*</label>\n                  </td>\n                  <td>\n                    <input name=\"address\" [(ngModel)]=\"address\" type=\"text\" id=\"address\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"registration_number\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Registration Number*</label>\n                  </td>\n                  <td>\n                    <input name=\"registration_number\" [(ngModel)]=\"registration_number\" type=\"text\" id=\"registration_number\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"username\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Username*</label>\n                  </td>\n                  <td>\n                    <input name=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"password\" style=\"margin-left:200px;margin-top:10px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Password*</label>\n                  </td>\n                  <td>\n                    <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr id=\"buttons\" >\n                  <td >\n                    <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:330px;background-color:#f47d39\" value=\"Submit\">\n                  </td>\n                </tr>\n              </table>\n            </form>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/agent/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Agent Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Agent Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/profile']\"> <i class=\"menu-icon fa fa-laptop\"></i>Agent Profile</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/process']\"> <i class=\"menu-icon fa fa-th\"></i>Process Orders</a>\n          <a [routerLink] = \"['/agent/home/completedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Completed Orders</a>\n\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n<!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/agent/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n       <!--for each product, this row will iterate-->\n       <div class=\"row\"  *ngFor=\"let order of orderItems; let i=index\">\n          <div class=\"col-sm-3\">\n            <img src=\"{{order.imageUrl}}\" height=\"170px\" width=\"170px\">\n          </div>\n          <div class=\"col-sm-2\">\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Product description</p>\n              {{order.catalog}}\n             </div>\n             <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Fabric Type</p>\n                {{order.clothName}}\n <!--dynamically needs to be populated-->\n              </div>\n         <!-- <div class=\"col-sm-2\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"silk\">Silk</option>\n              <option value=\"cotton\">Cotton</option>\n              <option value=\"handloom\">Handloom</option>\n              <option value=\"lace\">Lace</option>\n            </select></div>-->\n        <!--  <div class=\"col-sm-1\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n            </select></div>-->\n            <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Quantity</p>\n                {{order.length}}\n  <!--dynamically needs to be populated-->\n              </div>\n\n          <div class=\"col-sm-1\" >\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Price</p>\n              {{order.cost}}\n <!--dynamically needs to be populated-->\n            </div>\n            <div class=\"col-sm-1\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Current Status</p>\n                {{order.statusForAgent}}\n   <!--dynamically needs to be populated-->\n              </div>\n\n            <div class=\"col-sm-2\">\n\n            </div>\n\n\n          </div>\n\n      </div>\n      <!--each product ends here-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n<!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/agent/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Agent Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Agent Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/profile']\"> <i class=\"menu-icon fa fa-laptop\"></i>Agent Profile</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/home/process']\"> <i class=\"menu-icon fa fa-th\"></i>Process Orders</a>\n          <a [routerLink] = \"['/agent/home/completedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Completed Orders</a>\n\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/agent/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/agent/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n</div>\n<div class=\"jumbotron\">\n      <label style=\"text-align: center\">\n        <h2>\n          Accept Orders From Merchant :\n        </h2>\n      </label>\n      <div class=\"row\" *ngFor=\"let item of orders\" style=\"margin-top: 30px\">\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow: hidden;\">\n          <img class=\"card-img-top\" src=\"{{item.imageUrl}}\" alt=\"Card image cap\"  height=\"200\"\n               width=\"200\"  >\n        </div>\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px\" align=\"center\">\n          <h5 style=\"color: deepskyblue\">Type of Cloth :\n          </h5>\n          <div class=\"row\" style=\"text-align: center; margin-left: 40px; \" align=\"center\">\n            <strong><h4>Silk</h4></strong>\n          </div>\n        </div>\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; text-align: center\" align=\"center\">\n          <div class=\"row\">\n            <h5 style=\"color: deepskyblue\">Cloth Length :</h5>\n          </div>\n          <div class=\"row\" style=\"text-align: center; margin-left: 20px\" align=\"center\">\n            <h4>{{item.length}}</h4>\n          </div>\n          <div class=\"row\">\n\n          </div>\n\n        </div>\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px\" align=\"center\">\n          <div class=\"row\">\n            <h5 style=\"color: deepskyblue\">Total Cost : </h5>\n          </div>\n          <div class=\"row\" style=\"text-align: center; margin-left: 20px\" align=\"center\">\n            <h4>{{item.cost}}</h4>\n          </div>\n          <div class=\"row\">\n          </div>\n\n        </div>\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; \" align=\"center\">\n          <a class=\"btn btn-primary\" (click)=\"acceptOrder(item)\">Accept</a>\n        </div>\n        <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; \" align=\"center\">\n          <a class=\"btn btn-primary\" (click)=\"declineOrder(item)\">Decline</a>\n        </div>\n      </div>\n    </div>\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<div>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n\n</div>\n<app-footer-component></app-footer-component>\n"

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetOrdersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetOrdersService = /** @class */ (function () {
    function GetOrdersService(http) {
        this.http = http;
    }
    GetOrdersService.prototype.getOrdersForMerchant = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/orderReceivedForMerchant' /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    GetOrdersService.prototype.getAllOrdersForMerchant = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/allordersForMerchant' /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    GetOrdersService.prototype.getOrdersForAgent = function (getOrderparam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/orderforagents', getOrderparam /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    GetOrdersService.prototype.getOrdersForAgentWaiting = function (getOrderparam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/orderforagentsWaiting', getOrderparam /*,{headers:headers}*/)
            .map(function (res) { return res.json(); });
    };
    GetOrdersService.prototype.acceptDeclineOrder = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/acceptDeclineOrder', item)
            .map(function (res) { return res.json(); });
    };
    GetOrdersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], GetOrdersService);
    return GetOrdersService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/get-orders.service.js.map

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer font-small stylish-color-dark pt-4 mt-4\" style=\"background-color: #2C3E50;height:600px\">\n\n  <!--Footer Links-->\n  <div class=\"container text-center text-md-left\">\n    <div class=\"row\">\n\n      <!--First column-->\n      <div class=\"col-md-4\">\n        <img src=\"http://pngriver.com/wp-content/uploads/2018/03/Download-Welcome-PNG-Transparent-Picture-For-Designing-Projects.png\" [routerLink] = \"['/merchant/login']\" height = 60; width= 150>\n        <p style=\"font-family:mistral;font-size:20px;color:white\">Our products are inspired by the people and world around us. Beautiful, high quality goods that are designed especially for your requirement. Discover our story and meet the people that make our brand what it is!\n        </p>\n      </div>\n      <!--/.First column-->\n\n      <hr class=\"clearfix w-100 d-md-none\">\n\n      <!--Second column-->\n\n      <div class=\"col-md-2 mx-auto\">\n        <h5 class=\"text-uppercase mb-4 mt-3 font-weight-bold\" style=\"font-family:mistral;font-size:20px;color:white\">Blogs</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <img src=\"https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg\" height=\"200\" width=200>\n          </li>\n\n        </ul>\n      </div>\n      <!--/.Second column-->\n\n      <hr class=\"clearfix w-100 d-md-none\">\n\n      <!--Third column-->\n      <!--<div class=\"col-md-2 mx-auto\">-->\n      <!--<h5 class=\"text-uppercase mb-4 mt-3 font-weight-bold\" style=\"font-family:mistral;font-size:20px;color:white\">Newsletter</h5>-->\n      <!--<ul class=\"list-unstyled\">-->\n      <!--<li>-->\n      <!--<p style=\"font-family:mistral;font-size:20px;color:white\">Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.</p>-->\n      <!--</li>-->\n      <!--<li>-->\n      <!--<div class=\"cell\" style=\"float:left\">-->\n      <!--<input type=\"email\" id = dummyEmail placeholder=\"Email\" style=\"float:left;width:100px;\">-->\n      <!--</div>-->\n      <!--<div id = \"go\" style=\"float:left\">-->\n      <!--<button type=\"submit\" class=\"button\" style=\"background-color: #7ec9e0;-->\n      <!--border-color: #7ec9e0;-->\n      <!--color: #ffffff\">GO</button>-->\n      <!--</div>-->\n\n      <!--</li>-->\n\n      <!--</ul>-->\n      <!--</div>-->\n      <!--/.Third column-->\n\n      <hr class=\"clearfix w-100 d-md-none\">\n\n\n    </div>\n  </div>\n  <!--/.Footer Links-->\n\n  <!--&lt;!&ndash;Social buttons&ndash;&gt;-->\n  <!--<div class=\"text-center\" style=\"margin-top:50px\">-->\n  <!--<ul class=\"list-unstyled list-inline\">-->\n  <!--<li class=\"list-inline-item\">-->\n  <!--<a class=\"btn-floating btn-sm btn-fb mx-1\">-->\n  <!--<i class=\"fa fa-facebook\">-->\n  <!--<img src=\"https://mcnarymarketing.com/wp-content/uploads/2017/08/if_facebook_circle_color_107175.png\" height=\"60\" width=\"60\">-->\n  <!--</i>-->\n  <!--</a>-->\n  <!--</li>-->\n  <!--<li class=\"list-inline-item\">-->\n  <!--<a class=\"btn-floating btn-sm btn-tw mx-1\">-->\n  <!--<i class=\"fa fa-twitter\">-->\n  <!--<img src=\"http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png\" height=\"50\" width=\"50\">-->\n  <!--</i>-->\n  <!--</a>-->\n  <!--</li>-->\n  <!--<li class=\"list-inline-item\">-->\n  <!--<a class=\"btn-floating btn-sm btn-gplus mx-1\">-->\n  <!--<i class=\"fa fa-google-plus\">-->\n  <!--<img src=\"http://sguru.org/wp-content/uploads/2018/01/instagram-colourful-icon.png\" height=\"50\" width=\"50\">-->\n\n  <!--</i>-->\n  <!--</a>-->\n  <!--</li>-->\n  <!--<li class=\"list-inline-item\">-->\n  <!--<a class=\"btn-floating btn-sm btn-li mx-1\">-->\n  <!--<i class=\"fa fa-linkedin\">-->\n  <!--<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/YouTube_play_button_circular_%282013-2017%29.svg/2000px-YouTube_play_button_circular_%282013-2017%29.svg.png\" height=\"50\" width=\"50\">-->\n\n  <!--</i>-->\n  <!--</a>-->\n  <!--</li>-->\n  <!--<li class=\"list-inline-item\">-->\n  <!--<a class=\"btn-floating btn-sm btn-dribbble mx-1\">-->\n  <!--<i class=\"fa fa-dribbble\"> </i>-->\n  <!--</a>-->\n  <!--</li>-->\n  <!--</ul>-->\n  <!--</div>-->\n  <!--/.Social buttons-->\n\n\n\n</footer>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a> <i class=\"menu-icon fa fa-dashboard\"></i>Guest Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/guest/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><iclass=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n          <a [routerLink]=\"['/']\"> <i class=\"menu-icon fa fa-laptop\"></i>Home</a>\n\n\n\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-9\">-->\n        <!--</div>-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a class=\"btn btn-primary\" [routerLink] = \"['/user/login']\" style=\"margin-right: 5px\" >-->\n            <!--Checkout-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n\n      <div class=\"jumbotron\" style=\"color: #7386D5\">\n        <div class=\"row\" align=\"center\">\n          <a class=\"botton\" [routerLink] = \"['/user/login']\" style=\"margin-left: 300px \">\n            <h4 style=\"text-align: center\">Don't like our designs??..  Design your own cloth...</h4>\n          </a>\n        </div>\n      </div>\n      <div class=\"jumbotron\" *ngFor=\"let catalog of catalogList; let  i= index;\" >\n        <div  class=\"row\" style=\"text-align: center\" align=\"center\">\n\n          <div class=\"col-md-5\">\n            <div class=\"item\" >\n              <img class=\"card-img-top\" src=\"{{catalog.imageURL}}\"  height=\"300\"\n                   width=\"300\">\n\n              <div class=\"item-overlay top\"></div>\n            </div>\n\n\n            <!--<div class=\"zoom\">-->\n            <!--<img class=\"card-img-top\" src=\"https://www.earlypiano.co.uk/wp-content/uploads/2013/02/Worsted-Hitchpin-Cloth.jpg\" alt=\"Card image cap\"  height=\"300\"-->\n            <!--width=\"300\"  >-->\n            <!--</div>-->\n\n          </div>\n\n          <div class=\"col-md-4\">\n            <br><br>\n            <div class=\"row\" style=\"text-align: center\" align=\"center\">\n              <div class=\"col-md-5\" align=\"left\">\n                <h4><strong>Title :</strong></h4>\n              </div>\n              <div class=\"col-md-7\" align=\"left\">\n                <h4><strong>{{catalog.title}}</strong></h4>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong>Description :</strong></h5>\n              </div>\n\n              <div class=\"col-md-7\" align=\"left\">\n                <p>\n                  {{catalog.desc}}\n                </p>\n              </div>\n            </div>\n\n\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong> Enter Cloth&nbsp;Length :</strong></h5>\n              </div>\n              <div class=\"col-md-5\">\n                <input name=\"cloth_length_{{i}}\" [(ngModel)]=\"cloth_length[i]\" type=\"text\" id=\"agency_name_{{i}}\"\n                       style=\"width:50%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\"\n                       value=\"\" maxlength=\"50\" />\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong> Select Cloth Type :</strong></h5>\n              </div>\n\n              <div class=\"col-md-7\" align=\"left\">\n                <p>\n                  <select  name=\"selectedItem_{{i}}\" (change)=\"updatePrice($event.target.value,i)\" required>\n                    <option *ngFor=\"let clothType of clothtypes; let j = index\"   [ngValue]=\"clothType\">\n                      {{clothType.cloth}}\n                    </option>\n                  </select>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong>  Cost per Unit:</strong></h5>\n              </div>\n              <label id=\"cost_{{i}}\">{{cost[i]}}</label>\n              <div class=\"col-md-7\" align=\"left\"></div>\n            </div>\n\n          </div>\n          <div class=\"col-md-3\">\n            <br><br><br><br>\n            <a class=\"btn btn-primary\" style=\"margin-left: 50px \" [routerLink] = \"['/user/login']\">Add to cart</a>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!--<div class=\"jumbotron\">-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-4\" *ngFor=\"let catalog of catalogList; let  i= index;\" style=\"width: 50%; overflow: hidden;\">-->\n      <!--&lt;!&ndash;<div style=\"display: inline-block\">&ndash;&gt;-->\n      <!--<div style=\"width: 800px; float: left;\">-->\n      <!--<div class=\"card\" style=\" margin-bottom: 30px; display: flex; flex-wrap: wrap; width: 18rem;\">-->\n      <!--<img class=\"card-img-top\" src=\"{{catalog.imageURL}}\" alt=\"Card image cap\"  height=\"300\"-->\n      <!--width=\"300\"  >-->\n      <!--<div class=\"card-body\" >-->\n      <!--<h5 class=\"card-title\">{{catalog.title}}</h5>-->\n      <!--<p class=\"card-text\" style=\" height:50px\">{{catalog.desc}} </p>-->\n      <!--<p class=\"card-text\"> Per inch cost is {{catalog.unitLengthCost}} $</p>-->\n      <!--<p class=\"card-text\"><label>Cloth&nbsp;Length : </label>-->\n      <!--<input name=\"cloth_length_{{i}}\" [(ngModel)]=\"cloth_length[i]\" type=\"text\" id=\"agency_name_{{i}}\"-->\n      <!--style=\"width:50%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\"-->\n      <!--value=\"\" maxlength=\"50\" /> </p>-->\n      <!--</div>-->\n      <!--<a class=\"btn btn-primary\" style=\"margin-left: 50px \" (click)=\"addToCart(catalog,i)\">Add to cart</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\"></a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a href=\"index.html\"> <i class=\"menu-icon fa fa-dashboard\"></i>TMS </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/guest/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!-- <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n             <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n             <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n             <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n          <!-- <li class=\"menu-item-has-children dropdown\">\n            <a  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"  aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n           <ul class=\"sub-menu children dropdown-menu\">\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n                <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-item-has-children dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n            <ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-item-has-children dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n          </li>\n          <li class=\"menu-item-has-children dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n          </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n\n\n\n    </div>\n  </header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n      <div class=\"container\" >\n        <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n          The most trending Designs\n          <a style=\"color:grey;margin-left:10px;\" [routerLink] = \"['/guest/viewcatalog']\">View All</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <angular-image-slider [images]=\"imagesUrl\" style=\"margin-top:25px;width:100%;\" height=50px></angular-image-slider>\n      </div>\n      <!------ Square divs ---------->\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n\n      </div>\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n        Available Cloth Types\n      </div>\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n\n      </div>\n      <div class= \"row\" style=\"margin-top:10px\">\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #82D8E3;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">SILK</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://1.bp.blogspot.com/-mXOCFXUFzwg/WQw2S7yMojI/AAAAAAAABk0/SYPq36aIUmAP6aF9Ce7rNHbe7abvUGJ_wCLcB/s1600/94.png\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #ADE422;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">COTTON</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://d1a6t1943usoj7.cloudfront.net/v1/dc944e68-2f4a-4971-85ae-a3f8341dfa12/w756/konacottonfabricbytheyard_aiid1873077.jpg\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #FFA724;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">HANDLOOM</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://i.pinimg.com/originals/4d/06/79/4d0679652172179be3e005f356724ec4.jpg\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color: #FF5252;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">LACE</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://img.etsystatic.com/il/28efb8/1146107452/il_570xN.1146107452_34uc.jpg?version=0\"  height= \"230px\" width = \"90%\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\" style=\"height:12px;font-size:12px\">\n    <div class=\"container\">\n      <a href=\"../\" class=\"navbar-brand\" style=\"font-size:12px\">Customize, Shop and Love!</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav\" >\n\n\n          <li class=\"nav-item dropdown\">\n            <div class=\"dropdown-menu\" aria-labelledby=\"download\">\n              <a class=\"dropdown-item\" href=\"https://jsfiddle.net/bootswatch/jmg3gykg/\">test</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"../4/flatly/bootstrap.min.css\">bootstrap.min.css</a>\n              <a class=\"dropdown-item\" href=\"../4/flatly/bootstrap.css\">bootstrap.css</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"../4/flatly/_variables.scss\">_variables.scss</a>\n              <a class=\"dropdown-item\" href=\"../4/flatly/_bootswatch.scss\">_bootswatch.scss</a>\n            </div>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav ml-auto\">\n\n\n          <li class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact : true}\">\n            <a class=\"nav-link\" [routerLink] = \"['']\" style=\"margin-left:500px\">Home</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink] = \"['']\" style=\"margin-left:30px\">View Catalog  </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink] = \"['']\" style=\"margin-left:30px\">Test </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink] = \"['/user/login']\" style=\"margin-left:30px\">Login </a>\n          </li>\n\n        </ul>\n\n      </div>\n    </div>\n  </div>\n  <div id = \"stylish_font\" style=\"float:left;margin-left:20px;font-family: 'Segoe Script';font-size: 22px\" ><b>Textile Management System</b>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\r\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\r\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\r\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <title>TMS</title>\r\n  <meta name=\"description\" content=\"TMS\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\r\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\r\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\r\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\r\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\r\n\r\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\r\n\r\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\r\n\r\n</head>\r\n<body>\r\n\r\n\r\n<!-- Left Panel -->\r\n\r\n<aside id=\"left-panel\" class=\"left-panel\">\r\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <i class=\"fa fa-bars\"></i>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\r\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\r\n    </div>\r\n\r\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\">\r\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\r\n        </li>\r\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\r\n        <li class=\"menu-item-has-children dropdown\">\r\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\r\n        <li class=\"menu-item-has-children dropdown\">\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\r\n          <ul class=\"sub-menu children dropdown-menu\">\r\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\r\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"menu-item-has-children dropdown\">\r\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\r\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\r\n\r\n        </li>\r\n        <li>\r\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\r\n        </li>\r\n        <li class=\"menu-item-has-children dropdown\">\r\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </nav>\r\n</aside><!-- /#left-panel -->\r\n\r\n<!-- Left Panel -->\r\n\r\n<!-- Right Panel -->\r\n\r\n<div id=\"right-panel\" class=\"right-panel\">\r\n\r\n\r\n\r\n  <!-- Header-->\r\n  -<header id=\"header\" class=\"header\">\r\n\r\n\r\n\r\n  <div class=\"header-menu\"  style=\"height:30px\">\r\n    <div class=\"col-sm-7\">\r\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n\r\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</header>\r\n\r\n\r\n\r\n  <!--   <div class=\"col-sm-7\">\r\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\r\n   <div class=\"header-left\">\r\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\r\n        <div class=\"form-inline\">\r\n          <form class=\"search-form\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\r\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\r\n          </form>\r\n        </div>\r\n\r\n       <div class=\"dropdown for-notification\">\r\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-bell\"></i>\r\n            <span class=\"count bg-danger\">5</span>\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\r\n            <p class=\"red\">You have 3 Notification</p>\r\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\r\n              <i class=\"fa fa-check\"></i>\r\n              <p>Server #1 overloaded.</p>\r\n            </a>\r\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\r\n              <i class=\"fa fa-info\"></i>\r\n              <p>Server #2 overloaded.</p>\r\n            </a>\r\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\r\n              <i class=\"fa fa-warning\"></i>\r\n              <p>Server #3 overloaded.</p>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"dropdown for-message\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\r\n                  id=\"message\"\r\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"ti-email\"></i>\r\n            <span class=\"count bg-primary\">9</span>\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\r\n            <p class=\"red\">You have 4 Mails</p>\r\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\r\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\r\n              <span class=\"message media-body\">\r\n                                  <span class=\"name float-left\">Jonathan Smith</span>\r\n                                  <span class=\"time float-right\">Just now</span>\r\n                                      <p>Hello, this is an example msg</p>\r\n                              </span>\r\n            </a>\r\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\r\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\r\n              <span class=\"message media-body\">\r\n                                  <span class=\"name float-left\">Jack Sanders</span>\r\n                                  <span class=\"time float-right\">5 minutes ago</span>\r\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\r\n                              </span>\r\n            </a>\r\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\r\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\r\n              <span class=\"message media-body\">\r\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\r\n                                  <span class=\"time float-right\">10 minutes ago</span>\r\n                                      <p>Hello, this is an example msg</p>\r\n                              </span>\r\n            </a>\r\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\r\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\r\n              <span class=\"message media-body\">\r\n                                  <span class=\"name float-left\">Rachel Santos</span>\r\n                                  <span class=\"time float-right\">15 minutes ago</span>\r\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\r\n                              </span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-5\">\r\n      <div class=\"user-area dropdown float-right\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\r\n        </a>\r\n\r\n        <div class=\"user-menu dropdown-menu\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\r\n\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\r\n\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\r\n\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"language-select dropdown\" id=\"language-select\">\r\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          <i class=\"flag-icon flag-icon-us\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\r\n          <div class=\"dropdown-item\">\r\n            <span class=\"flag-icon flag-icon-fr\"></span>\r\n          </div>\r\n          <div class=\"dropdown-item\">\r\n            <i class=\"flag-icon flag-icon-es\"></i>\r\n          </div>\r\n          <div class=\"dropdown-item\">\r\n            <i class=\"flag-icon flag-icon-us\"></i>\r\n          </div>\r\n          <div class=\"dropdown-item\">\r\n            <i class=\"flag-icon flag-icon-it\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</header>-->\r\n\r\n\r\n  <div class=\"breadcrumbs\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"page-header float-left\">\r\n        <div class=\"page-title\">\r\n          <!--<h1>Dashboard</h1>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"page-header float-right\">\r\n        <div class=\"page-title\">\r\n          <ol class=\"breadcrumb text-right\">\r\n            <li class=\"active\"></li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content mt-3\">\r\n\r\n    <div class=\"col-sm-12\">\r\n\r\n      <!------ Banner picture ---------->\r\n      <!--<div class=\"container\" >\r\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\r\n   </div>-->\r\n\r\n      <!--Slider-->\r\n\r\n\r\n\r\n\r\n      <!------ Square divs ---------->\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"container\" >\r\n      <script src=\"node_modules/chart.js/src/chart.js\"></script>\r\n      <!--<script src=\"node_modules/chart.js/src/chart.js\"></script>\r\n      <script src=\"../../../assets/js/scripts.js\"></script>\r\n\r\n\r\n      <div *ngIf=\"chart\">\r\n        <canvas id=\"canvas\">{{ chart }}</canvas>\r\n      </div>\r\n      -->\r\n      <div>\r\n        <div style=\"display: block\">\r\n          <canvas baseChart\r\n                  [datasets]=\"barChartData\"\r\n                  [labels]=\"barChartLabels\"\r\n                  [options]=\"barChartOptions\"\r\n                  [legend]=\"barChartLegend\"\r\n                  [chartType]=\"barChartType\"\r\n                  [colors]=\"barChartColors\"\r\n                  (chartHover)=\"chartHovered($event)\"\r\n                  (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <button [routerLink] = \"['./']\">Update</button>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n\r\n\r\n    <!--/.col-->\r\n\r\n\r\n    <!--/.col-->\r\n\r\n\r\n\r\n  </div> <!-- .content -->\r\n</div><!-- /#right-panel -->\r\n\r\n<!-- Right Panel -->\r\n\r\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\r\n<script src=\"assets/js/plugins.js\"></script>\r\n<script src=\"assets/js/main.js\"></script>\r\n\r\n\r\n\r\n\r\n\r\n<script>\r\n  ( function ( $ ) {\r\n    \"use strict\";\r\n\r\n    jQuery( '#vmap' ).vectorMap( {\r\n      map: 'world_en',\r\n      backgroundColor: null,\r\n      color: '#ffffff',\r\n      hoverOpacity: 0.7,\r\n      selectedColor: '#1de9b6',\r\n      enableZoom: true,\r\n      showTooltip: true,\r\n      values: sample_data,\r\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\r\n      normalizeFunction: 'polynomial'\r\n    } );\r\n  } )( jQuery );\r\n</script>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n    </div>\n\n    <div class=\"container\" >\n      <h4>Awaiting Approvals</h4>\n\n      <div class=\"content mt-3\">\n\n\n        <div class=\"col-sm-12\">\n\n\n\n          <table class=\"table\">\n\n            <thead class=\"thead-dark\">\n\n            <tr>\n\n              <th scope=\"col\">#</th>\n\n              <th scope=\"col\">Agent Name</th>\n\n              <th scope=\"col\">Agency Name</th>\n\n              <th scope=\"col\">Registration Number</th>\n\n              <th scope=\"col\">Approval</th>\n\n              <th scope=\"col\">Decline</th>\n\n            </tr>\n\n            </thead>\n\n            <tbody *ngFor=\"let agent of agentsList;let i = index;\">\n\n            <tr>\n\n              <th scope=\"row\">1</th>\n\n\n              <td>{{agent.name}}</td>\n\n              <td>{{agent.agency_name}}</td>\n\n              <td>{{agent.registration_number}}</td>\n\n              <td>{{agent.totalCost}}</td>\n\n              <td><button class=\"btn btn-primary\" (click)=\"acceptAgent(agents)\">Approve</button></td>\n\n              <td><button class=\"btn btn-primary\" (click)=\"deleteItem(agents)\">Decline</button></td>\n\n            </tr>\n\n            </tbody>\n\n          </table>\n\n        </div>\n      </div>\n    </div>\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n\n\n      <div class=\"jumbotron\">\n        <label style=\"text-align: center\">\n          <h2>\n            Design requested from customer :\n          </h2>\n        </label>\n        <div class=\"row\" *ngFor=\"let catalog of catalogList;let i=index;\" style=\"margin-top: 30px\">\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow: hidden;\">\n            <img class=\"card-img-top\" src=\"{{catalog.imageURL}}\"  height=\"200\"\n                 width=\"200\"  >\n          </div>\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px\" align=\"center\">\n            <h5 style=\"color: deepskyblue\">Name :\n            </h5>\n            <div class=\"row\" style=\"text-align: center; margin-left: 40px; \" align=\"center\">\n              <strong>{{catalog.title}}</strong>\n            </div>\n          </div>\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; text-align: center\" align=\"center\">\n            <div class=\"row\">\n              <h5 style=\"color: deepskyblue\">Description :</h5>\n            </div>\n            <div class=\"row\" style=\"text-align: center; margin-left: 20px\" align=\"center\">\n              {{catalog.desc}}\n            </div>\n            <div class=\"row\">\n\n            </div>\n\n          </div>\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px\" align=\"center\">\n            <div class=\"row\">\n              <h5 style=\"color: deepskyblue\">Enter Cost : </h5>\n            </div>\n            <div>\n              <input name=\"unitLengthCost__{{i}}\" [(ngModel)]=\"cost[i]\" type=\"text\" id=\"unitLengthCost\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"20\" />\n            </div>\n            <div class=\"row\">\n            </div>\n\n          </div>\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; \" align=\"center\">\n            <a class=\"btn btn-primary\" (click)=\"approveCatalog(catalog,i)\">Accept</a>\n\n          </div>\n          <div class=\"col-md-2\"  style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; margin-top: 40px; \" align=\"center\">\n            <a class=\"btn btn-primary\" (click)=\"declineCatalog(catalog,i)\">Decline</a>\n\n          </div>\n        </div>\n      </div>\n\n\n\n\n    </div>\n\n    <!--<div class=\"container\" >-->\n    <!--<h4>Awaiting Approvals</h4>-->\n    <!--<div class=\"container\" *ngFor=\"let item of catalog\">-->\n    <!--<ul class=\"list-group\">-->\n    <!--<li class=\"list-group-item\">{{agents}} <span style=\"float: right;\" ><button (click)=\"acceptAgent(agents)\">Accept</button><button (click)=\"deleteItem(agents)\">Decline</button>  </span></li>-->\n    <!--<p></p>-->\n    <!--</ul>-->\n    <!--</div>-->\n    <!--</div>-->\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n    </div>\n\n    <div class=\"container\" >\n      <div class=\"jumbotron\">\n        <form (submit)=\"onCreateCatalogSubmit()\">\n          <label>\n            <h5 style=\"color: #6d7fcc\">\n              Create Catalog Item :\n            </h5>\n          </label>\n          <div class=\"row\">\n            <div class = \"col-md-12\">\n              <h6>Image Of the Design : </h6>\n              <div>\n                <input type=\"file\" name=\"file\" (change)=\"fileChangeEvent($event)\">\n              </div>\n            </div>\n\n            <div class = \"col-md-12\" style=\"margin-top: 20px\">\n              <h6>Cloth Name : </h6>\n              <div>\n                <input name=\"title\" [(ngModel)]=\"title\" type=\"text\" id=\"title\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n              </div>\n            </div>\n\n            <div class = \"col-md-12\">\n              <h6>Description of the cloth :</h6>\n              <div>\n                <input name=\"desc\" [(ngModel)]=\"desc\" type=\"text\" id=\"desc\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"200\" />\n\n              </div>\n            </div>\n\n            <div class = \"col-md-12\">\n              <h6>Per unit cost :</h6>\n              <div>\n                <input name=\"unitLengthCost\" [(ngModel)]=\"unitLengthCost\" type=\"text\" id=\"unitLengthCost\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n              </div>\n            </div>\n\n\n\n\n\n\n            <div class=\"col-md-12\">\n              <input type = \"submit\"  class=\"btn btn-primary\" style=\"margin-top:40px;margin-left:100px\" value=\"Upload\">\n\n            </div>\n\n          </div>\n        </form>\n\n      </div>\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/themify-icons.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/cs-skin-elastic.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/scss/style.css\">\n  <link href=\"../../../assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"row\" style=\"height:300px\">\n        <div class=\"col-md-8\" style=\"border:solid;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/home/histogram']\" style=\"height:230px;background-color: #F5F5F5;\">\n            <img src=\"https://plot.ly/static/img/literacy/fig3.jpg\" style=\"margin-left:20px;margin-top:10px;\" width=\"85%\" height=\"200px\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/home/histogram']\" style=\"height:70px\">\n            <p style=\"margin-top : 20px;margin-left:75px;color: black;font-size: 24px;\">Click here to see the statistics of agents</p>\n\n          </div>\n        </div>\n        <div class=\"col-md-4\" style=\"border:solid;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/createcatalog']\" style=\"height:220px;background-color:#1ABC9C\">\n            <img src=\"https://img1.etsystatic.com/024/0/5376838/il_570xN.564978191_hg95.jpg\" style=\"margin-left:20px;margin-top:10px;\" height=\"185px\" width=\"90%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/createcatalog']\" style=\"height:70px;background-color: #339966\">\n            <p style=\"margin-top : 20px;margin-left:35px;color: white;font-size: 24px;\">Click here to create catalogue</p>\n\n          </div>\n        </div>\n      </div>\n\n\n\n      <!------ Square blocks ---------->\n      <div class= \"row\" style=\"margin-top:10px\">\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/home/merchantOrderTrack']\" style=\"height:150px;width:95%;background-color:#adebeb;margin-top:5px;margin-left:2px;\">\n            <img src = \"https://www.usfleettracking.com/sites/all/themes/usft_material/images/tracking-icon.svg\" style=\"margin-left:12px;margin-top:10px;\" height=\"120px\" width=\"90%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/home/merchantOrderTrack']\" style=\"height:60px;width:95%;background-color:#33cccc;margin-left:2px;\">\n            <p style=\"margin-left:50px;margin-top:10px;color: white;font-size: 20px;\">Track orders</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/home/approvals']\" style=\"height:150px;width:95%;background-color:#ffad33;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://cdn.onlinewebfonts.com/svg/img_513926.png\" style=\"margin-left:20px;margin-top:10px;\" height=\"120px\" width=\"80%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/home/approvals']\" style=\"height:60px;width:95%;background-color:#ff8c1a;margin-left:2px;\">\n            <p style=\"margin-left:30px;color: white;margin-top:10px;font-size: 20px;\">Approve agents</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/home/approvecatalog']\" style=\"height:150px;width:95%;background-color:#4dd2ff;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://www.gazetadopovo.com.br/blogs/giro-sustentavel/wp-content/uploads/sites/62/2016/04/compliance-icon-3.png\" style=\"margin-left:12px;margin-top:10px;\" height=\"120px\" width=\"90%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/home/approvecatalog']\" style=\"height:60px;width:95%;background-color:#00bfff;margin-left:2px;\">\n            <p style=\"margin-left:20px;margin-top:10px;color: white;font-size: 20px;\">Approve Design</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\" style=\"border:solid;height:230px;border-color: #F5F5F5\">\n          <div class=\"row\" [routerLink] = \"['/merchant/home/receivedOrders']\" style=\"height:150px;width:95%;background-color:#ff6666;margin-top:5px;margin-left:2px;\">\n            <img src = \"http://www.droid-life.com/wp-content/uploads/2015/04/action-launcher-icon-980x686.jpg\" style=\"margin-left:12px;margin-top:10px;\" height=\"120px\" width=\"90%\">\n          </div>\n          <div class=\"row\" [routerLink] = \"['/merchant/home/receivedOrders']\" style=\"height:60px;width:95%;background-color:#ff5050;margin-left:2px;\">\n            <p style=\"margin-left:30px;margin-top:10px;color: white;font-size: 20px;\">View received orders</p>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n\n\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <!--   <li class=\"active\">\n             <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n           </li>\n           <h3 class=\"menu-title\">Order Console</h3>--><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <!-- <a  [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n           <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n          </ul>\n       <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>-->\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n          <!--    </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n                <ul class=\"sub-menu children dropdown-menu\">\n                  <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n                  <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n                </ul>\n              </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n              </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n              </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n\n\n<div id=\"right-panel\" class=\"right-panel\">\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n\n\n\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n\n\n      <table id = \"login\" style=\"width:100%\">\n        <tr>\n\n          <td id=\"login_form\"  >\n            <form (submit)=\"onLoginSubmit()\">\n              <table id=\"form\">\n                <th><h3 style=\"margin-top:40px;margin-left:200px;color:#2C333B;font-family:Century Gothic;font-size: 80px; font-weight:bold\">Login</h3>\n                </th>\n                <tr >\n                  <td>\n                    <label for=\"username\" style=\"margin-left:200px;margin-top:30px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Username*</label>\n                  </td>\n                  <td>\n\n                    <input name=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\"  style=\"width:100%; margin-top:30px;margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"password\" style=\"font-family:Century Gothic;margin-left:200px;color:#2C333B;float:left; width:100%; margin-bottom: 10px; margin-top:20px;font-size: 20px\">Password*</label>\n                  </td>\n                  <td>\n                    <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\" style=\"width:100%; margin-bottom: 10px;margin-top:20px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr id=\"buttons\" >\n                  <td >\n                    <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:80px;width:100px;margin-left:350px;background-color:#BAD26E\" value=\"Login\">\n                  </td>\n                  <!-- <td>\n                     <a class=\"btn .btn-primary\" [routerLink] = \"['/user/registration']\" style=\"margin-top:85px;width:100px;background-color:tomato\">Sign Up!</a>\n\n                   </td>-->\n\n                </tr>\n              </table>\n            </form>\n          </td>\n        </tr>\n      </table>\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n    <!-- .content -->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserauthserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserauthserviceService = /** @class */ (function () {
    function UserauthserviceService(http) {
        this.http = http;
    }
    UserauthserviceService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserauthserviceService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserauthserviceService.prototype.getUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/endUsers/get_user-profile', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserauthserviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], UserauthserviceService);
    return UserauthserviceService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/userauthservice.service.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n<!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n       <!--for each product, this row will iterate-->\n       <div class=\"row\"  *ngFor=\"let order of orderItems; let i=index\">\n          <div class=\"col-sm-3\">\n            <img src=\"{{order.imageUrl}}\" height=\"170px\" width=\"170px\">\n          </div>\n          <div class=\"col-sm-2\">\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Product description</p>\n              {{order.catalog}}\n             </div>\n             <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Fabric Type</p>\n                {{order.clothName}}\n <!--dynamically needs to be populated-->\n              </div>\n         <!-- <div class=\"col-sm-2\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"silk\">Silk</option>\n              <option value=\"cotton\">Cotton</option>\n              <option value=\"handloom\">Handloom</option>\n              <option value=\"lace\">Lace</option>\n            </select></div>-->\n        <!--  <div class=\"col-sm-1\" style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\"><select>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n            </select></div>-->\n            <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Quantity</p>\n                {{order.length}}\n  <!--dynamically needs to be populated-->\n              </div>\n\n          <div class=\"col-sm-1\" >\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Price</p>\n              {{order.cost}}\n <!--dynamically needs to be populated-->\n            </div>\n            <div class=\"col-sm-1\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Status for Agent</p>\n                {{order.statusForAgent}}\n   <!--dynamically needs to be populated-->\n              </div>\n              <div class=\"col-sm-1\" >\n                  <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Status for Customer</p>\n                  {{order.statusForCustomer}}\n     <!--dynamically needs to be populated-->\n                </div>\n\n\n\n          </div>\n\n      </div>\n      <!--each product ends here-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n<!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n\n<!--[if lt IE 7]> <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n\n<!--[if IE 7]> <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n\n<!--[if IE 8]> <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n\n<head>\n\n  <meta charset=\"utf-8\">\n\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\n  <title>TMS</title>\n\n  <meta name=\"description\" content=\"TMS\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n\n\n</head>\n\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/merchant/home']\"> <i class=\"menu-icon fa fa-dashboard\"></i>Merchant Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/createcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>Create Catalog</a>\n        <li class=\"menu-item-has-children dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Agents</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/approvals']\">Approvals</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink] = \"['/merchant/home/histogram']\">Statistics</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/home/receivedOrders']\"> <i class=\"menu-icon fa fa-th\"></i>Received Orders</a>\n          <a [routerLink] = \"['/merchant/home/merchantOrderTrack']\"> <i class=\"menu-icon fa fa-th\"></i>View Order progress</a>\n\n        </li>\n        <li>\n          <a [routerLink] = \"['/merchant/home/approvecatalog']\" > <i class=\"menu-icon fa fa-th\"></i>Approve Design</a>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] = \"['/merchant/login']\"> <i class=\"menu-icon fa fa-th\"></i>Log Out</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n\n<!-- Right Panel -->\n\n\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/merchant/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n\n\n\n\n\n\n  <div class=\"content mt-3\">\n\n\n    <div class=\"col-sm-12\">\n\n\n\n      <table class=\"table\">\n\n        <thead class=\"thead-dark\">\n\n        <tr>\n\n          <th scope=\"col\">#</th>\n\n          <th scope=\"col\">Catalog Image</th>\n\n          <th scope=\"col\">Cloth Name</th>\n\n          <th scope=\"col\">Cloth Length</th>\n\n          <th scope=\"col\">Price</th>\n\n          <th scope=\"col\">User Name</th>\n\n          <th scope=\"col\">Address</th>\n\n          <th scope=\"col\">Agent List</th>\n\n          <th scope=\"col\">Assign Order</th>\n\n\n        </tr>\n\n        </thead>\n\n        <tbody *ngFor=\"let order of orders;let i = index;\">\n\n        <tr>\n\n          <th scope=\"row\">1</th>\n\n          <td><img src=\"{{order.imageURL}}\" alt=\"Card image cap\" width=\"200\" height=\"200\" ></td>\n\n          <td>{{order.clothName}}</td>\n\n          <td>{{order.length}}</td>\n\n          <td>{{order.totalCost}}</td>\n\n          <td>{{order.username}}</td>\n\n          <td>{{order.address}}</td>\n\n          <td> <select (change)=\"changeAgent($event.target.value,i)\">\n\n            <option id=\"agent_{{i}}\" *ngFor=\"let agent of agents\" [ngValue]=\"agent\">{{agent}}</option>\n\n          </select></td>\n\n          <td><a class=\"btn btn-primary\" (click)=\"assignAgent(order.id,agentSelection[i])\">Assign Agent</a></td>\n\n        </tr>\n\n        </tbody>\n\n      </table>\n\n    </div>\n\n\n\n\n\n\n\n    <!--/.col-->\n\n\n\n\n\n    <!--/.col-->\n\n\n\n\n\n    <!--/.col-->\n\n\n\n\n\n\n\n  </div> <!-- .content -->\n\n</div><!-- /#right-panel -->\n\n\n\n<!-- Right Panel -->\n\n\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n\n<script src=\"assets/js/plugins.js\"></script>\n\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n\n\n\n\n\n\n<script>\n\n  ( function ( $ ) {\n\n    \"use strict\";\n\n\n\n    jQuery( '#vmap' ).vectorMap( {\n\n      map: 'world_en',\n\n      backgroundColor: null,\n\n      color: '#ffffff',\n\n      hoverOpacity: 0.7,\n\n      selectedColor: '#1de9b6',\n\n      enableZoom: true,\n\n      showTooltip: true,\n\n      values: sample_data,\n\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n\n      normalizeFunction: 'polynomial'\n\n    } );\n\n  } )( jQuery );\n\n</script>\n\n\n\n</body>\n\n</html>\n\n\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body >\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink] = \"['/guest/viewcatalog']\"> <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\"  [routerLink] = \"['/guest/viewcatalog']\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n     <!--     <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n          </ul>-->\n          <!--    <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n             <!--<ul class=\"sub-menu children dropdown-menu\">\n                 <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n                 <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n             </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n          </ul>\n        </li>\n         <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n        </li>\n     <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n        </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n    </div>\n  </header>\n\n\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n\n      <!------ Square divs ---------->\n      <div class= \"row\" >\n        <div class=\"col-sm-6\" style=\"margin-left:250px;border:solid;background-color:white;height:400px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"height:300px\">\n            <p style=\"margin-top:150px;margin-left:100px;font-size: 30px;\">SELECT TO LOGIN</p>\n          </div>\n          <div class=\"row\" style=\"margin-top:10px\">\n            <div class=\"col\">\n              <a class=\"btn .btn-primary\" [routerLink] = \"['/user/login']\" style=\"height:50px;width:100%;background-color: #ff6666;font-size: 20px\">User</a>\n            </div>\n            <div class=\"col\">\n              <a class=\"btn .btn-primary\" [routerLink] = \"['/agent/login']\" style=\"height:50px;float:left;width:100%;background-color: #BAD26E;font-size: 20px\">Agent</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"jumbotron\">\n        <div class=\"row\" style=\"margin-bottom:10px\">\n\n\n          <div class=\"col-md-6\" align=\"right\">\n            <h3 align=\"left\">\n               <!-- {{catalog.desc}}-->\n            </h3>\n          </div>\n\n\n\n        </div>\n        <div class=\"jumbotron\">\n\n\n\n          <div class=\"row\" >\n            <div class=\"col-md-12\" style=\"margin-bottom:20px;margin-left:170px;color:#2C333B;font-family:Century Gothic;font-size: 25px; font-weight:bold\">\n              Enter Shipping Details :\n            </div>\n          </div>\n          <div class=\"row\" style=\"margin-left:150px;color:#2C333B;font-family:Century Gothic;font-size: 14px\">\n            Name :\n          </div>\n          <div class=\"row\" style=\" margin-left:200px;color:#2C333B;font-family:Century Gothic;font-size: 14px\">\n            <div>\n              <input name=\"name\" [(ngModel)]=\"name\" type=\"text\" id=\"name\" style=\"width:200%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"margin-left:150px;color:#2C333B;font-family:Century Gothic;font-size: 14px\">\n            Shipping Address Line 1:\n          </div>\n          <div class=\"row\" style=\"margin-left:200px;color:#2C333B;font-family:Century Gothic;font-size: 14px; \">\n            <div>\n              <input name=\"address1\" [(ngModel)]=\"address1\" type=\"text\" id=\"address1\" style=\"width:200%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"margin-left:150px;color:#2C333B;font-family:Century Gothic;font-size: 14px\">\n            Shipping Address Line 2:\n          </div>\n          <div class=\"row\" style=\"margin-left:200px;color:#2C333B;font-family:Century Gothic;font-size: 14px; \">\n            <div>\n              <input name=\"address2\" [(ngModel)]=\"address2\" type=\"text\" id=\"address2\" style=\"width:200%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n            </div>\n          </div>\n\n          <div class=\"row\"></div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <a class=\"btn .btn-primary\" (click)=\"checkout()\"  style=\"margin-left:200px;background-color: #BAD26E;font-size: 20px\">Place Order</a>\n            </div>\n            <div class=\"col\">\n              <a class=\"btn .btn-primary\" [routerLink] =\"['../']\" style=\"margin-left:25px;background-color: #ff6666;font-size: 20px\">Back to cart</a>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron text-center\">\n  <div id=\"reposition\" style=\"margin:100px\">\n    <h1 style=\"color:#ef426d; font-weight:bold\">Order Cross Lines Fabric</h1>\n\n  </div>\n  <div class = \"row\" style=\"margin-top:10px\">\n    <div class=\"col-md-3\">\n\n      <img src=\"https://cdn.shopify.com/s/files/1/1086/7812/products/IMG_3483_2048x.jpg?v=1507969699\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://cdn.shopify.com/s/files/1/1086/7812/products/IMG_3483_2048x.jpg?v=1507969699\"  style=\"width:290px;height:50px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://cdn.shopify.com/s/files/1/1086/7812/products/IMG_3483_2048x.jpg?v=1507969699\"  style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://cdn.shopify.com/s/files/1/1086/7812/products/IMG_3483_2048x.jpg?v=1507969699\"  style=\"width:290px;height:100px,300px\">\n    </div>\n  </div>\n\n</div>\n\n<table id = \"cross\" align=\"center\" style=\"margin: 0px auto; margin-top:50px\">\n  <tr>\n    <td id=\"cross_form\" >\n      <form (submit)=\"oncrossOrderSubmit()\">\n        <table id=\"form\">\n\n          <tr id=\"cloth_length\">\n\n            <label for=\"cloth_length\" style=\"float:middle; width:100%; margin-bottom: 10px; font-size: 16px\">Cloth&nbsp;Length</label>\n          </tr>\n          <tr>\n            <input name=\"cloth_length\" [(ngModel)]=\"cloth_length\" type=\"text\" id=\"agency_name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n          </tr>\n          <tr id=\"bgcolor\">\n            <td>\n              <label for=\"bgcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Background Color of the Fabric</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n          <tr id=\"vertcolor\">\n            <td>\n              <label for=\"vertcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Vertical lines Color</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n          <tr id=\"horizcolor\">\n            <td>\n              <label for=\"horizcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Vertical lines Color</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n\n          <tr id=\"buttons\" >\n            <td >\n              <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:100px;background-color:#f47d39\" value=\"Order\">\n            </td>\n          </tr>\n        </table>\n      </form>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n\n\n  <!-- Header-->\n  -<header id=\"header\" class=\"header\">\n\n\n  <div class=\"header-menu\"  style=\"height:30px\">\n    <div class=\"col-sm-7\">\n      <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n    </div>\n    <div class=\"col-sm-5\">\n\n      <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n    </div>\n\n\n\n  </div>\n</header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n\n\n      <!------ Square divs ---------->\n\n    </div>\n\n    <div class=\"container\" >\n      <div class=\"jumbotron\">\n        <form (submit)=\"onCreateCatalogSubmit()\">\n          <label>\n            <h3 style=\"color: #6d7fcc\">\n              Upload Your own Design :\n            </h3>\n          </label>\n          <div class=\"row\">\n            <div class = \"col-md-12\">\n              <h4>Upload Image of Your Design :</h4>\n              <div style=\"margin-top: 20px\">\n                <input type=\"file\" name=\"file\" (change)=\"fileChangeEvent($event)\">\n              </div>\n            </div>\n\n            <div class = \"col-md-12\" style=\"margin-top: 20px\">\n              <h4>Cloth name :</h4>\n              <div>\n                <input name=\"title\" [(ngModel)]=\"title\" type=\"text\" id=\"title\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n              </div>\n            </div>\n\n            <div class = \"col-md-12\" >\n              <h4>Description of the cloth :</h4>\n              <div>\n                <input name=\"desc\" [(ngModel)]=\"desc\" type=\"text\" id=\"desc\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"200\" />\n              </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-md-12\">\n              <input type = \"submit\"  class=\"btn btn-primary\" style=\"margin-top:40px;margin-left:100px\" value=\"Upload\">\n\n            </div>\n\n          </div>\n        </form>\n      </div>\n\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron text-center\">\n  <div id=\"reposition\" style=\"margin:100px\">\n    <h1 style=\"color:#ef426d; font-weight:bold\">Order Horizontal Lines Fabric</h1>\n\n  </div>\n  <div class = \"row\" style=\"margin-top:10px\">\n    <div class=\"col-md-3\">\n\n      <img src=\"https://shop.r10s.jp/kiji-hikari/cabinet/item_img/1a/hnt980.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://shop.r10s.jp/kiji-hikari/cabinet/item_img/1a/hnt980.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://shop.r10s.jp/kiji-hikari/cabinet/item_img/1a/hnt980.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://shop.r10s.jp/kiji-hikari/cabinet/item_img/1a/hnt980.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n  </div>\n\n</div>\n\n<table id = \"horizontal\" align=\"center\" style=\"margin: 0px auto; margin-top:50px\">\n  <tr>\n    <td id=\"horizontal_form\" >\n      <form (submit)=\"onHorizontalOrderSubmit()\">\n        <table id=\"form\">\n\n          <tr id=\"cloth_length\">\n\n            <label for=\"cloth_length\" style=\"float:middle; width:100%; margin-bottom: 10px; font-size: 16px\">Cloth&nbsp;Length</label>\n          </tr>\n          <tr>\n            <input name=\"cloth_length\" [(ngModel)]=\"cloth_length\" type=\"text\" id=\"agency_name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n          </tr>\n          <tr id=\"bgcolor\">\n            <td>\n              <label for=\"bgcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Background Color of the Fabric</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n          <tr id=\"vertcolor\">\n            <td>\n              <label for=\"vertcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Horizontal lines Color</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n\n\n          <tr id=\"buttons\" >\n            <td >\n              <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:100px;background-color:#f47d39\" value=\"Order\">\n            </td>\n          </tr>\n        </table>\n      </form>\n    </td>\n  </tr>\n</table>\n\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n<!-- Header-->\n<header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n     <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n     </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n   </div>\n  </header>\n\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <div *ngIf=\"orderItems.length > 0;else other_content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" align=\"center\">\n          <h3 style=\"text-align: center\" align=\"center\">\n            Active Orders\n          </h3>\n          </div>\n          <br><br>\n\n        </div>\n\n       <!--for each product, this row will iterate-->\n       <div class=\"row\"  *ngFor=\"let order of orderItems; let i=index\">\n          <div class=\"col-sm-3\">\n            <img src=\"{{order.image}}\" height=\"170px\" width=\"170px\">\n          </div>\n          <div class=\"col-sm-2\">\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Product description</p>\n              {{order.catalog}}\n             </div>\n             <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Fabric Type</p>\n                {{order.clothName}}\n <!--dynamically needs to be populated-->\n              </div>\n\n            <div class=\"col-sm-2\" >\n                <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Length</p>\n                {{order.length}}\n  <!--dynamically needs to be populated-->\n              </div>\n\n          <div class=\"col-sm-1\" >\n              <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">Price</p>\n              {{order.cost}}\n <!--dynamically needs to be populated-->\n            </div>\n            <div class=\"col-sm-2\">\n              <a class=\"btn .btn-primary\" style=\"margin-top:40px;height:50px;width:100%;background-color: #FFBF00;font-size: 16px\" (click)=\"trackOrder(order,order.statusForCustomer,i)\">Track Order</a>\n              <div id={{order.id.replace(order.id,i)}} lass=\"line\"></div>\n\n            </div>\n\n\n          </div>\n      </div>\n\n      <ng-template #other_content>\n\n        <div class=\"jumbotron\">\n          <div class=\"row\" style=\"text-align: center\" align=\"center\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\" align=\"center\">\n              <h4 style=\"text-align: center\" align=\"center\">\n                You have not place any orders yet.\n              </h4>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n        </div>\n      </ng-template>\n\n      </div>\n      <!--each product ends here-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n<!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n\n      <div *ngIf=\"pastOrder.length > 0;else other_content\">\n\n        <div class=\"row\">\n          <h3 style=\"text-align: center\" align=\"center\">\n            Past Orders\n          </h3>\n        </div>\n\n        <div class=\"row\" *ngFor=\"let item of pastOrder\">\n            <div class=\"col-sm-3\">\n                <!--<img src=\"https://static.contrado.com/resources/images/2017-2/55807/sensation-silk-fabric-online-110251.jpg\" height=\"170px\" width=\"170px\">-->\n              <img src=\"{{item.catalogImage}}\">\n              </div>\n              <div class=\"col-sm-2\">\n                  <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">{{item.catalog}} </p>\n                 </div>\n                 <div class=\"col-sm-2\" >\n                    <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">{{item.clothName}}</p> <!--dynamically needs to be populated-->\n                  </div>\n                  <div class=\"col-sm-2\" >\n                      <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">{{item.length}}</p>  <!--dynamically needs to be populated-->\n                    </div>\n                    <div class=\"col-sm-1\" >\n                        <p style=\"margin-top:40px;height:50px;width:100%;font-size: 20px\">{{item.cost}}</p>  <!--dynamically needs to be populated-->\n                      </div>\n                      <!--<div class=\"col-sm-2\">-->\n                          <!--<a class=\"btn .btn-primary\" style=\"margin-top:40px;height:50px;width:100%;background-color: #FFBF00;font-size: 16px\">Reorder</a>-->\n                        <!--</div>-->\n\n          </div>\n      </div>\n\n      <ng-template #other_content>\n\n        <div class=\"jumbotron\">\n          <div class=\"row\" style=\"text-align: center\" align=\"center\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\" align=\"center\">\n            <h4 style=\"text-align: center\" align=\"center\">\n              You have not place any orders yet.\n            </h4>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n        </div>\n      </ng-template>\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron text-center\">\n  <div id=\"reposition\" style=\"margin:100px\">\n    <h1 style=\"color:#ef426d; font-weight:bold\">Order Plain Fabric</h1>\n\n  </div>\n  <div class = \"row\" style=\"margin-top:10px\">\n    <div class=\"col-md-3\">\n\n      <img src=\"https://www.allenshire.co.uk/media/8393/sunset-pink-483x295.jpg?mode=pad&width=483&height=295&bgcolor=FFF\"  style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeg2Er8J17-BFg2PPzjRvUmNR-TzFOiVNKZOXfRbFoX_gT50G\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzotwW6sVENyC2VIeXqcchSpwT3GpsHueRmjCrjl3oRRZs0qh2g\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWO-m6iqn1FVh0GH45l-ve3p8kPmrHimZ8IdA6yIwbR5TxG6ANjg\" style=\"width:290px;height:100px,300px\">\n    </div>\n  </div>\n\n</div>\n\n<table id = \"plain\" align=\"center\" style=\"margin: 0px auto; margin-top:50px\">\n  <tr>\n    <td id=\"plain_form\" >\n      <form (submit)=\"onPlainOrderSubmit()\">\n        <table id=\"form\">\n\n          <tr id=\"cloth_length\">\n\n            <label for=\"cloth_length\" style=\"float:middle; width:100%; margin-bottom: 10px; font-size: 16px\">Cloth&nbsp;Length</label>\n          </tr>\n          <tr>\n            <input name=\"cloth_length\" [(ngModel)]=\"cloth_length\" type=\"text\" id=\"agency_name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n          </tr>\n          <tr id=\"color\">\n            <td>\n              <label for=\"color\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Color of Fabric</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n\n\n\n          <tr id=\"buttons\" >\n            <td >\n              <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:100px;background-color:#f47d39\" value=\"Order\">\n            </td>\n          </tr>\n        </table>\n      </form>\n    </td>\n  </tr>\n</table>\n\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n    </div>\n  </header>\n\n\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n\n      </div>\n      <div class=\"col-md-2\">\n        <h3 align=\"right\">\n          Total :\n        </h3>\n\n      </div>\n      <div class=\"col-md-3\">\n        <h3 align=\"left\"> $ {{totalCost}} </h3>\n      </div>\n\n      <div class=\"col-md-4\" style=\"width: 50%; overflow-wrap: break-word; overflow-scrolling: auto; \" align=\"center\">\n        <a class=\"btn btn-primary\" (click)=\"checkoutClick()\"  >Checkout</a>\n      </div>\n\n\n  </div>\n\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th>Catalog Image</th>\n        <th>Cloth Name</th>\n        <th>Length</th>\n        <th>Update Action</th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let item of cartItems\">\n      <tr>\n        <td>1</td>\n        <td><img src=\"{{item.imageURL}}\" alt=\"Card image cap\" width=\"300\" height=\"300\" ></td>\n        <td>{{item.typeOfCloth}}</td>\n        <td>{{item.length}}</td>\n        <td>{{item.totalCost}}</td>\n        <td> <a class=\"btn btn-primary\" (click)=\"deleteElement(item)\">Remove</a></td>\n      </tr>\n      </tbody>\n    </table>\n</div>\n</div>\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\n\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body>\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <!-- <header id=\"header\" class=\"header\">\n\n     <div class=\"header-menu\">\n\n      <div class=\"col-sm-7\">\n         <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n         <div class=\"header-left\">\n           <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n           <div class=\"form-inline\">\n             <form class=\"search-form\">\n               <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n               <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n             </form>\n           </div>\n\n           <div class=\"dropdown for-notification\">\n             <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n               <i class=\"fa fa-bell\"></i>\n               <span class=\"count bg-danger\">5</span>\n             </button>\n             <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n               <p class=\"red\">You have 3 Notification</p>\n               <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n                 <i class=\"fa fa-check\"></i>\n                 <p>Server #1 overloaded.</p>\n               </a>\n               <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n                 <i class=\"fa fa-info\"></i>\n                 <p>Server #2 overloaded.</p>\n               </a>\n               <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n                 <i class=\"fa fa-warning\"></i>\n                 <p>Server #3 overloaded.</p>\n               </a>\n             </div>\n           </div>\n\n           <div class=\"dropdown for-message\">\n             <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                     id=\"message\"\n                     data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n               <i class=\"ti-email\"></i>\n               <span class=\"count bg-primary\">9</span>\n             </button>\n             <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n               <p class=\"red\">You have 4 Mails</p>\n               <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n                 <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n                 <span class=\"message media-body\">\n                                     <span class=\"name float-left\">Jonathan Smith</span>\n                                     <span class=\"time float-right\">Just now</span>\n                                         <p>Hello, this is an example msg</p>\n                                 </span>\n               </a>\n               <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n                 <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n                 <span class=\"message media-body\">\n                                     <span class=\"name float-left\">Jack Sanders</span>\n                                     <span class=\"time float-right\">5 minutes ago</span>\n                                         <p>Lorem ipsum dolor sit amet, consectetur</p>\n                                 </span>\n               </a>\n               <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n                 <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n                 <span class=\"message media-body\">\n                                     <span class=\"name float-left\">Cheryl Wheeler</span>\n                                     <span class=\"time float-right\">10 minutes ago</span>\n                                         <p>Hello, this is an example msg</p>\n                                 </span>\n               </a>\n               <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n                 <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n                 <span class=\"message media-body\">\n                                     <span class=\"name float-left\">Rachel Santos</span>\n                                     <span class=\"time float-right\">15 minutes ago</span>\n                                         <p>Lorem ipsum dolor sit amet, consectetur</p>\n                                 </span>\n               </a>\n             </div>\n           </div>\n         </div>\n       </div>\n\n       <div class=\"col-sm-5\">\n\n\n   </header> --><!-- /header -->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n\n\n  <!--   <div class=\"col-sm-7\">\n      <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\n   <div class=\"header-left\">\n         <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\n        <div class=\"form-inline\">\n          <form class=\"search-form\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\n            <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\n          </form>\n        </div>\n\n       <div class=\"dropdown for-notification\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell\"></i>\n            <span class=\"count bg-danger\">5</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\n            <p class=\"red\">You have 3 Notification</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <i class=\"fa fa-check\"></i>\n              <p>Server #1 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <i class=\"fa fa-info\"></i>\n              <p>Server #2 overloaded.</p>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <i class=\"fa fa-warning\"></i>\n              <p>Server #3 overloaded.</p>\n            </a>\n          </div>\n        </div>\n\n      <div class=\"dropdown for-message\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                  id=\"message\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-email\"></i>\n            <span class=\"count bg-primary\">9</span>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"message\">\n            <p class=\"red\">You have 4 Mails</p>\n            <a class=\"dropdown-item media bg-flat-color-1\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/1.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jonathan Smith</span>\n                                  <span class=\"time float-right\">Just now</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-4\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/2.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Jack Sanders</span>\n                                  <span class=\"time float-right\">5 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-5\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/3.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Cheryl Wheeler</span>\n                                  <span class=\"time float-right\">10 minutes ago</span>\n                                      <p>Hello, this is an example msg</p>\n                              </span>\n            </a>\n            <a class=\"dropdown-item media bg-flat-color-3\" href=\"#\">\n              <span class=\"photo media-left\"><img alt=\"avatar\" src=\"images/avatar/4.jpg\"></span>\n              <span class=\"message media-body\">\n                                  <span class=\"name float-left\">Rachel Santos</span>\n                                  <span class=\"time float-right\">15 minutes ago</span>\n                                      <p>Lorem ipsum dolor sit amet, consectetur</p>\n                              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-5\">\n      <div class=\"user-area dropdown float-right\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img class=\"user-avatar rounded-circle\" src=\"images/admin.jpg\" alt=\"User Avatar\">\n        </a>\n\n        <div class=\"user-menu dropdown-menu\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>My Profile</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa- user\"></i>Notifications <span class=\"count\">13</span></a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa -cog\"></i>Settings</a>\n\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-power -off\"></i>Logout</a>\n        </div>\n      </div>\n\n      <div class=\"language-select dropdown\" id=\"language-select\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"  id=\"language\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          <i class=\"flag-icon flag-icon-us\"></i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"language\" >\n          <div class=\"dropdown-item\">\n            <span class=\"flag-icon flag-icon-fr\"></span>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-es\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-us\"></i>\n          </div>\n          <div class=\"dropdown-item\">\n            <i class=\"flag-icon flag-icon-it\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</header>-->\n\n\n  <div class=\"breadcrumbs\">\n    <div class=\"col-sm-4\">\n      <div class=\"page-header float-left\">\n        <div class=\"page-title\">\n          <!--<h1>Dashboard</h1>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"page-header float-right\">\n        <div class=\"page-title\">\n          <ol class=\"breadcrumb text-right\">\n            <li class=\"active\"></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <!------ Banner picture ---------->\n      <!--<div class=\"container\" >\n       <img src=\"https://www.onlinefabricstore.net/images/homepage/home-sunbrella-02-2018.jpg\" height = \"400px\" width=\"100%\">\n   </div>-->\n\n      <!--Slider-->\n\n\n      <div class=\"container\" >\n        <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n          The most trending Designs\n          <a style=\"color:grey;margin-left:10px;\" [routerLink] = \"['/user/home/viewcatalog']\">View All</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <angular-image-slider [images]=\"imagesUrl\" [routerLink] = \"['/user/home/viewcatalog']\" style=\"margin-top:25px;width:100%;\" height=50px></angular-image-slider>\n      </div>\n      <!------ Square divs ---------->\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n\n      </div>\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n        Available Cloth Types\n      </div>\n      <div class=\"row\" style=\"height:15px;color: #444;font-size: 20px;\">\n\n      </div>\n      <div class= \"row\" style=\"margin-top:10px\">\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #82D8E3;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">SILK</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://1.bp.blogspot.com/-mXOCFXUFzwg/WQw2S7yMojI/AAAAAAAABk0/SYPq36aIUmAP6aF9Ce7rNHbe7abvUGJ_wCLcB/s1600/94.png\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #ADE422;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">COTTON</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://d1a6t1943usoj7.cloudfront.net/v1/dc944e68-2f4a-4971-85ae-a3f8341dfa12/w756/konacottonfabricbytheyard_aiid1873077.jpg\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color:  #FFA724;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">HANDLOOM</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://i.pinimg.com/originals/4d/06/79/4d0679652172179be3e005f356724ec4.jpg\"  height= \"230px\" width = \"90%\">\n          </div>\n        </div>\n        <div class=\"col-sm-3\" style=\"border:solid;height:300px;border-color: #F5F5F5\">\n          <div class=\"row\" style=\"margin-left:2px;height:50px;width:95%;border-bottom:solid;border-bottom-color: #FF5252;border-bottom-width: 5px;color: #002E36;font-size: 24px;\">LACE</div>\n          <div class=\"row\" style=\"margin-top:5px;margin-left:2px;\">\n            <img src=\"https://img.etsystatic.com/il/28efb8/1146107452/il_570xN.1146107452_34uc.jpg?version=0\"  height= \"230px\" width = \"90%\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n\n\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a  [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <!-- <ul class=\"sub-menu children dropdown-menu\">\n           <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n          </ul>\n       <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>-->\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n          <!--    </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n                <ul class=\"sub-menu children dropdown-menu\">\n                  <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n                  <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n                </ul>\n              </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n              </li>\n              <li class=\"menu-item-has-children dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n              </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n\n<!-- Right Panel -->\n\n\n\n<div id=\"right-panel\" class=\"right-panel\">\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <table id = \"login\" style=\"width:100%\">\n        <tr>\n\n          <td id=\"login_form\"  >\n            <form (submit)=\"onSubmitUserLogin()\">\n              <table id=\"form\">\n                <th><h3 style=\"margin-top:40px;margin-left:200px;color:#2C333B;font-family:Century Gothic;font-size: 80px; font-weight:bold\">Login</h3>\n                </th>\n                <tr >\n                  <td>\n                    <label for=\"username\" style=\"margin-left:200px;margin-top:30px;font-family:Century Gothic;color:#2C333B; width:100%; margin-bottom: 10px; font-size: 20px\">Username*</label>\n                  </td>\n                  <td>\n\n                    <input name=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\"  style=\"width:100%; margin-top:30px;margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"password\" style=\"font-family:Century Gothic;margin-left:200px;color:#2C333B;float:left; width:100%; margin-bottom: 10px; margin-top:20px;font-size: 20px\">Password*</label>\n                  </td>\n                  <td>\n                    <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\" style=\"width:100%; margin-bottom: 10px;margin-top:20px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr id=\"buttons\" >\n                  <td >\n                    <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:80px;width:100px;margin-left:270px;background-color:#BAD26E\" value=\"Login\">\n                  </td>\n                  <td>\n                    <a class=\"btn .btn-primary\" [routerLink] = \"['/user/registration']\" style=\"margin-top:85px;width:100px;background-color:tomato\">Sign Up!</a>\n\n                  </td>\n\n                </tr>\n              </table>\n            </form>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n\n\n\n    <div class=\"header-menu\"  style=\"height:30px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n\n\n\n    </div>\n  </header>\n\n\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n\n\n      <div class=\"jumbtron text-center\" >\n\n        <h1>Profile</h1>\n        <br>\n        <div class = \"row\">\n        </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-4\">\n            Name :\n          </div>\n          <div class=\"col-md-4\">\n            {{user.name}}\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-4\">\n            Email :\n          </div>\n          <div class=\"col-md-4\">\n            {{user.email}}\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-4\">\n            Username :\n          </div>\n          <div class=\"col-md-4\">\n            {{user.username}}\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n        <br>\n\n\n\n\n\n      </div>\n\n\n      <!--/.col-->\n\n\n      <!--/.col-->\n\n\n      <!--/.col-->\n\n\n\n    </div> <!-- .content -->\n  </div><!-- /#right-panel -->\n\n  <script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n  <script src=\"assets/js/plugins.js\"></script>\n  <script src=\"assets/js/main.js\"></script>\n\n  <script>\n    ( function ( $ ) {\n      \"use strict\";\n\n      jQuery( '#vmap' ).vectorMap( {\n        map: 'world_en',\n        backgroundColor: null,\n        color: '#ffffff',\n        hoverOpacity: 0.7,\n        selectedColor: '#1de9b6',\n        enableZoom: true,\n        showTooltip: true,\n        values: sample_data,\n        scaleColors: [ '#1de9b6', '#03a9f5' ],\n        normalizeFunction: 'polynomial'\n      } );\n    } )( jQuery );\n  </script>\n</div>\n</body>\n</html>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a href=\"#\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Order History</a>\n\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-8\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-4\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/RedirectLoginComponent']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Login\n      </div>\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <table id = \"registration\" style=\"margin-left:200px;margin-top:30px\">\n        <tr>\n          <td id=\"image\" >\n          </td>\n          <td id=\"registration_form\" >\n            <form (submit)=\"onSubmitRegisterUser()\">\n              <table>\n                <th><h3 style=\"font-family:Century Gothic;color:#273746;font-size: 40px; font-weight:bold\">Register</h3>\n                </th>\n                <tr >\n                  <td>\n                    <label for=\"name\" style=\"font-family:Century Gothic;float:left; width:100%; color:#273746;margin-bottom: 10px;margin-top:15px; font-size: 20px\">Name</label>\n                  </td>\n                  <td>\n                    <input name=\"name\" [(ngModel)]=\"name\" type=\"text\" id=\"name\" style=\"width:90%; margin-bottom: 10px;margin-top:15px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"email\" style=\"font-family:Century Gothic;color:#273746;float:left; width:100%; margin-bottom: 10px; font-size: 20px\">Email*</label>\n                  </td>\n                  <td>\n                    <input name=\"email\" [(ngModel)]=\"email\" type=\"text\" id=\"email\"  style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n\n                <tr >\n                  <td>\n                    <label for=\"username\" style=\"font-family:Century Gothic;color:#273746;float:left; width:100%; margin-bottom: 10px; font-size: 20px\">Username*</label>\n                  </td>\n                  <td>\n                    <input name=\"username\" [(ngModel)]=\"username\" type=\"text\" id=\"username\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr >\n                  <td>\n                    <label for=\"password\" style=\"font-family:Century Gothic;float:left; width:100%;color:#273746; margin-bottom: 10px; font-size: 20px\">Password*</label>\n                  </td>\n                  <td>\n                    <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"password\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n                  </td>\n                </tr>\n                <tr id=\"buttons\" >\n                  <td >\n                    <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:150px;background-color:#636466;color:white\" value=\"Submit\">\n                  </td>\n                </tr>\n              </table>\n            </form>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron text-center\">\n  <div id=\"reposition\" style=\"margin:100px\">\n    <h1 style=\"color:#ef426d; font-weight:bold\">Order Vertical Lines Fabric</h1>\n\n  </div>\n  <div class = \"row\" style=\"margin-top:10px\">\n    <div class=\"col-md-3\">\n\n      <img src=\"https://www.acornfabrics.com/image/cache/data/Acorn%20photos/grange%20du%20blue%20shirting%20fabric-600x450.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://www.acornfabrics.com/image/cache/data/Acorn%20photos/grange%20du%20blue%20shirting%20fabric-600x450.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://www.acornfabrics.com/image/cache/data/Acorn%20photos/grange%20du%20blue%20shirting%20fabric-600x450.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n    <div class=\"col-md-3\">\n\n      <img src=\"https://www.acornfabrics.com/image/cache/data/Acorn%20photos/grange%20du%20blue%20shirting%20fabric-600x450.jpg\" style=\"width:290px;height:100px,300px\">\n    </div>\n  </div>\n\n</div>\n\n<table id = \"vertical\" align=\"center\" style=\"margin: 0px auto; margin-top:50px\">\n  <tr>\n    <td id=\"vertical_form\" >\n      <form (submit)=\"onverticalOrderSubmit()\">\n        <table id=\"form\">\n\n          <tr id=\"cloth_length\">\n\n            <label for=\"cloth_length\" style=\"float:middle; width:100%; margin-bottom: 10px; font-size: 16px\">Cloth&nbsp;Length</label>\n          </tr>\n          <tr>\n            <input name=\"cloth_length\" [(ngModel)]=\"cloth_length\" type=\"text\" id=\"agency_name\" style=\"width:90%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\" value=\"\" maxlength=\"100\" />\n\n          </tr>\n          <tr id=\"bgcolor\">\n            <td>\n              <label for=\"bgcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Background Color of the Fabric</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n          <tr id=\"vertcolor\">\n            <td>\n              <label for=\"vertcolor\" style=\"float:left; width:100%; margin-bottom: 10px; font-size: 16px\">Select the Vertical lines Color</label>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <input type=\"color\" align=\"center\" value=\"#ff0000\">\n            </td>\n          </tr>\n\n\n          <tr id=\"buttons\" >\n            <td >\n              <input type = \"submit\"  class=\"btn .btn-primary\" style=\"margin-top:40px;margin-left:100px;background-color:#f47d39\" value=\"Order\">\n            </td>\n          </tr>\n        </table>\n      </form>\n    </td>\n  </tr>\n</table>\n\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"\"> <![endif]-->\n<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\" lang=\"\"> <![endif]-->\n<!--[if IE 8]>         <html class=\"no-js lt-ie9\" lang=\"\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>TMS</title>\n  <meta name=\"description\" content=\"TMS\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"assets/css/normalize.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/themify-icons.css\">\n  <!-- <link rel=\"stylesheet\" href=\"assets/css/bootstrap-select.less\"> -->\n  <link rel=\"stylesheet\" href=\"assets/scss/style.css\">\n  <link href=\"assets/css/lib/vector-map/jqvmap.min.css\" rel=\"stylesheet\">\n\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>\n\n  <!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js\"></script> -->\n\n</head>\n<body background = \"http://www.dzdesign.pl/wp-content/uploads/2017/05/anthology4.1.jpg\" style=\"height:400px;width:100%\">\n\n\n<!-- Left Panel -->\n\n<aside id=\"left-panel\" class=\"left-panel\">\n  <nav class=\"navbar navbar-expand-sm navbar-default\">\n\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"./\">TMS</a>\n      <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"images/logo2.png\" alt=\"Logo\"></a>\n    </div>\n\n    <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/user/home']\" > <i class=\"menu-icon fa fa-dashboard\"></i>User Dashboard </a>\n        </li>\n        <h3 class=\"menu-title\">Order Console</h3><!-- /.menu-title -->\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink]=\"['/user/home/viewcatalog']\"> <i class=\"menu-icon fa fa-laptop\"></i>View Catalog</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <!--<li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Silk Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Cotton Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Velvet Fabric</a></li>\n            <li><i class=\"fa fa-share-square-o\"></i><a href=\"#\">Polyster Fabric</a></li>-->\n          </ul>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/cart']\"> <i class=\"menu-icon fa fa-th\"></i>Cart</a>\n          <!--<ul class=\"sub-menu children dropdown-menu\">\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-basic.html\">Basic Form</a></li>\n              <li><i class=\"menu-icon fa fa-th\"></i><a href=\"forms-advanced.html\">Advanced Form</a></li>\n          </ul>-->\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Orders</a>\n          <ul class=\"sub-menu children dropdown-menu\">\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/order']\">Active orders</a></li>\n            <li><i class=\"menu-icon fa fa-th\"></i><a [routerLink]=\"['/user/home/pastorder']\">Past orders</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/home/profile']\"> <i class=\"menu-icon fa fa-th\"></i>User Profile</a>\n\n        </li>\n        <li class=\"menu-item-has-children dropdown\">\n          <a [routerLink] =\"['/user/login']\"> <i class=\"menu-icon fa fa-th\"></i>Logout</a>\n\n        </li>\n\n        <!-- <li class=\"menu-item-has-children dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Track Orders</a>\n\n         </li>-->\n        <!--   <li class=\"menu-item-has-children dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-th\"></i>Edit Profile</a>\n\n           </li>-->\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</aside><!-- /#left-panel -->\n\n<!-- Left Panel -->\n\n<!-- Right Panel -->\n\n<div id=\"right-panel\" class=\"right-panel\">\n\n  <!-- Header-->\n  <header id=\"header\" class=\"header\">\n    <div class=\"header-menu\"  style=\"height:30px;margin-top:20px\">\n      <div class=\"col-sm-7\">\n        <h2 style=\"color:#2C333B;font-family:Century Gothic;\">TEXTILE MANAGEMENT SYSTEM</h2>\n      </div>\n      <div class=\"col-sm-5\">\n\n        <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cEAi9vXbp211QnBMZiljGa1e19VL-tFCHJvubUSGK1T1FUD\" [routerLink] = \"['/user/login']\" style=\"margin-left:200px\" alt=\"User Avatar\" height=\"40px\" width=\"40px\">Logout\n      </div>\n    </div>\n  </header>\n\n  <div class=\"content mt-3\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n        </div>\n        <div class=\"col-md-3\">\n          <a class=\"btn btn-primary\" [routerLink] = \"['/user/home/viewcatalog/cart']\" style=\"margin-right: 5px\" >\n            View Cart\n          </a>\n        </div>\n      </div>\n\n      <div class=\"jumbotron\" style=\"color: #7386D5\">\n        <div class=\"row\" align=\"center\">\n          <a class=\"botton\" [routerLink] = \"['/user/home/customzieCatalog']\" style=\"margin-left: 300px \">\n            <h4 style=\"text-align: center\">Don't like our designs??..  Design your own cloth...</h4>\n          </a>\n        </div>\n      </div>\n      <div class=\"jumbotron\" *ngFor=\"let catalog of catalogList; let  i= index;\" >\n        <div  class=\"row\" style=\"text-align: center\" align=\"center\">\n\n          <div class=\"col-md-5\">\n            <div class=\"item\" >\n              <img class=\"card-img-top\" src=\"{{catalog.imageURL}}\"  height=\"300\"\n                   width=\"300\">\n\n              <div class=\"item-overlay top\"></div>\n            </div>\n\n\n            <!--<div class=\"zoom\">-->\n            <!--<img class=\"card-img-top\" src=\"https://www.earlypiano.co.uk/wp-content/uploads/2013/02/Worsted-Hitchpin-Cloth.jpg\" alt=\"Card image cap\"  height=\"300\"-->\n            <!--width=\"300\"  >-->\n            <!--</div>-->\n\n          </div>\n\n          <div class=\"col-md-4\">\n            <br><br>\n            <div class=\"row\" style=\"text-align: center\" align=\"center\">\n              <div class=\"col-md-5\" align=\"left\">\n                <h4><strong>Title :</strong></h4>\n              </div>\n              <div class=\"col-md-7\" align=\"left\">\n                <h4><strong>{{catalog.title}}</strong></h4>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong>Description :</strong></h5>\n              </div>\n\n              <div class=\"col-md-7\" align=\"left\">\n                <p>\n                  {{catalog.desc}}\n                </p>\n              </div>\n            </div>\n\n\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong> Enter Cloth&nbsp;Length :</strong></h5>\n              </div>\n              <div class=\"col-md-5\">\n                <input name=\"cloth_length_{{i}}\" [(ngModel)]=\"cloth_length[i]\" type=\"text\" id=\"agency_name_{{i}}\"\n                       style=\"width:50%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\"\n                       value=\"\" maxlength=\"50\" />\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong> Select Cloth Type :</strong></h5>\n              </div>\n\n              <div class=\"col-md-7\" align=\"left\">\n                <p>\n                  <select  name=\"selectedItem_{{i}}\" (change)=\"updatePrice($event.target.value,i)\" required>\n                    <option *ngFor=\"let clothType of clothtypes; let j = index\"   [ngValue]=\"clothType\">\n                      {{clothType.cloth}}\n                    </option>\n                  </select>\n                </p>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <br>\n              <div class=\"col-md-5\" align=\"left\">\n                <h5><strong>  Cost per Unit:</strong></h5>\n              </div>\n              <label id=\"cost_{{i}}\">{{cost[i]}}</label>\n              <div class=\"col-md-7\" align=\"left\"></div>\n            </div>\n\n          </div>\n          <div class=\"col-md-3\">\n            <br><br><br><br>\n            <a class=\"btn btn-primary\" style=\"margin-left: 50px \" (click)=\"addToCart(catalog,i,cost[i])\">Add to cart</a>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!--<div class=\"jumbotron\">-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-4\" *ngFor=\"let catalog of catalogList; let  i= index;\" style=\"width: 50%; overflow: hidden;\">-->\n      <!--&lt;!&ndash;<div style=\"display: inline-block\">&ndash;&gt;-->\n      <!--<div style=\"width: 800px; float: left;\">-->\n      <!--<div class=\"card\" style=\" margin-bottom: 30px; display: flex; flex-wrap: wrap; width: 18rem;\">-->\n      <!--<img class=\"card-img-top\" src=\"{{catalog.imageURL}}\" alt=\"Card image cap\"  height=\"300\"-->\n      <!--width=\"300\"  >-->\n      <!--<div class=\"card-body\" >-->\n      <!--<h5 class=\"card-title\">{{catalog.title}}</h5>-->\n      <!--<p class=\"card-text\" style=\" height:50px\">{{catalog.desc}} </p>-->\n      <!--<p class=\"card-text\"> Per inch cost is {{catalog.unitLengthCost}} $</p>-->\n      <!--<p class=\"card-text\"><label>Cloth&nbsp;Length : </label>-->\n      <!--<input name=\"cloth_length_{{i}}\" [(ngModel)]=\"cloth_length[i]\" type=\"text\" id=\"agency_name_{{i}}\"-->\n      <!--style=\"width:50%; margin-bottom: 10px; border: 1px solid #636466; border-radius: 5px 5px 5px 5px;\"-->\n      <!--value=\"\" maxlength=\"50\" /> </p>-->\n      <!--</div>-->\n      <!--<a class=\"btn btn-primary\" style=\"margin-left: 50px \" (click)=\"addToCart(catalog,i)\">Add to cart</a>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n\n    </div>\n\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n    <!--/.col-->\n\n\n\n  </div> <!-- .content -->\n</div><!-- /#right-panel -->\n\n<!-- Right Panel -->\n\n<script src=\"assets/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"></script>\n<script src=\"assets/js/plugins.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n\n\n\n\n<script>\n  ( function ( $ ) {\n    \"use strict\";\n\n    jQuery( '#vmap' ).vectorMap( {\n      map: 'world_en',\n      backgroundColor: null,\n      color: '#ffffff',\n      hoverOpacity: 0.7,\n      selectedColor: '#1de9b6',\n      enableZoom: true,\n      showTooltip: true,\n      values: sample_data,\n      scaleColors: [ '#1de9b6', '#03a9f5' ],\n      normalizeFunction: 'polynomial'\n    } );\n  } )( jQuery );\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"row\" style=\"text-align: center\" align=\"center\">\n\n    <div class=\"col-md-5\">\n      <div class=\"item\">\n        <img class=\"card-img-top\" src=\"https://www.earlypiano.co.uk/wp-content/uploads/2013/02/Worsted-Hitchpin-Cloth.jpg\" alt=\"Card image cap\"  height=\"300\"\n             width=\"300\"  >\n\n        <div class=\"item-overlay top\"></div>\n      </div>\n\n\n      <!--<div class=\"zoom\">-->\n      <!--<img class=\"card-img-top\" src=\"https://www.earlypiano.co.uk/wp-content/uploads/2013/02/Worsted-Hitchpin-Cloth.jpg\" alt=\"Card image cap\"  height=\"300\"-->\n           <!--width=\"300\"  >-->\n      <!--</div>-->\n\n    </div>\n\n    <div class=\"col-md-4\">\n      <br><br>\n      <div class=\"row\" style=\"text-align: center\" align=\"center\">\n        <div class=\"col-md-5\" align=\"left\">\n        <h4><strong>Title :</strong></h4>\n        </div>\n        <div class=\"col-md-7\" align=\"left\">\n          <h4><strong>Plain</strong></h4>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <br>\n        <div class=\"col-md-5\" align=\"left\">\n        <h5><strong>Description :</strong></h5>\n        </div>\n\n          <div class=\"col-md-7\" align=\"left\">\n        <p>\n          qfbvfuehvfcfvi qfb qfbi qfbvvi qfbvfuehvfcfvi\n        </p>\n          </div>\n      </div>\n\n\n\n      <div class=\"row\">\n        <br>\n        <div class=\"col-md-5\" align=\"left\">\n          <h5><strong> Enter Cloth&nbsp;Length :</strong></h5>\n        </div>\n        <div class=\"col-md-5\">\n          <input type=\"text\" placeholder=\"Length(centimeters)\">\n\n        </div>\n\n\n      </div>\n\n\n\n      <div class=\"row\">\n        <!--<div class=\"container\" *ngFor=\"let type of clothtypes; let j=index\">-->\n        <br>\n        <div class=\"col-md-5\" align=\"left\">\n          <h5><strong> Select Cloth Type :</strong></h5>\n        </div>\n\n        <div class=\"col-md-7\" align=\"left\">\n          <p>\n            <select [(ngModel)]=\"selectedItem\" required>\n              <option *ngFor=\"let clothType of clothtypes\" [ngValue]=\"clothType\">\n                {{clothType.cloth}}\n              </option>\n            </select>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <br>\n        <div class=\"col-md-5\" align=\"left\">\n          <h5><strong>  Cost per Unit:</strong></h5>\n        </div>\n        <label>{{selectedItem.cost}}</label>\n        <div class=\"col-md-7\" align=\"left\">\n\n        </div>\n      </div>\n\n      <!--</div>-->\n\n    </div>\n    <div class=\"col-md-3\">\n      <br><br><br><br>\n      <a class=\"btn btn-primary\" style=\"margin-left: 50px \" (click)=\"addToCart(catalog,i)\">Add to cart</a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveUserDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaveUserDataService = /** @class */ (function () {
    function SaveUserDataService() {
    }
    SaveUserDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaveUserDataService);
    return SaveUserDataService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/save-user-data.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentvalidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgentvalidationService = /** @class */ (function () {
    function AgentvalidationService() {
    }
    AgentvalidationService.prototype.validateRegister = function (agent) {
        if (agent.agency_name == undefined ||
            agent.email == undefined ||
            agent.name == undefined ||
            agent.address == undefined ||
            agent.registration_number == undefined ||
            agent.username == undefined ||
            agent.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    AgentvalidationService.prototype.validateLogin = function (agent) {
        if (agent.username == undefined ||
            agent.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    AgentvalidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    AgentvalidationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AgentvalidationService);
    return AgentvalidationService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/agentvalidation.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatCatalogServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreatCatalogServiceService = /** @class */ (function () {
    function CreatCatalogServiceService(http) {
        this.http = http;
    }
    CreatCatalogServiceService.prototype.uploadimage = function (create) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        console.log(create);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://textilemanagementsystem.herokuapp.com/create/catalogElement', create, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatCatalogServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], CreatCatalogServiceService);
    return CreatCatalogServiceService;
    var _a;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/creat-catalog-service.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserValidateService = /** @class */ (function () {
    function UserValidateService() {
    }
    UserValidateService.prototype.validateUserRegister = function (user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserValidateService.prototype.validateUserLogin = function (user) {
        if (user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserValidateService.prototype.validateUserEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    UserValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserValidateService);
    return UserValidateService;
}());

//# sourceMappingURL=/Users/chinmayghag/WebstormProjects/TMSsystem/angular-src/src/user-validate.service.js.map

/***/ })

},[821]);
//# sourceMappingURL=main.bundle.map