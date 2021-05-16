(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_home_components_stock_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-home/components/stock-home.component */ "./src/app/stock-home/components/stock-home.component.ts");
/* harmony import */ var _stock_home_components_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-home/components/add-band/add-band.component */ "./src/app/stock-home/components/add-band/add-band.component.ts");
/* harmony import */ var _stock_home_components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-home/components/order-form/order-form.component */ "./src/app/stock-home/components/order-form/order-form.component.ts");
/* harmony import */ var _stock_home_components_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-home/components/stock-history/stock-history.component */ "./src/app/stock-home/components/stock-history/stock-history.component.ts");
/* harmony import */ var _unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unsaved-changes.guard */ "./src/app/unsaved-changes.guard.ts");
/* harmony import */ var _stock_home_components_order_pending_order_pending_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-home/components/order-pending/order-pending.component */ "./src/app/stock-home/components/order-pending/order-pending.component.ts");
/* harmony import */ var _stock_home_components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-home/components/user-registration/user-registration.component */ "./src/app/stock-home/components/user-registration/user-registration.component.ts");










var appRoutes = [
    { path: '', component: _stock_home_components_stock_home_component__WEBPACK_IMPORTED_MODULE_3__["StockHomeComponent"], canDeactivate: ['canDeactivateHomeComponent'] },
    { path: 'home', component: _stock_home_components_stock_home_component__WEBPACK_IMPORTED_MODULE_3__["StockHomeComponent"], canDeactivate: ['canDeactivateHomeComponent'] },
    { path: 'add', component: _stock_home_components_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_4__["AddBandComponent"] },
    { path: 'orderForm', component: _stock_home_components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormComponent"], canDeactivate: ['canDeactivateOrderComponent'] },
    { path: 'history', component: _stock_home_components_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_6__["StockHistoryComponent"] },
    { path: 'userRegistration', component: _stock_home_components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_9__["UserRegistrationComponent"] },
    { path: 'orderPending', component: _stock_home_components_order_pending_order_pending_component__WEBPACK_IMPORTED_MODULE_8__["OrderPendingComponent"], canDeactivate: ['canDeactivateOrderPendingComponent'] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            providers: [
                { provide: 'canDeactivateHomeComponent', useFactory: function () { return new _unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesGuard"](); } },
                { provide: 'canDeactivateOrderComponent', useFactory: function () { return new _unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesGuard"](); } },
                { provide: 'canDeactivateOrderPendingComponent', useFactory: function () { return new _unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesGuard"](); } }
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background: #017BCE;\r\n    color: white;\r\n    line-height: 3.5;\r\n    border-bottom: 5px solid #984646 !important;\r\n}\r\n\r\n.logo{\r\n    height: 76px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.image{\r\n    background: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.pad-0 {\r\n    padding: 0px;\r\n}\r\n\r\n.header-content{\r\n    text-align: center;\r\n    margin: 4px 0px 0px 0px;\r\n    line-height: 3.5;\r\n    font-size: 20px;\r\n}\r\n\r\n.user-name{\r\n    text-align: end;\r\n    line-height: 3.5;\r\n    margin: 10px 0px 0px 0px;\r\n}\r\n\r\n.arrow {\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 3px;\r\n    margin: 0px 0px 4px 4px\r\n  }\r\n\r\n.down {\r\n   transform: rotate(45deg);\r\n   -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.pad-0{\r\n    padding:0px;\r\n}\r\n\r\n.content{\r\n    margin:0px 0px 0px 5px;\r\n}\r\n\r\n.sub-header{\r\n    background: lightgray;\r\n    text-align: center;\r\n}\r\n\r\n.navbar {\r\n    background-color: #F5F5F5;\r\n    color: black;\r\n    /* margin-top: 5px; */\r\n    padding: 0px;\r\n    line-height: 3em;\r\n}\r\n\r\n.nav-bar-content {\r\n    position: relative;\r\n    width: 135px;\r\n    text-align: center;\r\n    border-radius: 0px;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.nav-bar-content.active {\r\n    background-color: #984646 !important;\r\n    color: white !important;\r\n    -webkit-transform: scale(1.019);\r\n            transform: scale(1.019);\r\n    z-index: 10;\r\n}\r\n\r\n.nav-bar-content:hover{\r\n    background-color: lightgray;\r\n    color: white;\r\n}\r\n\r\n.toggleButton{\r\n    outline: none;\r\n    margin: 0px 0px 0px\r\n}\r\n\r\n.user-name-button{\r\n    text-decoration: underline;\r\n}\r\n\r\n.topnav-right {\r\n    float: right;\r\n  }\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #017BCE;\r\n    border-bottom: 16px solid #984646;\r\n    width: 120px;\r\n    height: 120px;\r\n    top: 45%;\r\n    left: 45%;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    position: absolute;\r\n  }\r\n\r\n.spinner{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    z-index: 100;\r\n  }\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .header-content {\r\n      font-size: 14px;\r\n    }\r\n    .user-name{\r\n        margin:0px\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWjtFQUNGOztBQUVGO0dBQ0csd0JBQXdCO0dBQ3hCLGdDQUFnQztBQUNuQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixPQUFPO0lBQ1AsMENBQTBDO0lBQzFDLFlBQVk7RUFDZDs7QUFFQTtJQUNFLEtBQUssK0JBQStCLEVBQUU7SUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtFQUM1Qzs7QUFFQTtJQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0VBQ3BDOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDSTtJQUNKO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE3QkNFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjOTg0NjQ2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmltYWdle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWQtMCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNHB4IDBweCAwcHggMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnVzZXItbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjU7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA0cHggNHB4XHJcbiAgfVxyXG5cclxuLmRvd24ge1xyXG4gICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ucGFkLTB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW46MHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNXB4OyAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcclxufVxyXG5cclxuLm5hdi1iYXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWJhci1jb250ZW50LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg0NjQ2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTkpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5uYXYtYmFyLWNvbnRlbnQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2dnbGVCdXR0b257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweFxyXG59XHJcblxyXG4udXNlci1uYW1lLWJ1dHRvbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wbmF2LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5sb2FkZXIge1xyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMwMTdCQ0U7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkICM5ODQ2NDY7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1uYW1le1xyXG4gICAgICAgIG1hcmdpbjowcHhcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-2 image\">\r\n            <img class=\"logo\" src=\"../assets/vc.png\" />\r\n        </div>\r\n        <div class=\"col-6 col-md-7  header-content\">\r\n            STOCK MANAGEMENT\r\n        </div>\r\n        <div class=\"col-6 col-md-3 user-name\">\r\n            <button class=\"user-name-button\" mat-button [matMenuTriggerFor]=\"menu\">{{username}}<i\r\n                    class=\"arrow down\"></i></button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <span mat-menu-item (click)=\"signout()\">Sign Out</span>\r\n            </mat-menu>\r\n        </div>\r\n    </div>\r\n</div>\r\n<nav class=\"navbar navbar-expand-md navbar-light\">\r\n    <!-- Toggler/collapsibe Button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- Navbar links -->\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <div id=\"homeButton\" class=\"nav-bar-content tab\" routerLink=\"/home\">\r\n                    Home\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <div id=\"addButton\" class=\"nav-bar-content tab\" routerLink=\"/add\">\r\n                    Add Band\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <div id=\"orderFormButton\" class=\"nav-bar-content tab\" routerLink=\"/orderForm\">\r\n                    Order Form\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <div id=\"historyButton\" class=\"nav-bar-content tab\" routerLink=\"/history\">\r\n                    Stock History\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <div id=\"orderPendingButton\" class=\"nav-bar-content tab\" routerLink=\"/orderPending\">\r\n                    Order Pending\r\n                </div>\r\n            </li>\r\n            <li *ngIf=\"isAdmin\" class=\"nav-item\">\r\n                <div id=\"userRegistrationButton\" class=\"nav-bar-content tab\" routerLink=\"/userRegistration\">\r\n                    User Registration\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<hr />\r\n<router-outlet></router-outlet>\r\n<div class=\"spinner\" *ngIf=\"loadingIcon\">\r\n    <div class=\"loader\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_home_services_stock_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-home/services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        this.loadingIcon = false;
        this.isAdmin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tab = 'home';
        this.router.events.subscribe(function (events) {
            document.querySelectorAll('.tab').forEach(function (element) {
                element.classList.remove('active');
            });
            var selectedButton = _this.router.url.split('/')[1];
            if (selectedButton) {
                document.querySelector('#' + selectedButton + 'Button').classList.add('active');
            }
            else {
                document.querySelector('#homeButton').classList.add('active');
            }
        });
        this.stockService.loadingIcon$.subscribe(function (val) {
            _this.loadingIcon = val;
        });
        this.getUserName();
    };
    AppComponent.prototype.getUserName = function () {
        var _this = this;
        this.stockService.getUserName().subscribe(function (res) {
            _this.username = res.split('[')[0];
            var role = res.split('[')[1];
            _this.stockService.setUserRole(role.split(']')[0]);
            _this.stockService.userName = _this.username;
            if (_this.stockService.userRole === 'ADMIN') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    AppComponent.prototype.signout = function () {
        window.location.href = 'http://localhost:3000/logout';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _stock_home_services_stock_home_service__WEBPACK_IMPORTED_MODULE_3__["StockHomeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stock_home_components_stock_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-home/components/stock-home.component */ "./src/app/stock-home/components/stock-home.component.ts");
/* harmony import */ var _stock_home_services_stock_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-home/services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _stock_home_components_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-home/components/add-band/add-band.component */ "./src/app/stock-home/components/add-band/add-band.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _stock_home_components_increment_band_increment_band_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stock-home/components/increment-band/increment-band.component */ "./src/app/stock-home/components/increment-band/increment-band.component.ts");
/* harmony import */ var _stock_home_components_decrement_band_decrement_band_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-home/components/decrement-band/decrement-band.component */ "./src/app/stock-home/components/decrement-band/decrement-band.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _stock_home_components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stock-home/components/order-form/order-form.component */ "./src/app/stock-home/components/order-form/order-form.component.ts");
/* harmony import */ var _stock_home_components_order_form_checkbox_order_form_checkbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stock-home/components/order-form-checkbox/order-form-checkbox.component */ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.ts");
/* harmony import */ var _stock_home_components_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stock-home/components/stock-history/stock-history.component */ "./src/app/stock-home/components/stock-history/stock-history.component.ts");
/* harmony import */ var _stock_home_services_utility_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stock-home/services/utility.service */ "./src/app/stock-home/services/utility.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _compare_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./compare-pipe */ "./src/app/compare-pipe.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _stock_home_components_invoice_pop_up_invoice_pop_up_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stock-home/components/invoice-pop-up/invoice-pop-up.component */ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.ts");
/* harmony import */ var _stock_home_components_order_pending_order_pending_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./stock-home/components/order-pending/order-pending.component */ "./src/app/stock-home/components/order-pending/order-pending.component.ts");
/* harmony import */ var _stock_home_components_order_form_quantity_order_form_quantity_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./stock-home/components/order-form-quantity/order-form-quantity.component */ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _stock_home_components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stock-home/components/user-registration/user-registration.component */ "./src/app/stock-home/components/user-registration/user-registration.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _stock_home_components_stock_home_component__WEBPACK_IMPORTED_MODULE_7__["StockHomeComponent"],
                _stock_home_components_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_10__["AddBandComponent"],
                _stock_home_components_increment_band_increment_band_component__WEBPACK_IMPORTED_MODULE_12__["IncrementBandComponent"],
                _stock_home_components_decrement_band_decrement_band_component__WEBPACK_IMPORTED_MODULE_13__["DecrementBandComponent"],
                _stock_home_components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_16__["OrderFormComponent"],
                _stock_home_components_order_form_checkbox_order_form_checkbox_component__WEBPACK_IMPORTED_MODULE_17__["OrderFormCheckboxComponent"],
                _stock_home_components_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_18__["StockHistoryComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"],
                _compare_pipe__WEBPACK_IMPORTED_MODULE_23__["ComparePipe"],
                _stock_home_components_invoice_pop_up_invoice_pop_up_component__WEBPACK_IMPORTED_MODULE_26__["InvoicePopUpComponent"],
                _stock_home_components_order_pending_order_pending_component__WEBPACK_IMPORTED_MODULE_27__["OrderPendingComponent"],
                _stock_home_components_order_form_quantity_order_form_quantity_component__WEBPACK_IMPORTED_MODULE_28__["OrderFormQuantityComponent"],
                _stock_home_components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_30__["UserRegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"]
            ],
            providers: [_stock_home_services_stock_home_service__WEBPACK_IMPORTED_MODULE_8__["StockHomeService"], _stock_home_services_utility_service__WEBPACK_IMPORTED_MODULE_19__["UtilityService"]],
            entryComponents: [_stock_home_components_increment_band_increment_band_component__WEBPACK_IMPORTED_MODULE_12__["IncrementBandComponent"], _stock_home_components_order_form_quantity_order_form_quantity_component__WEBPACK_IMPORTED_MODULE_28__["OrderFormQuantityComponent"], _stock_home_components_decrement_band_decrement_band_component__WEBPACK_IMPORTED_MODULE_13__["DecrementBandComponent"], _stock_home_components_order_form_checkbox_order_form_checkbox_component__WEBPACK_IMPORTED_MODULE_17__["OrderFormCheckboxComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"], _stock_home_components_invoice_pop_up_invoice_pop_up_component__WEBPACK_IMPORTED_MODULE_26__["InvoicePopUpComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compare-pipe.ts":
/*!*********************************!*\
  !*** ./src/app/compare-pipe.ts ***!
  \*********************************/
/*! exports provided: ComparePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePipe", function() { return ComparePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComparePipe = /** @class */ (function () {
    function ComparePipe() {
    }
    ComparePipe.prototype.transform = function (obj, original) {
        var _this = this;
        if (original === void 0) { original = {}; }
        if (Array.isArray(obj) || Array.isArray(original) || !this.isObject(obj) || !this.isObject(original)) {
            return {};
        }
        return this.getKeysOfObject(obj, original).reduce(function (diff, key) {
            if (!_this.isdeepCompareable(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    };
    ComparePipe.prototype.isObject = function (value) {
        return value !== null && typeof value === 'object';
    };
    ComparePipe.prototype.getKeysOfObject = function (obj, other) {
        return Object.keys(obj).concat(Object.keys(other)).filter(function (key, index, array) { return array.indexOf(key) === index; });
    };
    ComparePipe.prototype.isdeepCompareable = function (obj, other) {
        var _this = this;
        if (!this.isObject(obj) || !this.isObject(other)) {
            return obj === other;
        }
        return this.getKeysOfObject(obj, other).every(function (key) {
            if (!_this.isObject(obj[key]) && !_this.isObject(other[key])) {
                return obj[key] === other[key];
            }
            if (!_this.isObject(obj[key]) || !_this.isObject(other[key])) {
                return false;
            }
            return _this.isdeepCompareable(obj[key], other[key]);
        });
    };
    ComparePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'deepCompare' })
    ], ComparePipe);
    return ComparePipe;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-title{\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.mat-dialog-content{\r\n    overflow: hidden;\r\n}\r\n\r\n.close-icon{\r\n    float:right !important;\r\n    margin-top:7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pad-0{\r\n    padding: 0px;\r\n}\r\n\r\n.mt-10{\r\n    margin-top: 10px;\r\n}\r\n\r\n.pad-tp-5{\r\n    padding-top: 5px;\r\n}\r\n\r\n.pull-right{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctdGl0bGV7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBmbG9hdDpyaWdodCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWQtMHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm10LTEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZC10cC01e1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnB1bGwtcmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 pad-0\">\r\n  <span class=\"col-xs-11 pad-0\">\r\n    <h2 mat-dialog-title>{{headerLabel}}</h2>\r\n  </span>\r\n</div>\r\n<div class=\"col-xs-12 pad-0\">\r\n  <mat-divider></mat-divider>\r\n  <mat-dialog-content>\r\n    <div class=\"col-xs-12 pad-0 mt-10\">\r\n      <div *ngIf=\"isSuccess!== undefined\" [ngClass]=\"isSuccess ? 'tick jj-mr-10' : 'jj-alert jj-mr-10'\"></div>\r\n      <div class=\"pad-tp-5 jj-lh-1point4\">\r\n        {{datatoBeShowninPopUp}}\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions class=\"pull-right\" *ngIf=\"isDataString; else confirmationTemp\">\r\n    <button md-button (click)=\"okDialog()\" class=\"btn btn-primary\">OK</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n\r\n<ng-template #confirmationTemp>\r\n  <mat-dialog-actions class=\"pull-right\">\r\n    <button md-button (click)=\"cancelDialog()\" class=\"btn btn-primary jj-mr-10\">{{cancelButtonLabel}}</button>\r\n    <button md-button (click)=\"okDialog()\" class=\"btn btn-secondary\">{{okButtonLabel}}</button>\r\n  </mat-dialog-actions>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isDataString = false; // check if data is string or not
        this.isConfirmationPopUp = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.headerLabel = (this.data.headerLabel !== undefined) ? this.data.headerLabel : 'Victory Comforts';
        this.okButtonLabel = (this.data.okButtonLabel !== undefined) ? this.data.okButtonLabel : 'Yes';
        this.cancelButtonLabel = (this.data.cancelButtonLabel !== undefined) ? this.data.cancelButtonLabel : 'No';
        if (typeof this.data.message === 'string') {
            this.isDataString = true;
            if (this.data.status !== undefined) {
                this.isSuccess = (this.data.status === 'Success') ? true : false;
            }
            if (this.data.message.includes('?') || this.data.isConfirmationPopup) {
                this.isDataString = false;
                this.isConfirmationPopUp = true;
            }
        }
        this.dialogRef.updateSize('500px');
        this.datatoBeShowninPopUp = this.data.message.replace(/^"?(.+?)"?$/, '$1');
        // this.popUpHeader = this.commentsService.commentsConfigData['config']['popUpHeader'];
    };
    MessageComponent.prototype.cancelDialog = function () {
        this.dialogRef.close('Cancel');
    };
    MessageComponent.prototype.okDialog = function () {
        this.dialogRef.close('OK');
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'am-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/add-band/add-band.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/stock-home/components/add-band/add-band.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.content{\r\n    padding: 10px;\r\n    font-size: 13px;\r\n    margin:0px;\r\n}\r\n\r\n.inputBox {\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n}\r\n\r\n.label{\r\n    padding-top: 5px;\r\n}\r\n\r\n.mandatory-field::after {\r\n    content: \"*\";\r\n    color: rgb(255, 0, 0);\r\n    position: absolute;\r\n    /* left: -3px; */\r\n}\r\n\r\n.add-btn{\r\n    background-color: whitesmoke;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.add-btn:hover{\r\n    background-color: #3E4A84;\r\n    color: white;\r\n}\r\n\r\n.cursor-not-allowed{\r\n    cursor: not-allowed;\r\n}\r\n\r\n.test{\r\n    background-color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2FkZC1iYW5kL2FkZC1iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWhvbWUvY29tcG9uZW50cy9hZGQtYmFuZC9hZGQtYmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbn1cclxuXHJcbi5pbnB1dEJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLm1hbmRhdG9yeS1maWVsZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBsZWZ0OiAtM3B4OyAqL1xyXG59XHJcblxyXG4uYWRkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYWRkLWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTRBODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXJzb3Itbm90LWFsbG93ZWR7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udGVzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/stock-home/components/add-band/add-band.component.html":
/*!************************************************************************!*\
  !*** ./src/app/stock-home/components/add-band/add-band.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the code number of the band\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandName\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the size and thickness of the band\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandSize\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label\">\n      Enter the purchased quantity of the band (50mts)\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandPurchasedQuantityFifty\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the purchased quantity of the band\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandPurchasedQuantity\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the band limit for notification\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandLimit\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the size of the roll\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"rollSize\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the type of the band\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"bandType\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0\">\n    </div>\n    <div class=\"col-2 pad-0\">\n      <button class=\"btn add-btn\" [ngClass]=\"enableAdd() ? 'cursor-not-allowed' : ''\" [disabled]=\"enableAdd()\"\n        (click)=\"addBand()\">Add</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/add-band/add-band.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/stock-home/components/add-band/add-band.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBandComponent", function() { return AddBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var AddBandComponent = /** @class */ (function () {
    function AddBandComponent(stockHomeService, snackBar) {
        this.stockHomeService = stockHomeService;
        this.snackBar = snackBar;
    }
    AddBandComponent.prototype.ngOnInit = function () {
    };
    AddBandComponent.prototype.enableAdd = function () {
        if ((this.bandName !== undefined && this.bandName !== '') &&
            (this.bandPurchasedQuantity !== undefined && this.bandPurchasedQuantity !== '') &&
            (this.bandSize !== undefined && this.bandSize !== '') &&
            (this.bandLimit !== undefined && this.bandLimit !== '') &&
            (this.rollSize !== undefined && this.rollSize !== '') &&
            (this.bandType !== undefined && this.bandType !== '')) {
            return false;
        }
        return true;
    };
    AddBandComponent.prototype.addBand = function () {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        var request = {
            name: this.bandName,
            quantity: this.bandPurchasedQuantity,
            bandSize: this.bandSize,
            purchased: this.bandPurchasedQuantity,
            sold: 0,
            bandLimit: this.bandLimit,
            rollSize: this.rollSize,
            bandType: this.bandType,
            wastage: 0,
            ordered: false,
            dateOrdered: null,
            purchasedBands: this.bandPurchasedQuantity / this.rollSize + this.bandPurchasedQuantityFifty / 50,
            quantityBands: this.bandPurchasedQuantity / this.rollSize + this.bandPurchasedQuantityFifty / 50,
            soldBands: 0
        };
        this.stockHomeService.addBand(request).subscribe(function (res) {
            _this.openSnackBar('Band Added Successfully');
            _this.stockHomeService.loadingIcon$.next(false);
            _this.bandName = null;
            _this.bandPurchasedQuantity = null;
            _this.bandSize = null;
            _this.bandLimit = null;
            _this.rollSize = null;
            _this.bandType = null;
            _this.bandPurchasedQuantityFifty = null;
        });
    };
    AddBandComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        config.verticalPosition = 'top';
        config.duration = 2000;
        config.panelClass = 'vc-snackbar';
        this.snackBar.open(message, action, config);
    };
    AddBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-band',
            template: __webpack_require__(/*! ./add-band.component.html */ "./src/app/stock-home/components/add-band/add-band.component.html"),
            styles: [__webpack_require__(/*! ./add-band.component.css */ "./src/app/stock-home/components/add-band/add-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__["StockHomeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AddBandComponent);
    return AddBandComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/decrement-band/decrement-band.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/stock-home/components/decrement-band/decrement-band.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n    cursor: pointer;\r\n    margin-left: 5px;\r\n}\r\n\r\n.minus{\r\n    color: red;\r\n}\r\n\r\n.inputBox {\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    height: 20px;\r\n    width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2RlY3JlbWVudC1iYW5kL2RlY3JlbWVudC1iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1ob21lL2NvbXBvbmVudHMvZGVjcmVtZW50LWJhbmQvZGVjcmVtZW50LWJhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5taW51c3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbnB1dEJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock-home/components/decrement-band/decrement-band.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/stock-home/components/decrement-band/decrement-band.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span>\r\n        <input id=\"decrement-input\" type=\"number\" class=\"inputBox decrement-input\" [(ngModel)]=\"decrementCount\">\r\n    </span>\r\n    <span class=\"icons minus\" [style.pointerEvents]=\"disable()? 'none' : ''\">\r\n        <i class=\"fas fa-minus-square\" (click)=\"decrementBand()\"></i>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/decrement-band/decrement-band.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/stock-home/components/decrement-band/decrement-band.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DecrementBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecrementBandComponent", function() { return DecrementBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecrementBandComponent = /** @class */ (function () {
    function DecrementBandComponent() {
    }
    DecrementBandComponent.prototype.agInit = function (params) {
        this.data = params.data;
        this.params = params;
    };
    DecrementBandComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var input = document.getElementById('decrement-input');
        input.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                _this.decrementBand();
            }
        });
    };
    DecrementBandComponent.prototype.refresh = function (params) {
        return true;
    };
    DecrementBandComponent.prototype.decrementBand = function () {
        this.data.sold = this.data.sold + parseInt(this.decrementCount, 10);
        this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
        this.data.soldBands = this.data.sold / this.data.rollSize;
        this.data.quantityBands = this.data.quantity / this.data.rollSize;
        var quantity = Math.floor((this.data.quantityBands - Math.floor(this.data.quantityBands)) * this.data.rollSize);
        if (quantity <= 10) {
            this.data.wastage = this.data.wastage + quantity;
            this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
            this.data.quantityBands = this.data.quantity / this.data.rollSize;
        }
        this.params.api.refreshView();
    };
    DecrementBandComponent.prototype.disable = function () {
        if (this.decrementCount !== undefined && this.decrementCount !== '') {
            return false;
        }
        return true;
    };
    DecrementBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-decrement-band',
            template: __webpack_require__(/*! ./decrement-band.component.html */ "./src/app/stock-home/components/decrement-band/decrement-band.component.html"),
            styles: [__webpack_require__(/*! ./decrement-band.component.css */ "./src/app/stock-home/components/decrement-band/decrement-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DecrementBandComponent);
    return DecrementBandComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/increment-band/increment-band.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/stock-home/components/increment-band/increment-band.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n    cursor: pointer;\r\n    padding-left: 5px;\r\n}\r\n\r\n.plus {\r\n    color: green;\r\n}\r\n\r\n.inputBox {\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    height: 20px;\r\n    width: 30%;\r\n}\r\n\r\n.input-span{\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2luY3JlbWVudC1iYW5kL2luY3JlbWVudC1iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2luY3JlbWVudC1iYW5kL2luY3JlbWVudC1iYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbnN7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnBsdXMge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaW5wdXRCb3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaW5wdXQtc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/stock-home/components/increment-band/increment-band.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/stock-home/components/increment-band/increment-band.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span>\r\n        <mat-slide-toggle color=\"primary\" (change)=\"setBandSize($event)\">50</mat-slide-toggle>\r\n    </span>\r\n    <span class=\"input-span\">\r\n        <input id=\"increment-input\" type=\"number\" class=\"inputBox\" [(ngModel)]=\"incrementCount\">\r\n    </span>\r\n    <span class=\"icons plus\" [style.pointerEvents]=\"disable()? 'none' : ''\">\r\n        <i class=\"fas fa-plus-square\" (click)=\"incrementBand()\"></i>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/increment-band/increment-band.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/stock-home/components/increment-band/increment-band.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IncrementBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementBandComponent", function() { return IncrementBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IncrementBandComponent = /** @class */ (function () {
    function IncrementBandComponent() {
        this.input = document.getElementById('increment-input');
        this.bandChecked = false;
    }
    IncrementBandComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var input = document.getElementById('increment-input');
        input.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                _this.incrementBand();
            }
        });
    };
    IncrementBandComponent.prototype.agInit = function (params) {
        this.data = params.data;
        this.params = params;
    };
    IncrementBandComponent.prototype.refresh = function (params) {
        return true;
    };
    IncrementBandComponent.prototype.disable = function () {
        if (this.incrementCount !== undefined && this.incrementCount !== '') {
            return false;
        }
        return true;
    };
    IncrementBandComponent.prototype.incrementBand = function () {
        this.data.purchased = this.data.purchased + parseInt(this.incrementCount, 10);
        this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
        if (this.bandChecked) {
            this.data.purchasedBands = this.data.purchasedBands + parseInt(this.incrementCount, 10) / 50;
            this.data.quantityBands = this.data.quantityBands + parseInt(this.incrementCount, 10) / 50;
        }
        else {
            this.data.purchasedBands = this.data.purchasedBands + parseInt(this.incrementCount, 10) / this.data.rollSize;
            this.data.quantityBands = this.data.quantityBands + parseInt(this.incrementCount, 10) / this.data.rollSize;
        }
        if (this.data.quantity > this.data.bandLimit) {
            this.data.ordered = false;
        }
        if (this.data.quantityOrdered > 0 && this.data.quantityOrdered >= this.incrementCount) {
            this.data.quantityOrdered = this.data.quantityOrdered - this.incrementCount;
            if (this.data.quantityOrdered === 0) {
                this.data.dateOrdered = null;
            }
        }
        if (this.data)
            this.params.api.refreshView();
    };
    IncrementBandComponent.prototype.setBandSize = function (value) {
        this.bandChecked = value.checked;
    };
    IncrementBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-increment-band',
            template: __webpack_require__(/*! ./increment-band.component.html */ "./src/app/stock-home/components/increment-band/increment-band.component.html"),
            styles: [__webpack_require__(/*! ./increment-band.component.css */ "./src/app/stock-home/components/increment-band/increment-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IncrementBandComponent);
    return IncrementBandComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-right{\r\n    float: right;\r\n}\r\n\r\n.content{\r\n    margin:10px 0px 0px 5px;\r\n}\r\n\r\n.btn-primary{\r\n    margin:0px 0px 0px 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2ludm9pY2UtcG9wLXVwL2ludm9pY2UtcG9wLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL2ludm9pY2UtcG9wLXVwL2ludm9pY2UtcG9wLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVsbC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW46MTBweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 pad-0\">\n  <span class=\"col-xs-11 pad-0\">\n    <h5>Update Bands</h5>\n  </span>\n</div>\n<hr />\n<div class=\"row content\">\n  <div class=\"col-6 pad-0 label mandatory-field\">\n    Enter the invoice number\n  </div>\n  <div class=\"col-6 pad-0\">\n    <input class=\"inputBox form-control\" [(ngModel)]=\"invoiceNo\">\n  </div>\n</div>\n<div class=\"row content\">\n  <div class=\"col-6 pad-0 label mandatory-field\">\n    Updated By\n  </div>\n  <div class=\"col-6 pad-0\">\n    {{data}}\n  </div>\n</div>\n<hr />\n<mat-dialog-actions class=\"pull-right\">\n  <button md-button (click)=\"close()\" class=\"btn btn-secondary\">Close</button>\n  <button md-button (click)=\"update()\" class=\"btn btn-primary\">Update</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InvoicePopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePopUpComponent", function() { return InvoicePopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var InvoicePopUpComponent = /** @class */ (function () {
    function InvoicePopUpComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InvoicePopUpComponent.prototype.ngOnInit = function () {
    };
    InvoicePopUpComponent.prototype.update = function () {
        this.dialogRef.close(this.invoiceNo);
    };
    InvoicePopUpComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    InvoicePopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-pop-up',
            template: __webpack_require__(/*! ./invoice-pop-up.component.html */ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.html"),
            styles: [__webpack_require__(/*! ./invoice-pop-up.component.css */ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], InvoicePopUpComponent);
    return InvoicePopUpComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWhvbWUvY29tcG9uZW50cy9vcmRlci1mb3JtLWNoZWNrYm94L29yZGVyLWZvcm0tY2hlY2tib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\" [checked]=\"isChecked()\" (change)=\"selectedValue($event)\" />"

/***/ }),

/***/ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrderFormCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormCheckboxComponent", function() { return OrderFormCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderFormCheckboxComponent = /** @class */ (function () {
    function OrderFormCheckboxComponent() {
    }
    OrderFormCheckboxComponent.prototype.agInit = function (params) {
        this.data = params.data;
        this.params = params;
    };
    OrderFormCheckboxComponent.prototype.refresh = function (params) {
        return true;
    };
    OrderFormCheckboxComponent.prototype.selectedValue = function (event) {
        if (event.target.checked === true) {
            this.data.ordered = 'true';
            this.data.dateOrdered = new Date();
        }
        else {
            this.data.ordered = 'false';
            this.data.dateOrdered = null;
        }
        this.params.api.refreshView();
    };
    OrderFormCheckboxComponent.prototype.isChecked = function () {
        if (this.data.ordered === 'true' || this.data.ordered === true) {
            return true;
        }
        else {
            return false;
        }
    };
    OrderFormCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-form-checkbox',
            template: __webpack_require__(/*! ./order-form-checkbox.component.html */ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./order-form-checkbox.component.css */ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderFormCheckboxComponent);
    return OrderFormCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputBox {\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    height: 20px;\r\n    width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL29yZGVyLWZvcm0tcXVhbnRpdHkvb3JkZXItZm9ybS1xdWFudGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1ob21lL2NvbXBvbmVudHMvb3JkZXItZm9ybS1xdWFudGl0eS9vcmRlci1mb3JtLXF1YW50aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRCb3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>\n    <input id=\"quantity-input\" type=\"number\" class=\"inputBox\" [(ngModel)]=\"pendingQuantity\"\n      [disabled]=\"data.ordered === 'false'\" (input)=\"updateData()\">\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrderFormQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormQuantityComponent", function() { return OrderFormQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderFormQuantityComponent = /** @class */ (function () {
    function OrderFormQuantityComponent() {
    }
    OrderFormQuantityComponent.prototype.agInit = function (params) {
        this.data = params.data;
        this.params = params;
        this.pendingQuantity = this.data.quantityOrdered;
    };
    OrderFormQuantityComponent.prototype.refresh = function (params) {
        return true;
    };
    OrderFormQuantityComponent.prototype.updateData = function () {
        if (this.pendingQuantity > 0) {
            this.data.quantityOrdered = this.pendingQuantity;
        }
        else {
            this.data.quantityOrdered = 0;
        }
    };
    OrderFormQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-form-quantity',
            template: __webpack_require__(/*! ./order-form-quantity.component.html */ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.html"),
            styles: [__webpack_require__(/*! ./order-form-quantity.component.css */ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderFormQuantityComponent);
    return OrderFormQuantityComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/order-form/order-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form/order-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-form-table{\r\n    margin-top:10px;\r\n}\r\n\r\n.header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.order-form-content{\r\n    margin: 15px 0px 0px 0px;\r\n    font-size: 14px;\r\n}\r\n\r\n.btn{\r\n    background-color: #017BCE;\r\n    border: 1px solid #ddd;\r\n    color: white;\r\n}\r\n\r\n.btn:hover{\r\n    background-color: lightgray;\r\n    color: black;\r\n}\r\n\r\n.update-btn {\r\n    margin-top:10px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1ob21lL2NvbXBvbmVudHMvb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItZm9ybS10YWJsZXtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbn1cclxuXHJcbi5vcmRlci1mb3JtLWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3QkNFO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwZGF0ZS1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock-home/components/order-form/order-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form/order-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12 order-form-content\">\n    <div class=\"order-form-table\">\n      <ag-grid-angular #agGrid style=\"width: 100%;\" id=\"myGrid\" class=\"ag-theme-balham\" [style.height.px]=\"setHeight()\"\n        [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [defaultColDef]=\"defaultColDef\" [context]=\"context\"\n        (gridReady)=\"onGridReady($event)\" [enableSorting]=\"true\" [floatingFilter]=\"true\">\n      </ag-grid-angular>\n    </div>\n  </div>\n  <div class=\"col-12 pad-0\">\n    <button class=\"btn update-btn\" [disabled]=\"isDataChanged()\" (click)=\"updateData(rowData)\">Update</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/order-form/order-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/stock-home/components/order-form/order-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _compare_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../compare-pipe */ "./src/app/compare-pipe.ts");
/* harmony import */ var _order_form_checkbox_order_form_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-form-checkbox/order-form-checkbox.component */ "./src/app/stock-home/components/order-form-checkbox/order-form-checkbox.component.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utility.service */ "./src/app/stock-home/services/utility.service.ts");
/* harmony import */ var _order_form_quantity_order_form_quantity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-form-quantity/order-form-quantity.component */ "./src/app/stock-home/components/order-form-quantity/order-form-quantity.component.ts");








var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(stockHomeService, snackBar, utilityService) {
        this.stockHomeService = stockHomeService;
        this.snackBar = snackBar;
        this.utilityService = utilityService;
        this.columnDefs = [];
        this.rowData = [];
        this.columnDefs = [
            {
                headerName: '',
                field: 'ordered',
                width: 50,
                cellRendererFramework: _order_form_checkbox_order_form_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormCheckboxComponent"],
            },
            {
                field: 'name',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'bandSize',
                width: 100,
                filter: 'agTextColumnFilter',
                headerName: 'Size & Thickness',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: 'Remaining Balance',
                field: 'quantity',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: 'Date Of Order Placed',
                field: 'dateOrdered',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                },
                cellRenderer: function (data) {
                    return data.value ? (new Date(data.value)).toLocaleDateString('en-GB') : '';
                }
            },
            {
                headerName: 'Quantity of Order Placed',
                field: 'quantityOrdered',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                },
                cellRendererFramework: _order_form_quantity_order_form_quantity_component__WEBPACK_IMPORTED_MODULE_7__["OrderFormQuantityComponent"]
            }
        ];
        this.defaultColDef = {
            resizable: true,
            sortable: true
        };
        this.context = { componentParent: this };
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        this.searchBand();
    };
    OrderFormComponent.prototype.searchBand = function () {
        var _this = this;
        this.stockHomeService.getBands().subscribe(function (res) {
            _this.setRowData(res);
        });
    };
    OrderFormComponent.prototype.setRowData = function (data) {
        var stockData = [];
        data.map(function (band) {
            if (band.ordered === 'true') {
                band.ordered = true;
            }
            if (band.quantity < band.bandLimit) {
                stockData.push(band);
            }
        });
        this.rowData = stockData;
        this.rowDataCopy = JSON.parse(JSON.stringify(stockData));
    };
    OrderFormComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    OrderFormComponent.prototype.updateData = function (data) {
        var _this = this;
        var updateData = [];
        for (var i = 0; i < this.rowData.length; i++) {
            var equal = new _compare_pipe__WEBPACK_IMPORTED_MODULE_4__["ComparePipe"]().transform(this.rowData[i], this.rowDataCopy[i]);
            if (Object.keys(equal).length > 0) {
                updateData.push(this.rowData[i]);
            }
        }
        var req = {
            bands: updateData,
            invoice: null,
            userName: this.stockHomeService.userName
        };
        this.stockHomeService.updateBandData(req).subscribe(function (res) {
            _this.setRowData(res);
            _this.openSnackBar('Bands Updated Successfully');
        });
    };
    OrderFormComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        config.verticalPosition = 'top';
        config.duration = 2000;
        config.panelClass = 'vc-snackbar';
        this.snackBar.open(message, action, config);
    };
    OrderFormComponent.prototype.unsaveChangesPopUp = function (url) {
        var equal = this.isDataChanged();
        if (!equal) {
            this.utilityService.openMessageDialog('The changes which are done are not yet saved. Please click on the update button to save them', 'Failure');
        }
        else {
            return true;
        }
    };
    OrderFormComponent.prototype.isDataChanged = function () {
        return new _compare_pipe__WEBPACK_IMPORTED_MODULE_4__["ComparePipe"]().isdeepCompareable(this.rowData, this.rowDataCopy);
    };
    OrderFormComponent.prototype.setHeight = function () {
        var height = window.innerHeight - document.querySelector('.order-form-content').getBoundingClientRect().top - 50;
        if (height < 350) {
            height = 350;
        }
        return height;
    };
    OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-form',
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/stock-home/components/order-form/order-form.component.html"),
            styles: [__webpack_require__(/*! ./order-form.component.css */ "./src/app/stock-home/components/order-form/order-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__["StockHomeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/order-pending/order-pending.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/stock-home/components/order-pending/order-pending.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-pending-table{\r\n    margin-top:10px;\r\n}\r\n\r\n.header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.order-pending-content{\r\n    margin: 15px 0px 0px 0px;\r\n    font-size: 14px;\r\n}\r\n\r\n.btn{\r\n    background-color: #017BCE;\r\n    border: 1px solid #ddd;\r\n    color: white;\r\n}\r\n\r\n.btn:hover{\r\n    background-color: lightgray;\r\n    color: black;\r\n}\r\n\r\n.update-btn {\r\n    margin-top:10px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL29yZGVyLXBlbmRpbmcvb3JkZXItcGVuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1ob21lL2NvbXBvbmVudHMvb3JkZXItcGVuZGluZy9vcmRlci1wZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItcGVuZGluZy10YWJsZXtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbn1cclxuXHJcbi5vcmRlci1wZW5kaW5nLWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3QkNFO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwZGF0ZS1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock-home/components/order-pending/order-pending.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/stock-home/components/order-pending/order-pending.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12 header\">\n    <i class=\"fas fa-chevron-right\"></i>\n    Stock Inventory\n  </div>\n  <div class=\"col-12 order-pending-content\">\n    <div class=\"order-pending-table\">\n      <ag-grid-angular #agGrid style=\"width: 100%;\" id=\"myGrid\" class=\"ag-theme-balham\" [style.height.px]=\"setHeight()\"\n        [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [defaultColDef]=\"defaultColDef\" [context]=\"context\"\n         (gridReady)=\"onGridReady($event)\" [enableSorting]=\"true\"\n        [floatingFilter]=\"true\">\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/order-pending/order-pending.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/stock-home/components/order-pending/order-pending.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPendingComponent", function() { return OrderPendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ "./src/app/stock-home/services/utility.service.ts");
/* harmony import */ var src_app_compare_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/compare-pipe */ "./src/app/compare-pipe.ts");






var OrderPendingComponent = /** @class */ (function () {
    function OrderPendingComponent(stockHomeService, snackBar, utilityService) {
        this.stockHomeService = stockHomeService;
        this.snackBar = snackBar;
        this.utilityService = utilityService;
        this.columnDefs = [];
        this.rowData = [];
        this.columnDefs = [
            {
                field: 'name',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'bandSize',
                width: 100,
                filter: 'agTextColumnFilter',
                headerName: 'Size & Thickness',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: 'Date Of Order Placed',
                field: 'dateOrdered',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                },
                cellRenderer: function (data) {
                    return data.value ? (new Date(data.value)).toLocaleDateString('en-GB') : '';
                }
            },
            {
                headerName: 'Quantity of Order Placed',
                field: 'quantityOrdered',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            }
        ];
        this.defaultColDef = {
            resizable: true,
            sortable: true
        };
        this.context = { componentParent: this };
    }
    OrderPendingComponent.prototype.ngOnInit = function () {
        this.searchBand();
    };
    OrderPendingComponent.prototype.searchBand = function () {
        var _this = this;
        this.stockHomeService.getBands().subscribe(function (res) {
            _this.setRowData(res);
        });
    };
    OrderPendingComponent.prototype.setRowData = function (data) {
        var stockData = [];
        data.map(function (band) {
            if (band.quantityOrdered > 0) {
                stockData.push(band);
            }
        });
        this.rowData = stockData;
        this.rowDataCopy = JSON.parse(JSON.stringify(stockData));
    };
    OrderPendingComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    OrderPendingComponent.prototype.updateData = function (data) {
        var _this = this;
        var updateData = [];
        for (var i = 0; i < this.rowData.length; i++) {
            var equal = new src_app_compare_pipe__WEBPACK_IMPORTED_MODULE_5__["ComparePipe"]().transform(this.rowData[i], this.rowDataCopy[i]);
            if (Object.keys(equal).length > 0) {
                updateData.push(this.rowData[i]);
            }
        }
        this.stockHomeService.updateBandData(updateData).subscribe(function (res) {
            _this.setRowData(res);
            _this.openSnackBar('Bands Updated Successfully');
        });
    };
    OrderPendingComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        config.verticalPosition = 'top';
        config.duration = 2000;
        config.panelClass = 'vc-snackbar';
        this.snackBar.open(message, action, config);
    };
    OrderPendingComponent.prototype.unsaveChangesPopUp = function (url) {
        var equal = new src_app_compare_pipe__WEBPACK_IMPORTED_MODULE_5__["ComparePipe"]().isdeepCompareable(this.rowData, this.rowDataCopy);
        if (!equal) {
            this.utilityService.openMessageDialog('Please save the changes you have made', 'Failure');
        }
        else {
            return true;
        }
    };
    OrderPendingComponent.prototype.setHeight = function () {
        var height = window.innerHeight - document.querySelector('.order-pending-content').getBoundingClientRect().top;
        if (height < 350) {
            height = 350;
        }
        return height;
    };
    OrderPendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-pending',
            template: __webpack_require__(/*! ./order-pending.component.html */ "./src/app/stock-home/components/order-pending/order-pending.component.html"),
            styles: [__webpack_require__(/*! ./order-pending.component.css */ "./src/app/stock-home/components/order-pending/order-pending.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__["StockHomeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
    ], OrderPendingComponent);
    return OrderPendingComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/stock-history/stock-history.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/stock-home/components/stock-history/stock-history.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    padding: 10px;\r\n    font-size: 13px;\r\n    margin:0px\r\n}\r\n\r\n.download-button{\r\n    background-color: #984646 !important;\r\n    color: white;\r\n}\r\n\r\n.header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.row{\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n}\r\n\r\n.pull-right{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL3N0b2NrLWhpc3Rvcnkvc3RvY2staGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL3N0b2NrLWhpc3Rvcnkvc3RvY2staGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOjBweFxyXG59XHJcblxyXG4uZG93bmxvYWQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4NDY0NiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvKiBib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTsgKi9cclxufVxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/stock-home/components/stock-history/stock-history.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/stock-home/components/stock-history/stock-history.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-6 header\">\n      <i class=\"fas fa-chevron-right\"></i>\n      Stock History\n    </div>\n    <div class=\"col-6 header\">\n      <button *ngIf=\"isAdmin\" class=\"pull-right download-button\" (click)=\"downloadReport()\">\n        Download History Report\n      </button>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-6\">\n      Select the name of the band\n    </div>\n    <div class=\"col-6\">\n      <ng-select [items]=\"bandNames\" [(ngModel)]=\"bandName\" (change)=\"getBandHistory($event)\" [clearable]=\"false\">\n      </ng-select>\n    </div>\n  </div>\n  <div class=\"col-12 home-content\">\n    <div class=\"stocks-table\">\n      <ag-grid-angular #agGrid style=\"width: 100%;\" id=\"myGrid\" class=\"ag-theme-balham\" [style.height.px]=\"setHeight()\"\n        [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [defaultColDef]=\"defaultColDef\" [context]=\"context\"\n        (gridReady)=\"onGridReady($event)\" [enableSorting]=\"true\" [floatingFilter]=\"true\">\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/stock-history/stock-history.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/stock-home/components/stock-history/stock-history.component.ts ***!
  \********************************************************************************/
/*! exports provided: StockHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHistoryComponent", function() { return StockHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utility.service */ "./src/app/stock-home/services/utility.service.ts");




var StockHistoryComponent = /** @class */ (function () {
    function StockHistoryComponent(stockHomeService, utilityService) {
        this.stockHomeService = stockHomeService;
        this.utilityService = utilityService;
        this.bandNames = [];
        this.isAdmin = false;
        this.columnDefs = [
            {
                field: 'comfortData.name',
                headerName: 'Name',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'comfortData.bandSize',
                headerName: 'Size & Thickness',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'quantity',
                headerName: 'Quantity',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'bandDescription',
                headerName: 'Description',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'dateCreated',
                headerName: 'Date',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                },
                // filter: 'agDateColumnFilter',
                // filterParams: {
                //   browserDatePicker: true,
                //   comparator: function (filterLocalDateAtMidnight, cellValue) {
                //     var dateAsString = cellValue;
                //     var dateParts = dateAsString.split('-');
                //     var cellDate = new Date(
                //       Number(dateParts[0]),
                //       Number(dateParts[1]) - 1,
                //       Number(dateParts[2])
                //     );
                //     if (cellDate < filterLocalDateAtMidnight) {
                //       return -1;
                //     } else if (cellDate > filterLocalDateAtMidnight) {
                //       return 1;
                //     } else {
                //       return 0;
                //     }
                //   },
                // },
                cellRenderer: function (data) {
                    return data.value ? (new Date(data.value)).toLocaleDateString('en-IN') : '';
                }
            },
            {
                field: 'invoice',
                headerName: 'Invoice',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'updatedBy',
                headerName: 'Updated By',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            }
        ];
        this.defaultColDef = {
            resizable: true,
            sortable: true
        };
    }
    StockHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        this.stockHomeService.getDistinctbands().subscribe(function (res) {
            _this.stockHomeService.loadingIcon$.next(false);
            _this.bandNames = res;
        });
        this.stockHomeService.userRole$.subscribe(function (res) {
            if (res === 'ADMIN') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    StockHistoryComponent.prototype.searchHistory = function () {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        this.stockHomeService.getHistory().subscribe(function (res) {
            _this.stockHomeService.loadingIcon$.next(false);
            _this.rowData = res;
            _this.rowDataCopy = JSON.parse(JSON.stringify(res));
        });
    };
    StockHistoryComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    StockHistoryComponent.prototype.getBandHistory = function (value) {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        this.stockHomeService.getHistoryByName(value).subscribe(function (res) {
            _this.stockHomeService.loadingIcon$.next(false);
            _this.rowData = res;
            _this.rowDataCopy = JSON.parse(JSON.stringify(res));
        });
    };
    StockHistoryComponent.prototype.setHeight = function () {
        var height = window.innerHeight - document.querySelector('.stocks-table').getBoundingClientRect().top;
        if (height < 350) {
            height = 350;
        }
        return height;
    };
    StockHistoryComponent.prototype.downloadReport = function () {
        var url = '/api/download/history';
        this.utilityService.downloadDocument(url, true);
    };
    StockHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-history',
            template: __webpack_require__(/*! ./stock-history.component.html */ "./src/app/stock-home/components/stock-history/stock-history.component.html"),
            styles: [__webpack_require__(/*! ./stock-history.component.css */ "./src/app/stock-home/components/stock-history/stock-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__["StockHomeService"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], StockHistoryComponent);
    return StockHistoryComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/stock-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/stock-home/components/stock-home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.pad-0{\r\n    padding:0px;\r\n}\r\n\r\n.content{\r\n    margin:0px;\r\n    font-size: 13px;\r\n}\r\n\r\n.sub-header{\r\n    background: lightgray;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.btn{\r\n    background-color: #017BCE;\r\n    border: 1px solid #ddd;\r\n    color: white;\r\n}\r\n\r\n.btn:hover{\r\n    background-color: lightgray;\r\n    color: black;\r\n}\r\n\r\n.cursor-not-allowed{\r\n    cursor: not-allowed;\r\n}\r\n\r\n.stocks-table{\r\n    margin-top:10px;\r\n}\r\n\r\n.update-btn {\r\n    margin-top:10px\r\n}\r\n\r\n.undo-btn {\r\n    margin-top:10px\r\n}\r\n\r\n.row{\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n}\r\n\r\n.home-content{\r\n    margin: 15px 0px 0px 0px;\r\n    font-size: 14px;\r\n}\r\n\r\n.pull-right{\r\n    float: right;\r\n}\r\n\r\n.download-button{\r\n    background-color: #984646 !important;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL3N0b2NrLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL3N0b2NrLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8qIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmF5OyAqL1xyXG59XHJcblxyXG4ucGFkLTB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3QkNFO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmN1cnNvci1ub3QtYWxsb3dlZHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5zdG9ja3MtdGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi51cGRhdGUtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6MTBweFxyXG59XHJcblxyXG4udW5kby1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG9tZS1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRvd25sb2FkLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODQ2NDYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/stock-home/components/stock-home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/stock-home/components/stock-home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-6 header\">\n      <i class=\"fas fa-chevron-right\"></i>\n      Stock Inventory\n    </div>\n    <div class=\"col-6 header\">\n      <button *ngIf=\"isAdmin\" class=\"pull-right download-button\" (click)=\"downloadReport()\">\n        Download Stock Report\n      </button>\n    </div>\n  </div>\n  <div class=\"col-12 home-content\">\n    <div class=\"stocks-table\">\n      <ag-grid-angular #agGrid style=\"width: 100%;\" id=\"myGrid\" class=\"ag-theme-balham\" [style.height.px]=\"setHeight()\"\n        [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [defaultColDef]=\"defaultColDef\" [context]=\"context\"\n        (gridReady)=\"onGridReady($event)\" [enableSorting]=\"true\" [floatingFilter]=\"true\"\n        [rowClassRules]=\"rowClassRules\">\n      </ag-grid-angular>\n    </div>\n    <div class=\"col-12 pad-0\">\n      <button class=\"btn update-btn\" [disabled]=\"isDataChanged()\" (click)=\"updatePopUp()\">Update</button>\n      <button class=\"btn undo-btn\" [disabled]=\"isDataChanged()\" (click)=\"undo()\">Undo\n        <i class=\"fa fa-undo\" (click)=\"undo()\"></i>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/stock-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/stock-home/components/stock-home.component.ts ***!
  \***************************************************************/
/*! exports provided: StockHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHomeComponent", function() { return StockHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");
/* harmony import */ var _increment_band_increment_band_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./increment-band/increment-band.component */ "./src/app/stock-home/components/increment-band/increment-band.component.ts");
/* harmony import */ var _decrement_band_decrement_band_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decrement-band/decrement-band.component */ "./src/app/stock-home/components/decrement-band/decrement-band.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _compare_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../compare-pipe */ "./src/app/compare-pipe.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utility.service */ "./src/app/stock-home/services/utility.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _invoice_pop_up_invoice_pop_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice-pop-up/invoice-pop-up.component */ "./src/app/stock-home/components/invoice-pop-up/invoice-pop-up.component.ts");










var StockHomeComponent = /** @class */ (function () {
    function StockHomeComponent(stockHomeService, snackBar, utilityService, dialog) {
        this.stockHomeService = stockHomeService;
        this.snackBar = snackBar;
        this.utilityService = utilityService;
        this.dialog = dialog;
        this.bandNames = [];
        this.bandIds = ['1', '2'];
        this.enableSearch = true;
        this.bandData = [];
        this.showUpdate = false;
        this.columnDefs = [];
        this.rowData = [];
        this.rowDataCopy = [];
        this.rowClassRules = {};
        this.isAdmin = false;
        this.columnDefs = [
            {
                field: 'name',
                width: 100,
                headerName: 'Code Number',
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'bandSize',
                width: 100,
                headerName: 'Size & Thickness',
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'purchased',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'increment',
                width: 125,
                headerName: '303/152',
                cellRendererFramework: _increment_band_increment_band_component__WEBPACK_IMPORTED_MODULE_3__["IncrementBandComponent"],
            },
            {
                field: 'purchasedBands',
                headerName: 'Purchased(Rolls)',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'sold',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: '',
                field: 'decrement',
                width: 50,
                cellRendererFramework: _decrement_band_decrement_band_component__WEBPACK_IMPORTED_MODULE_4__["DecrementBandComponent"],
            },
            {
                field: 'soldBands',
                headerName: 'Sold(Rolls)',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: 'Remaining Quantity',
                field: 'quantity',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                field: 'quantityBands',
                headerName: 'Quantity(Rolls)',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: 'Wastage',
                field: 'wastage',
                width: 100,
                filter: 'agTextColumnFilter',
                filterParams: {
                    filterOptions: ['contains'],
                    debounceMs: 0,
                    caseSensitive: false,
                    suppressAndOrCondition: true
                }
            }
        ];
        this.defaultColDef = {
            resizable: true,
            sortable: true
        };
        this.context = { componentParent: this };
        this.rowClassRules = {
            'low-band-warning': function (params) {
                var lowBands = params.data.quantity;
                return lowBands < params.data.bandLimit;
            }
        };
    }
    StockHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchBand();
        this.stockHomeService.userRole$.subscribe(function (res) {
            if (res === 'ADMIN') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    StockHomeComponent.prototype.searchBand = function () {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        this.stockHomeService.getBands().subscribe(function (res) {
            _this.stockHomeService.loadingIcon$.next(false);
            _this.rowData = res;
            _this.rowDataCopy = JSON.parse(JSON.stringify(res));
        });
    };
    StockHomeComponent.prototype.updatePopUp = function () {
        var _this = this;
        var dialog = this.dialog.open(_invoice_pop_up_invoice_pop_up_component__WEBPACK_IMPORTED_MODULE_9__["InvoicePopUpComponent"], {
            width: '500px',
            panelClass: 'invoicePopUp',
            data: this.stockHomeService.userName
        });
        dialog.afterClosed().subscribe(function (val) {
            if (val) {
                _this.updateData(val);
            }
        });
    };
    StockHomeComponent.prototype.updateData = function (data) {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        var updateData = [];
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this.rowData.length; i++) {
            var equal_1 = new _compare_pipe__WEBPACK_IMPORTED_MODULE_6__["ComparePipe"]().transform(this.rowData[i], this.rowDataCopy[i]);
            if (Object.keys(equal_1).length > 0) {
                updateData.push(this.rowData[i]);
            }
        }
        var req = {
            bands: updateData,
            invoice: data,
            userName: this.stockHomeService.userName
        };
        this.stockHomeService.updateBandData(req).subscribe(function (res) {
            _this.stockHomeService.loadingIcon$.next(false);
            _this.rowData = res;
            _this.rowDataCopy = JSON.parse(JSON.stringify(res));
            _this.openSnackBar('Bands Updated Successfully');
        });
    };
    StockHomeComponent.prototype.undo = function () {
        this.rowData = JSON.parse(JSON.stringify(this.rowDataCopy));
    };
    StockHomeComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        config.verticalPosition = 'top';
        config.duration = 2000;
        config.panelClass = 'vc-snackbar';
        this.snackBar.open(message, action, config);
    };
    StockHomeComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    StockHomeComponent.prototype.unsaveChangesPopUp = function (url) {
        var equal = this.isDataChanged();
        if (!equal) {
            this.utilityService.openMessageDialog('The changes which are done are not yet saved. Please click on the update button to save them', 'Failure');
        }
        else {
            return true;
        }
    };
    StockHomeComponent.prototype.isDataChanged = function () {
        return new _compare_pipe__WEBPACK_IMPORTED_MODULE_6__["ComparePipe"]().isdeepCompareable(this.rowData, this.rowDataCopy);
    };
    StockHomeComponent.prototype.downloadReport = function () {
        var url = '/api/download/stock';
        this.utilityService.downloadDocument(url, true);
    };
    StockHomeComponent.prototype.setHeight = function () {
        var height = window.innerHeight - document.querySelector('.stocks-table').getBoundingClientRect().top - 50;
        if (height < 350) {
            height = 350;
        }
        return height;
    };
    StockHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-home',
            template: __webpack_require__(/*! ./stock-home.component.html */ "./src/app/stock-home/components/stock-home.component.html"),
            styles: [__webpack_require__(/*! ./stock-home.component.css */ "./src/app/stock-home/components/stock-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_2__["StockHomeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], StockHomeComponent);
    return StockHomeComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/components/user-registration/user-registration.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/stock-home/components/user-registration/user-registration.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    text-align: left;\r\n    background: #F5F5F5;\r\n    color: black;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    /* border:1px solid lightgray; */\r\n}\r\n\r\n.content{\r\n    padding: 10px;\r\n    font-size: 13px;\r\n    margin:0px;\r\n}\r\n\r\n.inputBox {\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n}\r\n\r\n.label{\r\n    padding-top: 5px;\r\n}\r\n\r\n.mandatory-field::after {\r\n    content: \"*\";\r\n    color: rgb(255, 0, 0);\r\n    position: absolute;\r\n    /* left: -3px; */\r\n}\r\n\r\n.add-btn{\r\n    background-color: whitesmoke;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.add-btn:hover{\r\n    background-color: #3E4A84;\r\n    color: white;\r\n}\r\n\r\n.cursor-not-allowed{\r\n    cursor: not-allowed;\r\n}\r\n\r\n.test{\r\n    background-color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staG9tZS9jb21wb25lbnRzL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWhvbWUvY29tcG9uZW50cy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbn1cclxuXHJcbi5pbnB1dEJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLm1hbmRhdG9yeS1maWVsZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBsZWZ0OiAtM3B4OyAqL1xyXG59XHJcblxyXG4uYWRkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYWRkLWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTRBODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXJzb3Itbm90LWFsbG93ZWR7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udGVzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/stock-home/components/user-registration/user-registration.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/stock-home/components/user-registration/user-registration.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12 header\">\n    <i class=\"fas fa-chevron-right\"></i>\n    Add A New User\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the name of the user\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"userName\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Enter the password for the user\n    </div>\n    <div class=\"col-2 pad-0\">\n      <input class=\"inputBox form-control\" [(ngModel)]=\"password\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0 label mandatory-field\">\n      Select the role of user\n    </div>\n    <div class=\"col-2 pad-0\">\n      <ng-select [items]=\"authorities\" [(ngModel)]=\"authority\" [clearable]=\"false\">\n      </ng-select>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-2 pad-0\">\n    </div>\n    <div class=\"col-2 pad-0\">\n      <button class=\"btn add-btn\" [ngClass]=\"enableAdd() ? 'cursor-not-allowed' : ''\" [disabled]=\"enableAdd()\"\n        (click)=\"addBand()\">Add</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock-home/components/user-registration/user-registration.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/stock-home/components/user-registration/user-registration.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_stock_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stock-home.service */ "./src/app/stock-home/services/stock-home.service.ts");




var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(stockHomeService, snackBar) {
        this.stockHomeService = stockHomeService;
        this.snackBar = snackBar;
        this.authorities = ['ADMIN', 'USER'];
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent.prototype.enableAdd = function () {
        if ((this.userName !== undefined && this.userName !== '') &&
            (this.password !== undefined && this.password !== '') &&
            (this.authority !== undefined && this.authority !== '')) {
            return false;
        }
        return true;
    };
    UserRegistrationComponent.prototype.addBand = function () {
        var _this = this;
        this.stockHomeService.loadingIcon$.next(true);
        var request = {
            username: this.userName,
            password: this.password,
            authority: this.authority,
        };
        this.stockHomeService.addUser(request).subscribe(function (res) {
            _this.openSnackBar('User Added Successfully');
            _this.stockHomeService.loadingIcon$.next(false);
            _this.userName = null;
            _this.authority = null;
            _this.password = null;
        });
    };
    UserRegistrationComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.verticalPosition = 'top';
        config.duration = 2000;
        config.panelClass = 'vc-snackbar';
        this.snackBar.open(message, action, config);
    };
    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/stock-home/components/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/stock-home/components/user-registration/user-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stock_home_service__WEBPACK_IMPORTED_MODULE_3__["StockHomeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/stock-home/services/stock-home.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/stock-home/services/stock-home.service.ts ***!
  \***********************************************************/
/*! exports provided: StockHomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHomeService", function() { return StockHomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StockHomeService = /** @class */ (function () {
    function StockHomeService(http) {
        this.http = http;
        this.loadingIcon$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.userRole$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.userRole);
    }
    StockHomeService.prototype.getBands = function () {
        var url = '/api/getData';
        return this.http.get(url);
    };
    StockHomeService.prototype.getHistory = function () {
        var url = '/api/getHistoryData';
        return this.http.get(url);
    };
    StockHomeService.prototype.getHistoryByName = function (name) {
        var url = '/api/getHistoryDataByName/' + name;
        return this.http.get(url);
    };
    StockHomeService.prototype.addBand = function (req) {
        var url = '/api/band/add/';
        return this.http.post(url, req);
    };
    StockHomeService.prototype.updateBandData = function (req) {
        var url = '/api/band/update/';
        return this.http.post(url, req);
    };
    StockHomeService.prototype.getDistinctbands = function () {
        var url = '/api/getDistinctBands';
        return this.http.get(url);
    };
    StockHomeService.prototype.downloadreport = function () {
        var url = '/api/download';
        return this.http.get(url);
    };
    StockHomeService.prototype.getUserName = function () {
        var url = '/api/myusername';
        return this.http.get(url, { responseType: 'text' });
    };
    StockHomeService.prototype.addUser = function (req) {
        var url = '/api/user/add';
        return this.http.post(url, req);
    };
    StockHomeService.prototype.setUserRole = function (role) {
        this.userRole = role;
        this.userRole$.next(role);
    };
    StockHomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StockHomeService);
    return StockHomeService;
}());



/***/ }),

/***/ "./src/app/stock-home/services/utility.service.ts":
/*!********************************************************!*\
  !*** ./src/app/stock-home/services/utility.service.ts ***!
  \********************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/message/message.component */ "./src/app/message/message.component.ts");




var UtilityService = /** @class */ (function () {
    function UtilityService(dialog) {
        this.dialog = dialog;
    }
    UtilityService.prototype.isDefined = function (input) {
        return !(input === undefined || input === null);
    };
    UtilityService.prototype.isUndefined = function (input) {
        return (input === undefined || input === null);
    };
    UtilityService.prototype.isArrayDefined = function (input) {
        return (this.isDefined(input) && input.length > 0);
    };
    UtilityService.prototype.openMessageDialog = function (message, isSuccess, headerLabel, okButtonLabel, cancelButtonLabel, isConfirmationPopup) {
        this.dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        this.dialogConfig.autoFocus = true;
        this.dialogConfig.id = '1';
        this.dialogConfig.disableClose = true;
        this.dialogConfig.data = {
            'message': message,
            'status': isSuccess,
            'headerLabel': headerLabel,
            'okButtonLabel': okButtonLabel,
            'cancelButtonLabel': cancelButtonLabel,
            'isConfirmationPopup': isConfirmationPopup,
        };
        return this.dialog.open(src_app_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], this.dialogConfig);
    };
    UtilityService.prototype.downloadDocument = function (url, newTab) {
        // need to call esb service for downloading csv data
        var newDiv = document.createElement('div');
        newDiv.id = 'formParent';
        newDiv.style.display = 'none';
        document.querySelector('body').appendChild(newDiv);
        var newForm = document.createElement('form');
        newForm.method = 'GET';
        if (newTab) {
            newForm.target = '_blank';
        }
        newForm.action = url;
        var newInput = document.createElement('input');
        newInput.type = 'textarea';
        newInput.id = 'inputData';
        newInput.name = 'inputData';
        var newBtn = document.createElement('button');
        newBtn.id = 'dwnBtn';
        newBtn.type = 'submit';
        newForm.appendChild(newInput);
        newForm.appendChild(newBtn);
        newDiv.appendChild(newForm);
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
            newBtn.click();
            newDiv.remove();
        }, 0);
    };
    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/unsaved-changes.guard.ts":
/*!******************************************!*\
  !*** ./src/app/unsaved-changes.guard.ts ***!
  \******************************************/
/*! exports provided: UnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function() { return UnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnsavedChangesGuard = /** @class */ (function () {
    function UnsavedChangesGuard() {
    }
    UnsavedChangesGuard.prototype.canDeactivate = function (component, next, state, nextState) {
        this.currentComponent = component;
        return this.currentComponent.unsaveChangesPopUp(nextState.url);
    };
    UnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnsavedChangesGuard);
    return UnsavedChangesGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\saisr\Downloads\vc-stocks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map