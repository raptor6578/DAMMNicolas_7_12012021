(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "ceoZ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "7s9P");





class HeaderComponent {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 2, consts: [["alt", "logo version desktop", "width", "150", 1, "logo", 3, "src"], ["alt", "logo version mobile", "width", "30", "height", "30", 1, "logo-mobile", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.env.urlApi, "/images/logo/logo-desktop.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.env.urlApi, "/images/logo/logo-mobile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-bottom: 1px solid #dcdcdc;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n  top: 0;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  top: -50px;\n}\nheader[_ngcontent-%COMP%]   .logo-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 840px) {\n  header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   .logo-mobile[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    left: 10px;\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUo7QUFERTtFQUNFLGFBQUE7QUFHSjtBQURBO0VBRUk7SUFDRSxhQUFBO0VBR0o7RUFGRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGNcbiAgaGVpZ2h0OiA1MHB4XG4gIGRpc3BsYXk6IGZsZXhcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB3aWR0aDogMTAwJVxuICB0b3A6IDBcbiAgLmxvZ29cbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBsZWZ0OiAzMHB4XG4gICAgdG9wOiAtNTBweFxuICAubG9nby1tb2JpbGVcbiAgICBkaXNwbGF5OiBub25lXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KVxuICBoZWFkZXJcbiAgICAubG9nb1xuICAgICAgZGlzcGxheTogbm9uZVxuICAgIC5sb2dvLW1vYmlsZVxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgbGVmdDogMTBweFxuICAgICAgdG9wOiAxMHB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/main.ts */"zUnb");


/***/ }),

/***/ "7s9P":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Se deconnecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_fa_icon_3_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.loginMobile ? ctx_r10.loginMobile = false : ctx_r10.loginMobile = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faSignInAlt);
} }
function LoginComponent_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_fa_icon_4_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faSignOutAlt);
} }
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_5_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmit(_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignInAlt"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
    }
    ngOnInit() {
        this.loginMobile = false;
        this.auth.connected$.subscribe(value => this.connected = value);
    }
    onSubmit(form) {
        this.auth.login(form.value.email, form.value.password).then(() => this.loginMobile = false);
    }
    logout() {
        this.auth.logout();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 5, consts: [["class", "login", 4, "ngIf"], ["class", "logout-button", 3, "click", 4, "ngIf"], [1, "button-mobile-connect"], ["size", "2x", 3, "icon", "click", 4, "ngIf"], ["class", "login-mobile", 4, "ngIf"], [1, "login"], [3, "ngSubmit"], ["f", "ngForm"], ["title", "Votre email"], ["type", "email", "placeholder", "Votre email", "name", "email", "ngModel", ""], ["title", "Votre mot de passe"], ["type", "password", "placeholder", "Votre mot de passe", "name", "password", "ngModel", ""], [1, "login-button"], [1, "logout-button", 3, "click"], ["size", "2x", 3, "icon", "click"], [1, "login-mobile"], [1, "arrow"], ["type", "email", "placeholder", "Votre email", "name", "email", "id", "email", "ngModel", ""], ["type", "password", "placeholder", "Votre mot de passe", "name", "password", "id", "password", "ngModel", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_fa_icon_3_Template, 1, 1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_fa_icon_4_Template, 1, 1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 10, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected && ctx.loginMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".login-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.button-mobile-connect[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.login[_ngcontent-%COMP%] {\n  margin: 13px;\n}\n\n.login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   [type=password][_ngcontent-%COMP%] {\n  width: 140px;\n  height: 23px;\n  margin-right: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  margin: 13px;\n  color: black;\n  background-color: #ff5c18;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  background-color: #33fa6d;\n}\n\n@media screen and (max-width: 700px) {\n  .login[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logout-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .button-mobile-connect[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10px;\n  }\n\n  .login-mobile[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    width: 200px;\n    height: auto;\n    right: 10px;\n    top: 90px;\n    background-color: #efefef;\n    box-shadow: 0 0 20px 0 #b2b2b2;\n    border-radius: 5px;\n    margin: 0;\n  }\n  .login-mobile[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: relative;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 13px solid transparent;\n    border-bottom: 13px solid #efefef;\n    top: -10px;\n    left: 170px;\n  }\n  .login-mobile[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .login-mobile[_ngcontent-%COMP%]   [type=password][_ngcontent-%COMP%] {\n    width: 95%;\n    margin-bottom: 10px;\n  }\n  .login-mobile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUpBO0VBQ0UseUJBQUE7QUFPRjs7QUFMQTtFQUNFO0lBQ0UsYUFBQTtFQVFGOztFQVBBO0lBQ0UsYUFBQTtFQVVGOztFQVRBO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUFZRjs7RUFYQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBY0Y7RUFiRTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxtQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsaUNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQWVKO0VBZEU7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFnQko7RUFmRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7RUFpQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1tb2JpbGVcbiAgZGlzcGxheTogbm9uZVxuXG4uYnV0dG9uLW1vYmlsZS1jb25uZWN0XG4gIGRpc3BsYXk6IG5vbmVcblxuLmxvZ2luXG4gIG1hcmdpbjogMTNweFxuICBpbnB1dFt0eXBlPWVtYWlsXSxbdHlwZT1wYXNzd29yZF1cbiAgICB3aWR0aDogMTQwcHhcbiAgICBoZWlnaHQ6IDIzcHhcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxuXG5idXR0b25cbiAgYm9yZGVyOiBub25lXG4gIGJvcmRlci1yYWRpdXM6IDVweFxuICBwYWRkaW5nOiA1cHhcblxuLmxvZ291dC1idXR0b25cbiAgbWFyZ2luOiAxM3B4XG4gIGNvbG9yOiBibGFja1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YzE4XG5cbi5sb2dpbi1idXR0b25cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZmE2ZFxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbiAgLmxvZ2luXG4gICAgZGlzcGxheTogbm9uZVxuICAubG9nb3V0LWJ1dHRvblxuICAgIGRpc3BsYXk6IG5vbmVcbiAgLmJ1dHRvbi1tb2JpbGUtY29ubmVjdFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgbWFyZ2luOiAxMHB4XG4gIC5sb2dpbi1tb2JpbGVcbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHdpZHRoOiAyMDBweFxuICAgIGhlaWdodDogYXV0b1xuICAgIHJpZ2h0OiAxMHB4XG4gICAgdG9wOiA5MHB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZlxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgI2IyYjJiMlxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgIG1hcmdpbjogMFxuICAgIC5hcnJvd1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICB3aWR0aDogMFxuICAgICAgaGVpZ2h0OiAwXG4gICAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50XG4gICAgICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkICNlZmVmZWZcbiAgICAgIHRvcDogLTEwcHhcbiAgICAgIGxlZnQ6IDE3MHB4XG4gICAgaW5wdXRbdHlwZT1lbWFpbF0sW3R5cGU9cGFzc3dvcmRdXG4gICAgICB3aWR0aDogOTUlXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgZm9ybVxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgcGFkZGluZzogMTBweFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/publication.service */ "wzbf");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile.service */ "Aso2");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/socket-io.service */ "XRfs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/date-interval.pipe */ "uRof");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/reverse.pipe */ "IFuf");












function HomeComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmitPublication(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Publier sur le r\u00E9seau Groupomania");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ecrivez quelque chose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ajouter une image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_form_3_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFileAdded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Publier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onDeletePublication(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faTrashAlt);
} }
function HomeComponent_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.profile.getUrlPicture(publication_r6.picture), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "publication de ", publication_r6.Profile.lastName, " ", publication_r6.Profile.firstName, "");
} }
function HomeComponent_div_4_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_15_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.like(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("J'aime (", ctx_r17.countVote(publication_r6.Vote), ")");
} }
function HomeComponent_div_4_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_15_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.dislike(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Je n'aime plus (", ctx_r18.countVote(publication_r6.Vote), ")");
} }
function HomeComponent_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_4_div_15_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_4_div_15_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_15_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.focusInputComment(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Commenter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.existingVote(publication_r6.Vote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.existingVote(publication_r6.Vote));
} }
function HomeComponent_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.loadComments(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voir les commentaires pr\u00E9c\u00E9dents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_18_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_18_span_7_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const comment_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onDeleteComment(publication_r6.id, comment_r34.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r35.faTrashAlt);
} }
function HomeComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dateInterval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_4_div_18_span_7_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r34 = ctx.$implicit;
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r11.profile.getUrlPicture(comment_r34.User.Profile.picture) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, comment_r34.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r34.User.Profile.lastName, " ", comment_r34.User.Profile.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r6.UserId === ctx_r11.auth.getId() || ctx_r11.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r34.content);
} }
function HomeComponent_div_4_form_20_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_4_form_20_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.onSubmitComment(_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vous pouvez commenter la publication ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", publication_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "input-comment-" + publication_r6.id);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " post\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "dateInterval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_4_span_11_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_4_div_14_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_4_div_15_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_4_div_17_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_4_div_18_Template, 10, 9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "reverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_4_form_20_Template, 6, 2, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.profile.getUrlPicture(publication_r6.Profile.picture) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", publication_r6.Profile.lastName, " ", publication_r6.Profile.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, publication_r6.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.admin || ctx_r1.auth.getId() === publication_r6.UserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r6.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r6.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.offsetComments[publication_r6.id] !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, publication_r6.Comment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.connected);
} }
class HomeComponent {
    constructor(auth, publication, profile, socket) {
        this.auth = auth;
        this.publication = publication;
        this.profile = profile;
        this.socket = socket;
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
    }
    onWindowScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight) * 100;
        if (scrollPercentage >= 95 && !this.scrollEnd) {
            this.scrollEnd = true;
            this.loadPublications();
        }
    }
    ngOnInit() {
        this.publications = [];
        this.limitPublications = 2;
        this.offsetPublications = 0;
        this.limitComments = 5;
        this.offsetComments = {};
        this.auth.connected$.subscribe(connected => this.connected = connected);
        this.auth.admin$.subscribe(admin => this.admin = admin);
        this.loadPublications();
        this.initializeSocketIO();
    }
    ngOnDestroy() {
        this.destroySocketIO();
    }
    initializeSocketIO() {
        this.newPublication$ = this.socket.on('newPublication').subscribe((data) => {
            this.publications.unshift(data);
            this.offsetPublications++;
        });
        this.deletePublication$ = this.socket.on('deletePublication').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.id));
            if (indexPublication !== -1) {
                this.publications.splice(indexPublication, 1);
                this.offsetPublications--;
            }
        });
        this.deleteComment$ = this.socket.on('deleteComment').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.idPublication));
            if (indexPublication !== -1) {
                const indexComment = this.publications[indexPublication].Comment.findIndex(comment => comment.id === Number(data.idComment));
                if (indexComment !== -1) {
                    this.publications[indexPublication].Comment.splice(indexComment, 1);
                    // const idPublication = this.publications[indexPublication].id;
                    // this.offsetComments[idPublication]--;
                }
            }
        });
        this.newComment$ = this.socket.on('newComment').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
            if (indexPublication !== -1) {
                this.publications[indexPublication].Comment.push(data);
                const publicationId = this.publications[indexPublication].id;
                if (this.offsetComments[publicationId] !== 0) {
                    if (this.offsetComments[publicationId]) {
                        this.offsetComments[publicationId]++;
                    }
                    else {
                        this.offsetComments[publicationId] = 1;
                    }
                }
            }
        });
        this.addVote$ = this.socket.on('addVote').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
            this.publications[indexPublication].Vote.push(data);
        });
        this.deleteVote$ = this.socket.on('deleteVote').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
            if (indexPublication !== -1) {
                const indexVote = this.publications[indexPublication].Vote.findIndex(vote => vote.UserId === Number(data.UserId));
                if (indexVote !== -1) {
                    this.publications[indexPublication].Vote.splice(indexVote, 1);
                }
            }
        });
    }
    destroySocketIO() {
        this.newPublication$.unsubscribe();
        this.deletePublication$.unsubscribe();
        this.deleteComment$.unsubscribe();
        this.newComment$.unsubscribe();
        this.addVote$.unsubscribe();
        this.deleteVote$.unsubscribe();
    }
    loadPublications() {
        this.publication.getPublications(this.offsetPublications, this.limitPublications)
            .then(publications => {
            if (publications.length >= 1) {
                for (const publication of publications) {
                    this.publications.push(publication);
                    if (publication.Comment.length < this.limitComments) {
                        this.offsetComments[publication.id] = 0;
                    }
                }
                this.offsetPublications += this.limitPublications;
                this.scrollEnd = false;
            }
        });
    }
    loadComments(id) {
        if (!this.offsetComments[id]) {
            this.offsetComments[id] = this.limitComments;
        }
        this.publication.getComment(id, this.offsetComments[id], this.limitComments)
            .then((comments) => {
            this.offsetComments[id] += this.limitComments;
            if (comments.length > 0) {
                for (const comment of comments) {
                    const indexPublication = this.publications.findIndex(publication => publication.id === id);
                    this.publications[indexPublication].Comment.unshift(comment);
                    if (comments.length < this.limitComments) {
                        this.offsetComments[id] = 0;
                    }
                }
            }
            else {
                this.offsetComments[id] = 0;
            }
        });
    }
    onSubmitPublication(form) {
        this.publication.addPublication(form, this.image).then();
    }
    onDeletePublication(id) {
        this.publication.deletePublication(id).then();
    }
    onDeleteComment(idPublication, idComment) {
        this.publication.deleteComment(idPublication, idComment).then();
    }
    onFileAdded(event) {
        this.image = event.target.files[0];
    }
    onSubmitComment(form) {
        this.publication.addComment(form.value.publicationId, form.value.comment).then();
    }
    like(id) {
        this.publication.addVote(id).then();
    }
    dislike(id) {
        this.publication.deleteVote(id).then();
    }
    countVote(votes) {
        return votes.length;
    }
    existingVote(votes) {
        const indexVote = votes.findIndex(vote => vote.UserId === this.auth.getId());
        return indexVote !== -1;
    }
    focusInputComment(id) {
        document.getElementById('input-comment-' + id).focus();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 2, consts: [[1, "home"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "content"], ["name", "content", "id", "content", "ngModel", ""], ["for", "image", 1, "label-image"], ["type", "file", "name", "image", "id", "image", "accept", "image/*", 3, "change"], [1, "publication"], [1, "header-publication"], [1, "author"], [1, "profile-picture"], ["class", "delete", 3, "click", 4, "ngIf"], [1, "content"], ["class", "illustration", 4, "ngIf"], ["class", "action", 4, "ngIf"], [1, "comments"], ["class", "show-more", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], [3, "icon"], [1, "illustration"], [3, "src", "alt"], [1, "action"], [3, "click", 4, "ngIf"], [3, "click"], [1, "show-more", 3, "click"], [1, "comment"], [1, "profile-picture", 3, "title"], [1, "name"], [1, "message"], ["type", "hidden", "id", "publicationId", "name", "publicationId", 3, "ngModel"], ["type", "text", "name", "comment", "placeholder", "\u00C9crivez un commentaire...", "ngModel", "", 3, "id"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "R\u00E9seau Groupomania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_form_3_Template, 12, 0, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 21, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], pipes: [_pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_9__["DateIntervalPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  max-width: 800px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  padding: 20px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: 1px solid #eeeeee;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #5fe5fa;\n  padding: 10px;\n  border-radius: 5px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-image[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  background-color: #e3e3e3;\n  border-radius: 5px;\n  width: 120px;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-top: 20px;\n  border-top: 2px solid #e3e3e3;\n}\n.publication[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publication[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n  padding: 10px 0 10px 0;\n}\n.publication[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  margin-bottom: 10px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #e3e3e3;\n  border-radius: 20px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  background-color: #e3e3e3;\n  margin-top: 20px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FBRkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFJTjtBQUhJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUtOO0FBSkk7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFNTjtBQUxJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFPTjtBQU5JO0VBQ0UsWUFBQTtBQVFOO0FBUEk7RUFDRSxhQUFBO0FBU047QUFSSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVU47QUFSQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFXRjtBQVZFO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBWUo7QUFYSTtFQUNFLHNCQUFBO0FBYU47QUFaSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWNOO0FBYkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFlSjtBQWRJO0VBQ0UsV0FBQTtBQWdCTjtBQWZFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBaUJKO0FBaEJJO0VBQ0UsZUFBQTtBQWtCTjtBQWpCRTtFQUNFLGdCQUFBO0FBbUJKO0FBbEJJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBb0JOO0FBbkJJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFxQk47QUFwQk07RUFDRSxtQkFBQTtBQXNCUjtBQXJCTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBdUJSO0FBdEJRO0VBQ0UsaUJBQUE7QUF3QlY7QUF2Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXlCTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lXG4gIG1heC13aWR0aDogODAwcHhcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGZvcm1cbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgcGFkZGluZzogMjBweFxuICAgIGgzXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgbGFiZWxcbiAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIGlucHV0LCB0ZXh0YXJlYVxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZVxuICAgIGJ1dHRvblxuICAgICAgYm9yZGVyOiBub25lXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZlNWZhXG4gICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICB0ZXh0YXJlYVxuICAgICAgaGVpZ2h0OiAxMDBweFxuICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgaW5wdXRbdHlwZT10ZXh0XVxuICAgICAgaGVpZ2h0OiAzMHB4XG4gICAgaW5wdXRbdHlwZT1maWxlXVxuICAgICAgZGlzcGxheTogbm9uZVxuICAgIC5sYWJlbC1pbWFnZVxuICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgIHBhZGRpbmc6IDVweFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgICB3aWR0aDogMTIwcHhcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4ucHVibGljYXRpb25cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgbWFyZ2luLXRvcDogMjBweFxuICBib3JkZXItcmFkaXVzOiA1cHhcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIHBhZGRpbmc6IDIwcHhcbiAgLmhlYWRlci1wdWJsaWNhdGlvblxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTNlM2UzXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgIC5wcm9maWxlLXBpY3R1cmVcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAuZGVsZXRlXG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gIC5pbGx1c3RyYXRpb25cbiAgICBwYWRkaW5nLXRvcDogMTBweFxuICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2UzZTNlM1xuICAgIGltZ1xuICAgICAgd2lkdGg6IDEwMCVcbiAgLmFjdGlvblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTNcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMFxuICAgIHNwYW5cbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAuY29tbWVudHNcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgLnNob3ctbW9yZVxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIC5jb21tZW50XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgICAucHJvZmlsZS1waWN0dXJlXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3BcbiAgICAgIC5jb250ZW50XG4gICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XG4gICAgICAgIC5kZWxldGVcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgIGlucHV0W3R5cGU9dGV4dF1cbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgICBoZWlnaHQ6IDMwcHhcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuICAgICAgbWFyZ2luLXRvcDogMjBweFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfile() {
        return new Promise((resolve, reject) => {
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/profile')
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    putProfile(form, image) {
        const formData = new FormData();
        for (const key of Object.keys(form.value)) {
            if (form.value[key]) {
                formData.append(key, form.value[key]);
            }
        }
        if (image) {
            formData.append('image', image);
        }
        return new Promise((resolve, reject) => {
            this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/profile', formData)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    getUrlPicture(picture) {
        let urlPicture;
        if (picture) {
            urlPicture = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/images/upload/' + picture;
        }
        else {
            urlPicture = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/images/default-profile.png';
        }
        return urlPicture;
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    urlApi: 'http://localhost:8888'
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

/***/ "IFuf":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReversePipe {
    transform(value) {
        return value.reverse();
    }
}
ReversePipe.ɵfac = function ReversePipe_Factory(t) { return new (t || ReversePipe)(); };
ReversePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reverse", type: ReversePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReversePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'reverse'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");






class AppComponent {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 70px auto 20px auto;\n}\nmain[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #dcdcdc;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW5cbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBtYXJnaW46IDcwcHggYXV0byAyMHB4IGF1dG9cbiAgLmNvbnRhaW5lclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICBwYWRkaW5nOiAyMHB4XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkY1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile.service */ "Aso2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/date-interval.pipe */ "uRof");









function AdminComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "dateInterval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminComponent_div_4_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setAdmin(user_r1.id, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_4_Template_fa_icon_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteUser(user_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.profile.getUrlPicture(user_r1.Profile.picture) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r1.Profile.lastName, " ", user_r1.Profile.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, user_r1.lastConnection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r1.id === ctx_r0.auth.getId());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", user_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", !user_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", user_r1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faEnvelope);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faTrashAlt);
} }
class AdminComponent {
    constructor(auth, profile) {
        this.auth = auth;
        this.profile = profile;
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
        this.auth.getAllUsers().then(users => this.users = users);
    }
    deleteUser(id) {
        this.auth.delete(id).then(() => {
            const indexUser = this.users.findIndex(user => user.id === id);
            this.users.splice(indexUser, 1);
        });
    }
    setAdmin(id, admin) {
        this.auth.setAdmin(id, admin).then();
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 5, vars: 1, consts: [[1, "admin"], [1, "users-list"], ["class", "user", 4, "ngFor", "ngForOf"], [1, "user"], [1, "profile-picture"], [1, "name"], [1, "last-connection"], [1, "user-type"], [3, "disabled", "change"], ["value", "1", 3, "selected"], ["value", "0", 3, "selected"], [1, "email"], [3, "href"], [3, "icon"], [1, "delete"], [3, "icon", "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Espace admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminComponent_div_4_Template, 18, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], pipes: [_pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_7__["DateIntervalPipe"]], styles: [".admin[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .last-connection[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 200px;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%], .admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.admin[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDRSxzQkFBQTtBQUdOO0FBRkk7RUFDRSxtQkFBQTtBQUlOO0FBSE07RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBS1I7QUFKTTtFQUNFLGlCQUFBO0FBTVI7QUFMTTtFQUNFLGVBQUE7QUFPUjtBQU5JO0VBQ0UsY0FBQTtBQVFOO0FBUEk7RUFDRSxZQUFBO0FBU04iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pblxuICBtYXgtd2lkdGg6IDgwMHB4XG4gIC51c2Vycy1saXN0XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBtYXJnaW4tdG9wOiA0MHB4XG4gICAgLnByb2ZpbGUtcGljdHVyZVxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICAgIC51c2VyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICAubmFtZSwgLmxhc3QtY29ubmVjdGlvblxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgICAgLnVzZXItdHlwZSwgLmVtYWlsLCAuZGVsZXRlXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4XG4gICAgICAuZGVsZXRlXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIGFcbiAgICAgIGNvbG9yOiBpbmhlcml0XG4gICAgc2VsZWN0XG4gICAgICB3aWR0aDogMTAwcHhcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent, ProfileRemoveAccountConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRemoveAccountConfirmDialogComponent", function() { return ProfileRemoveAccountConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "Aso2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function ProfileComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
class ProfileComponent {
    constructor(profileService, dialog) {
        this.profileService = profileService;
        this.dialog = dialog;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.profile = {};
    }
    ngOnInit() {
        this.profileService.getProfile()
            .then(profile => {
            this.profile = profile;
            if (this.profile.picture) {
                this.profile.picture = `${this.env.urlApi}/images/upload/${this.profile.picture}`;
            }
            else {
                this.profile.picture = `${this.env.urlApi}/images/default-profile.png`;
            }
        });
    }
    onSubmit(form) {
        this.profileService.putProfile(form, this.image)
            .then(response => this.message = response.message)
            .catch(error => this.message = error.message);
    }
    openDialog() {
        this.dialog.open(ProfileRemoveAccountConfirmDialogComponent);
    }
    onFileAdded(event) {
        this.image = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.profile.picture = reader.result;
        });
        reader.readAsDataURL(this.image);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 24, vars: 8, consts: [[4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "image"], ["type", "file", "name", "image", "id", "image", "accept", "image/*", 3, "change"], ["for", "lastName"], ["type", "text", "name", "lastName", "id", "lastName", 3, "ngModel"], ["for", "firstName"], ["type", "text", "name", "firstName", "id", "firstName", 3, "ngModel"], ["appearance", "fill"], ["matInput", "", "name", "birthDate", "id", "birthDate", 3, "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "submit", 1, "save-profile"], [1, "remove-account", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mon profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_p_2_Template, 2, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_6_listener($event) { return ctx.onFileAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Votre nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Votre pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Votre date de naissance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_22_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Supprimer mon compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.profile.picture + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.profile.birthDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"]], styles: ["p[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 20px;\n  color: red;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  font-size: 14px;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nform[_ngcontent-%COMP%]   label[for=image][_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  height: 150px;\n  background-color: black;\n  background-size: cover;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nform[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 5px;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n}\n\nform[_ngcontent-%COMP%]   .save-profile[_ngcontent-%COMP%] {\n  background-color: #5fe5fa;\n}\n\nform[_ngcontent-%COMP%]   .remove-account[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #ff5c18;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUY7O0FBREU7RUFDRSxtQkFBQTtBQUdKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEU7RUFDRSxhQUFBO0FBS0o7O0FBSkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUxFO0VBQ0UsWUFBQTtBQU9KOztBQU5FO0VBQ0UsWUFBQTtBQVFKOztBQVBFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVJFO0VBQ0UseUJBQUE7QUFVSjs7QUFURTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwXG4gIHdpZHRoOiAzMDBweFxuICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gIGNvbG9yOiByZWRcblxuZm9ybVxuICB3aWR0aDogMzAwcHhcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIG1hcmdpbjogYXV0b1xuICBmb250LXNpemU6IDE0cHhcbiAgbGFiZWxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gIGxhYmVsW2Zvcj1pbWFnZV1cbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIHdpZHRoOiAxNTBweFxuICAgIGhlaWdodDogMTUwcHhcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcbiAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICBtYXJnaW46IGF1dG9cbiAgICBtYXJnaW4tdG9wOiAzMHB4XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxuICBpbnB1dFt0eXBlPWZpbGVdXG4gICAgZGlzcGxheTogbm9uZVxuICBpbnB1dCwgdGV4dGFyZWFcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgYm9yZGVyOiBub25lXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gIGlucHV0W3R5cGU9dGV4dF1cbiAgICBoZWlnaHQ6IDMwcHhcbiAgdGV4dGFyZWFcbiAgICBoZWlnaHQ6IDUwcHhcbiAgYnV0dG9uXG4gICAgYm9yZGVyOiBub25lXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgaGVpZ2h0OiAzMHB4XG4gIC5zYXZlLXByb2ZpbGVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZlNWZhXG4gIC5yZW1vdmUtYWNjb3VudFxuICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YzE4XG4gICAgY29sb3I6IGJsYWNrXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.sass']
            }]
    }], function () { return [{ type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();
class ProfileRemoveAccountConfirmDialogComponent {
    constructor(auth) {
        this.auth = auth;
    }
    removeConfirmed() {
        this.auth.delete(this.auth.getId()).then();
    }
}
ProfileRemoveAccountConfirmDialogComponent.ɵfac = function ProfileRemoveAccountConfirmDialogComponent_Factory(t) { return new (t || ProfileRemoveAccountConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"])); };
ProfileRemoveAccountConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileRemoveAccountConfirmDialogComponent, selectors: [["app-profile-remove-account-confirm-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "confirm", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "cancel"]], template: function ProfileRemoveAccountConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00CAtes-vous s\u00FBr de vouloir supprimer votre compte?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRemoveAccountConfirmDialogComponent_Template_button_click_3_listener() { return ctx.removeConfirmed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], styles: [".confirm[_ngcontent-%COMP%] {\n  background-color: #ff5c18;\n  color: white;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  background-color: #33fa6d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9yZW1vdmUtYWNjb3VudC1jb25maXJtLWRpYWxvZy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9yZW1vdmUtYWNjb3VudC1jb25maXJtLWRpYWxvZy5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMxOFxuICBjb2xvcjogd2hpdGVcblxuLmNhbmNlbFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNmYTZkXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRemoveAccountConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-remove-account-confirm-dialog',
                templateUrl: 'remove-account-confirm-dialog.html',
                styleUrls: ['./remove-account-confirm-dialog.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "XRfs":
/*!***********************************************!*\
  !*** ./src/app/services/socket-io.service.ts ***!
  \***********************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





class SocketIoService {
    constructor() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApi);
    }
    on(event) {
        const data$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.socket.on(event, data => {
            data$.next(data);
        });
        return data$;
    }
}
SocketIoService.ɵfac = function SocketIoService_Factory(t) { return new (t || SocketIoService)(); };
SocketIoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketIoService, factory: SocketIoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketIoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/nav/nav.component */ "ceoZ");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/login/login.component */ "7s9P");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _middleware_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middleware/auth-interceptor */ "iOPf");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/date-interval.pipe */ "uRof");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "IFuf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _middleware_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileRemoveAccountConfirmDialogComponent"],
        _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__["DateIntervalPipe"],
        _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__["ReversePipe"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _layout_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileRemoveAccountConfirmDialogComponent"],
                    _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__["DateIntervalPipe"],
                    _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__["ReversePipe"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _middleware_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ceoZ":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faIdCard);
} }
function NavComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faIdBadge);
} }
class NavComponent {
    constructor(auth) {
        this.auth = auth;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faIdCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faIdCard"];
        this.faIdBadge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faIdBadge"];
    }
    ngOnInit() {
        this.auth.connected$.subscribe(value => this.connected = value);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 6, vars: 3, consts: [["routerLink", "/"], [3, "icon"], ["routerLink", "signup", 4, "ngIf"], ["routerLink", "profile", 4, "ngIf"], ["routerLink", "signup"], ["routerLink", "profile"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_a_4_Template, 3, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_a_5_Template, 3, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  margin-left: 220px;\n  display: flex;\n  border-right: 1px #e3e3e3 solid;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  height: 10px;\n  padding: 20px 15px 20px 15px;\n  display: block;\n  border-left: 1px #e3e3e3 solid;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3;\n}\n@media screen and (max-width: 840px) {\n  nav[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBQ0UseUJBQUE7QUFHTjtBQURBO0VBQ0U7SUFDRSxpQkFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdlxuICBtYXJnaW4tbGVmdDogMjIwcHhcbiAgZGlzcGxheTogZmxleFxuICBib3JkZXItcmlnaHQ6IDFweCAjZTNlM2UzIHNvbGlkXG4gIGFcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICBjb2xvcjogYmxhY2tcbiAgICBoZWlnaHQ6IDEwcHhcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMjBweCAxNXB4XG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBib3JkZXItbGVmdDogMXB4ICNlM2UzZTMgc29saWRcbiAgICAmOmhvdmVyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KVxuICBuYXZcbiAgICBtYXJnaW4tbGVmdDogNTBweFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "iOPf":
/*!************************************************!*\
  !*** ./src/app/middleware/auth-interceptor.ts ***!
  \************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class AuthInterceptor {
    constructor(auth) {
        this.auth = auth;
        this.auth.connected$.subscribe(connected => this.connected = connected);
    }
    intercept(req, next) {
        const authToken = this.auth.getToken();
        if (this.connected) {
            if (this.auth.tokenNotExpired()) {
                const newRequest = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + authToken)
                });
                return next.handle(newRequest);
            }
            else {
                this.auth.logout();
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
            }
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "kVkw":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function FooterComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Espace admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.admin$.subscribe(admin => this.admin = admin);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 1, consts: [[1, "copyright"], ["routerLink", "admin", 4, "ngIf"], ["routerLink", "admin"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Groupomania tous droits r\u00E9serv\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_a_3_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #efefef;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 1px solid #dcdcdc;\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVKO0FBREU7RUFDRSxnQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJcbiAgcG9zaXRpb246IGZpeGVkXG4gIGJvdHRvbTogMFxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDQwcHhcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZlxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2RjZGNcbiAgLmNvcHlyaWdodFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBhXG4gICAgbWFyZ2luLWxlZnQ6IDVweFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.connected$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.admin$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            this.token = token;
            this.initializeAuth(token);
        }
    }
    initializeAuth(token) {
        const splitToken = token.split('.');
        const tokenDecode = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].decode(splitToken[1]);
        const tokenData = JSON.parse(tokenDecode);
        this.id = tokenData.id;
        if (tokenData.admin) {
            this.admin$.next(true);
        }
        this.email = tokenData.email;
        this.tokenIat = tokenData.iat;
        this.tokenExp = tokenData.exp;
        this.connected$.next(true);
    }
    signup(email, password, lastName, firstName) {
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/auth/signup', {
                email,
                password,
                Profile: {
                    lastName,
                    firstName
                }
            }).subscribe((response) => {
                this.login(email, password);
                this.router.navigate(['/']);
                resolve(response);
            }, (response) => {
                reject(response.error);
            });
        });
    }
    tokenNotExpired() {
        if (this.tokenExp) {
            const dateNow = Math.floor(Date.now() / 1000);
            return this.tokenExp > dateNow;
        }
        return false;
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/auth/login', { email, password }).subscribe((response) => {
                this.token = response.token;
                this.initializeAuth(response.token);
                localStorage.setItem('token', response.token);
                resolve(response);
            }, (response) => {
                reject(response.error);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/auth/delete/' + id).subscribe((response) => {
                if (id === this.id) {
                    this.logout();
                }
                resolve(response);
            }, (response) => {
                reject(response.error);
            });
        });
    }
    getAllUsers() {
        return new Promise((resolve, reject) => {
            if (!this.admin$.getValue()) {
                reject({ message: 'Vous n\'êtes pas autorisé à accéder à ce contenu.' });
            }
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/auth/get-all-users/').subscribe((response) => {
                resolve(response);
            }, (response) => {
                reject(response.error);
            });
        });
    }
    setAdmin(id, admin) {
        return new Promise((resolve, reject) => {
            if (!this.admin$.getValue()) {
                reject({ message: 'Vous n\'êtes pas autorisé à modifier les droits des utilisateurs.' });
            }
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/auth/set-admin', { id, admin }).subscribe((response) => {
                resolve(response);
            }, (response) => {
                reject(response.error);
            });
        });
    }
    logout() {
        delete this.token;
        delete this.id;
        delete this.email;
        delete this.tokenIat;
        delete this.tokenExp;
        delete this.email;
        localStorage.removeItem('token');
        this.connected$.next(false);
        this.admin$.next(false);
        this.router.navigate(['/']);
    }
    getToken() {
        return this.token;
    }
    getId() {
        return this.id;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "pt4I":
/*!***************************************************!*\
  !*** ./src/app/middleware/admin-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



class AdminGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.admin$.getValue();
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SignupComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class SignupComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.value.password !== form.value.confirmPassword) {
            this.errorMessage = 'Les deux mots de passe ne sont pas identique';
            return;
        }
        this.auth.signup(form.value.email, form.value.password, form.value.lastName, form.value.firstName)
            .then()
            .catch(error => this.errorMessage = error.message);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 22, vars: 1, consts: [[4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "required", "", "ngModel", ""], ["for", "lastName"], ["type", "text", "name", "lastName", "id", "lastName", "required", "", "ngModel", ""], ["for", "firstName"], ["type", "text", "name", "firstName", "id", "firstName", "required", "", "ngModel", ""], ["for", "password"], ["type", "password", "name", "password", "id", "password", "required", "", "ngModel", ""], ["for", "confirmPassword"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "required", "", "ngModel", ""], ["type", "submit"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_p_2_Template, 2, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Votre adresse email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Votre nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Votre pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Un mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Retapez votre mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["p[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 20px;\n  color: red;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  font-size: 14px;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #33fa6d;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQURFO0VBQ0UsbUJBQUE7QUFHSjs7QUFGRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUhFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsicFxuICB3aWR0aDogMzAwcHhcbiAgbWFyZ2luLWJvdHRvbTogMjBweFxuICBjb2xvcjogcmVkXG5cbmZvcm1cbiAgd2lkdGg6IDMwMHB4XG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICBtYXJnaW46IGF1dG9cbiAgZm9udC1zaXplOiAxNHB4XG4gIGxhYmVsXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICBpbnB1dFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICBib3JkZXI6IG5vbmVcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICBoZWlnaHQ6IDMwcHhcbiAgYnV0dG9uXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzZmE2ZFxuICAgIGJvcmRlcjogbm9uZVxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgIGhlaWdodDogMzBweFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "sWJL":
/*!**************************************************!*\
  !*** ./src/app/middleware/auth-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.connected$.getValue();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "uRof":
/*!*********************************************!*\
  !*** ./src/app/pipes/date-interval.pipe.ts ***!
  \*********************************************/
/*! exports provided: DateIntervalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateIntervalPipe", function() { return DateIntervalPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date_format */ "Gs2W");
/* harmony import */ var date_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_format__WEBPACK_IMPORTED_MODULE_1__);



class DateIntervalPipe {
    transform(timestamp) {
        date_format.days = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        date_format.months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
            'Novembre', 'Décembre'
        ];
        const compareDate = new Date(timestamp), currentDate = new Date();
        const compare = date_format(compareDate, 'D d F Y');
        const current = date_format(currentDate, 'D d F Y');
        const compareTime = date_format(compareDate, 'H:i');
        const previousDays = (int) => {
            return date_format(new Date(currentDate.getTime() - (int * 86400000)), 'D d F Y');
        };
        if (compare === current) {
            const diff = currentDate.getTime() - compareDate.getTime();
            if (diff < 5000) {
                return 'à l\'instant';
            }
            else if (diff < 60000) {
                return `il y a ${Math.floor(diff / 1000)} secondes`;
            }
            else if (diff < 3600000) {
                return `il y a ${Math.floor(diff / 60000)} minutes`;
            }
            else if (diff < 10800000) {
                return `il y a ${Math.floor(diff / 3600000)} heures`;
            }
            else {
                return `aujourd\'hui à ${compareTime}`;
            }
        }
        else if (compare === previousDays(1)) {
            return `hier à ${compareTime}`;
        }
        else if (compare === previousDays(2)) {
            return `il y à 2 jours à ${compareTime}`;
        }
        else if (compare === previousDays(3)) {
            return `il y à 3 jours à ${compareTime}`;
        }
        else if (compare === previousDays(4)) {
            return `il y à 4 jours à ${compareTime}`;
        }
        else if (compare === previousDays(5)) {
            return `il y à 5 jours à ${compareTime}`;
        }
        else if (compare === previousDays(6)) {
            return `il y à 6 jours à ${compareTime}`;
        }
        else if (compare === previousDays(7)) {
            return `il y à 1 semaine à ${compareTime}`;
        }
        else {
            return `${compare} à ${compareTime}`;
        }
    }
}
DateIntervalPipe.ɵfac = function DateIntervalPipe_Factory(t) { return new (t || DateIntervalPipe)(); };
DateIntervalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateInterval", type: DateIntervalPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateIntervalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'dateInterval' }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _middleware_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/auth-guard.service */ "sWJL");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _middleware_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/admin-guard.service */ "pt4I");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");










const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_middleware_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_middleware_admin_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_middleware_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_middleware_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wzbf":
/*!*************************************************!*\
  !*** ./src/app/services/publication.service.ts ***!
  \*************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PublicationService {
    constructor(http) {
        this.http = http;
    }
    getPublications(offset, limit) {
        return new Promise((resolve, reject) => {
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + `/api/publication/${offset}/${limit}`)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    addPublication(form, image) {
        const formData = new FormData();
        formData.append('content', form.value.content);
        if (image) {
            formData.append('image', image);
        }
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/', formData)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    deletePublication(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/' + id)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    deleteComment(idPublication, idComment) {
        return new Promise((resolve, reject) => {
            this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/delete-comment/' + idPublication + '/' + idComment)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    addComment(id, content) {
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/add-comment', { id, content })
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    getComment(id, offset, limit) {
        return new Promise((resolve, reject) => {
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + `/api/publication/get-comment/${id}/${offset}/${limit}`)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    addVote(id) {
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/add-vote', { id })
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    deleteVote(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/delete-vote/' + id)
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
}
PublicationService.ɵfac = function PublicationService_Factory(t) { return new (t || PublicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicationService, factory: PublicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map