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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 1, consts: [["alt", "logo", "width", "150", 1, "logo", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.env.urlApi, "/images/logo/icon-left-font-monochrome-black.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-bottom: 1px solid #dcdcdc;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjXG4gIGhlaWdodDogNTBweFxuICBkaXNwbGF5OiBmbGV4XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAubG9nb1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDMwcHhcbiAgICB0b3A6IC01MHB4XG4iXX0= */"] });
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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Se deconnecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.connected$.subscribe(value => this.connected = value);
    }
    onSubmit(form) {
        this.auth.login(form.value.email, form.value.password);
    }
    logout() {
        this.auth.logout();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [[1, "login"], [3, "ngSubmit", 4, "ngIf"], ["class", "logout-button", 3, "click", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Votre email", "name", "email", "ngModel", ""], ["type", "password", "placeholder", "Votre mot de passe", "name", "password", "ngModel", ""], [1, "login-button"], [1, "logout-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_1_Template, 6, 0, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".login[_ngcontent-%COMP%] {\n  margin: 13px;\n}\n.login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   [type=password][_ngcontent-%COMP%] {\n  width: 140px;\n  height: 23px;\n  margin-right: 5px;\n}\n.login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n.logout-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #ff5c18;\n}\n.login-button[_ngcontent-%COMP%] {\n  background-color: #33fa6d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7QUFERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBSUY7QUFGQTtFQUNFLHlCQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5cbiAgbWFyZ2luOiAxM3B4XG4gIGlucHV0W3R5cGU9ZW1haWxdLFt0eXBlPXBhc3N3b3JkXVxuICAgIHdpZHRoOiAxNDBweFxuICAgIGhlaWdodDogMjNweFxuICAgIG1hcmdpbi1yaWdodDogNXB4XG4gIGJ1dHRvblxuICAgIGJvcmRlcjogbm9uZVxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgIHBhZGRpbmc6IDVweFxuXG4ubG9nb3V0LWJ1dHRvblxuICBjb2xvcjogd2hpdGVcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMxOFxuXG4ubG9naW4tYnV0dG9uXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2ZhNmRcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "8IyQ":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "Aso2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");









function ProfilComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
class ProfilComponent {
    constructor(profileService) {
        this.profileService = profileService;
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
    onFileAdded(event) {
        this.image = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.profile.picture = reader.result;
        });
        reader.readAsDataURL(this.image);
    }
}
ProfilComponent.ɵfac = function ProfilComponent_Factory(t) { return new (t || ProfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"])); };
ProfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilComponent, selectors: [["app-profil"]], decls: 22, vars: 8, consts: [[4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "image"], ["type", "file", "name", "image", "id", "image", "accept", "image/*", 3, "change"], ["for", "lastName"], ["type", "text", "name", "lastName", "id", "lastName", 3, "ngModel"], ["for", "firstName"], ["type", "text", "name", "firstName", "id", "firstName", 3, "ngModel"], ["appearance", "fill"], ["matInput", "", "name", "birthDate", "id", "birthDate", 3, "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "submit"]], template: function ProfilComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mon profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfilComponent_p_2_Template, 2, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfilComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfilComponent_Template_input_change_6_listener($event) { return ctx.onFileAdded($event); });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"]], styles: ["p[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 20px;\n  color: red;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  font-size: 14px;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nform[_ngcontent-%COMP%]   label[for=image][_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  height: 150px;\n  background-color: black;\n  background-size: cover;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nform[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 5px;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #5fe5fa;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQURFO0VBQ0UsbUJBQUE7QUFHSjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhFO0VBQ0UsYUFBQTtBQUtKOztBQUpFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFMRTtFQUNFLFlBQUE7QUFPSjs7QUFORTtFQUNFLFlBQUE7QUFRSjs7QUFQRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInBcbiAgd2lkdGg6IDMwMHB4XG4gIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgY29sb3I6IHJlZFxuXG5mb3JtXG4gIHdpZHRoOiAzMDBweFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgbWFyZ2luOiBhdXRvXG4gIGZvbnQtc2l6ZTogMTRweFxuICBsYWJlbFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgbGFiZWxbZm9yPWltYWdlXVxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgd2lkdGg6IDE1MHB4XG4gICAgaGVpZ2h0OiAxNTBweFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICAgIGN1cnNvcjogcG9pbnRlclxuICAgIG1hcmdpbjogYXV0b1xuICAgIG1hcmdpbi10b3A6IDMwcHhcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gIGlucHV0W3R5cGU9ZmlsZV1cbiAgICBkaXNwbGF5OiBub25lXG4gIGlucHV0LCB0ZXh0YXJlYVxuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICBib3JkZXI6IG5vbmVcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgaW5wdXRbdHlwZT10ZXh0XVxuICAgIGhlaWdodDogMzBweFxuICB0ZXh0YXJlYVxuICAgIGhlaWdodDogNTBweFxuICBidXR0b25cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZlNWZhXG4gICAgYm9yZGVyOiBub25lXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgaGVpZ2h0OiAzMHB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profil',
                templateUrl: './profil.component.html',
                styleUrls: ['./profil.component.sass']
            }]
    }], function () { return [{ type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/publication.service */ "wzbf");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket-io.service */ "XRfs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/date-interval.pipe */ "uRof");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/reverse.pipe */ "IFuf");










function HomeComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmitPublication(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.getUrlPicture(publication_r6.picture), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "publication de ", publication_r6.Profile.lastName, " ", publication_r6.Profile.firstName, "");
} }
function HomeComponent_div_4_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_4_div_15_span_1_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_4_div_15_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.loadComments(publication_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voir les commentaires pr\u00E9c\u00E9dents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "dateInterval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r34 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r11.getUrlPicture(comment_r34.User.Profile.picture) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r34.User.Profile.lastName, " ", comment_r34.User.Profile.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, comment_r34.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r34.content);
} }
function HomeComponent_div_4_form_20_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_4_form_20_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.onSubmitComment(_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", publication_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_4_span_11_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_4_div_14_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_4_div_15_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_4_div_17_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_4_div_18_Template, 10, 8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "reverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_4_form_20_Template, 4, 2, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.getUrlPicture(publication_r6.Profile.picture) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", publication_r6.Profile.lastName, " ", publication_r6.Profile.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, publication_r6.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.auth.getAdmin() || ctx_r1.auth.getId() === publication_r6.UserId);
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
    constructor(auth, publication, socket) {
        this.auth = auth;
        this.publication = publication;
        this.socket = socket;
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
        this.auth.connected$.subscribe(value => this.connected = value);
        this.loadPublications();
        this.initializeSocketIO();
    }
    initializeSocketIO() {
        this.socket.on('newPublication').subscribe((data) => {
            this.publications.unshift(data);
            this.offsetPublications++;
        });
        this.socket.on('deletePublication').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.id));
            if (indexPublication !== -1) {
                this.publications.splice(indexPublication, 1);
                this.offsetPublications--;
            }
        });
        this.socket.on('newComment').subscribe((data) => {
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
        this.socket.on('addVote').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
            this.publications[indexPublication].Vote.push(data);
        });
        this.socket.on('deleteVote').subscribe((data) => {
            const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
            if (indexPublication !== -1) {
                const indexVote = this.publications[indexPublication].Vote.findIndex(vote => vote.UserId === Number(data.UserId));
                if (indexVote !== -1) {
                    this.publications[indexPublication].Vote.splice(indexVote, 1);
                }
            }
        });
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
    onFileAdded(event) {
        this.image = event.target.files[0];
    }
    getUrlPicture(picture) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/images/upload/' + picture;
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_4__["SocketIoService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 2, consts: [[1, "home"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "content"], ["name", "content", "id", "content", "ngModel", ""], ["for", "image", 1, "label-image"], ["type", "file", "name", "image", "id", "image", "accept", "image/*", 3, "change"], [1, "publication"], [1, "header-publication"], [1, "author"], [1, "profile-picture"], ["class", "delete", 3, "click", 4, "ngIf"], [1, "content"], ["class", "illustration", 4, "ngIf"], ["class", "action", 4, "ngIf"], [1, "comments"], ["class", "show-more", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], [1, "illustration"], [3, "src", "alt"], [1, "action"], [3, "click", 4, "ngIf"], [3, "click"], [1, "show-more", 3, "click"], [1, "comment"], [1, "name"], [1, "message"], ["type", "hidden", "id", "publicationId", "name", "publicationId", 3, "ngModel"], ["type", "text", "name", "comment", "placeholder", "\u00C9crivez un commentaire...", "ngModel", "", 3, "id"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], pipes: [_pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_7__["DateIntervalPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_8__["ReversePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  width: 800px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  padding: 20px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: 1px solid #eeeeee;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #5fe5fa;\n  padding: 10px;\n  border-radius: 5px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-image[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  background-color: #e3e3e3;\n  border-radius: 5px;\n  width: 120px;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.publication[_ngcontent-%COMP%]   .header-publication[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: red;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-top: 20px;\n  border-top: 2px solid #e3e3e3;\n}\n.publication[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publication[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n  padding: 10px 0 10px 0;\n}\n.publication[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  margin-bottom: 10px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #e3e3e3;\n  border-radius: 20px;\n}\n.publication[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  background-color: #e3e3e3;\n  margin-top: 20px;\n  padding-left: 10px;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: black;\n  margin-right: 20px;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUo7QUFESTtFQUNFLG1CQUFBO0FBR047QUFGSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUlOO0FBSEk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBS047QUFKSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU1OO0FBTEk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQU9OO0FBTkk7RUFDRSxZQUFBO0FBUU47QUFQSTtFQUNFLGFBQUE7QUFTTjtBQVJJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFVTjtBQVJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVdGO0FBVkU7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFZSjtBQVhJO0VBQ0Usc0JBQUE7QUFhTjtBQVpJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWNOO0FBYkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFlSjtBQWRJO0VBQ0UsV0FBQTtBQWdCTjtBQWZFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBaUJKO0FBaEJJO0VBQ0UsZUFBQTtBQWtCTjtBQWpCRTtFQUNFLGdCQUFBO0FBbUJKO0FBbEJJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBb0JOO0FBbkJJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFxQk47QUFwQk07RUFDRSxtQkFBQTtBQXNCUjtBQXJCTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBdUJSO0FBdEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF3Qk47QUF0QkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF5QkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZVxuICB3aWR0aDogODAwcHhcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGZvcm1cbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgcGFkZGluZzogMjBweFxuICAgIGgzXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgbGFiZWxcbiAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIGlucHV0LCB0ZXh0YXJlYVxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZVxuICAgIGJ1dHRvblxuICAgICAgYm9yZGVyOiBub25lXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZlNWZhXG4gICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICB0ZXh0YXJlYVxuICAgICAgaGVpZ2h0OiAxMDBweFxuICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgaW5wdXRbdHlwZT10ZXh0XVxuICAgICAgaGVpZ2h0OiAzMHB4XG4gICAgaW5wdXRbdHlwZT1maWxlXVxuICAgICAgZGlzcGxheTogbm9uZVxuICAgIC5sYWJlbC1pbWFnZVxuICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgIHBhZGRpbmc6IDVweFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgICB3aWR0aDogMTIwcHhcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4ucHVibGljYXRpb25cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgbWFyZ2luLXRvcDogMjBweFxuICBib3JkZXItcmFkaXVzOiA1cHhcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIHBhZGRpbmc6IDIwcHhcbiAgLmhlYWRlci1wdWJsaWNhdGlvblxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTNlM2UzXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgIC5wcm9maWxlLXBpY3R1cmVcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAuZGVsZXRlXG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgY29sb3I6IHJlZFxuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gIC5pbGx1c3RyYXRpb25cbiAgICBwYWRkaW5nLXRvcDogMTBweFxuICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2UzZTNlM1xuICAgIGltZ1xuICAgICAgd2lkdGg6IDEwMCVcbiAgLmFjdGlvblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTNcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMFxuICAgIHNwYW5cbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAuY29tbWVudHNcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgLnNob3ctbW9yZVxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIC5jb21tZW50XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgICAucHJvZmlsZS1waWN0dXJlXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3BcbiAgICAgIC5jb250ZW50XG4gICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XG4gICAgaW5wdXRbdHlwZT10ZXh0XVxuICAgICAgd2lkdGg6IDEwMCVcbiAgICAgIGhlaWdodDogMzBweFxuICAgICAgYm9yZGVyOiBub25lXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcblxuLnByb2ZpbGUtcGljdHVyZVxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgbWluLXdpZHRoOiA1MHB4XG4gIGhlaWdodDogNTBweFxuICBib3JkZXItcmFkaXVzOiA1MCVcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_4__["SocketIoService"] }]; }, { onWindowScroll: [{
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
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px auto 20px auto;\n}\nmain[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #dcdcdc;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW5cbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG9cbiAgLmNvbnRhaW5lclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICBwYWRkaW5nOiAyMHB4XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkY1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


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
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profil/profil.component */ "8IyQ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/date-interval.pipe */ "uRof");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "IFuf");






















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
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _profil_profil_component__WEBPACK_IMPORTED_MODULE_13__["ProfilComponent"],
        _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__["DateIntervalPipe"],
        _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__["ReversePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]] }); })();
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
                    _profil_profil_component__WEBPACK_IMPORTED_MODULE_13__["ProfilComponent"],
                    _pipes_date_interval_pipe__WEBPACK_IMPORTED_MODULE_18__["DateIntervalPipe"],
                    _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__["ReversePipe"]
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
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]
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
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 6, vars: 3, consts: [["routerLink", "/"], [3, "icon"], ["routerLink", "signup", 4, "ngIf"], ["routerLink", "profil", 4, "ngIf"], ["routerLink", "signup"], ["routerLink", "profil"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  margin-left: 220px;\n  display: flex;\n  border-right: 1px #e3e3e3 solid;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  height: 10px;\n  padding: 20px;\n  display: block;\n  border-left: 1px #e3e3e3 solid;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDRSx5QkFBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZcbiAgbWFyZ2luLWxlZnQ6IDIyMHB4XG4gIGRpc3BsYXk6IGZsZXhcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI2UzZTNlMyBzb2xpZFxuICBhXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgY29sb3I6IGJsYWNrXG4gICAgaGVpZ2h0OiAxMHB4XG4gICAgcGFkZGluZzogMjBweFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgYm9yZGVyLWxlZnQ6IDFweCAjZTNlM2UzIHNvbGlkXG4gICAgJjpob3ZlclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xuIl19 */"] });
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


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Groupomania tous droits r\u00E9serv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #efefef;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 1px solid #dcdcdc;\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJcbiAgcG9zaXRpb246IGZpeGVkXG4gIGJvdHRvbTogMFxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDQwcHhcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZlxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2RjZGNcbiAgLmNvcHlyaWdodFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


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
        this.admin = tokenData.admin;
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
    logout() {
        delete this.token;
        delete this.id;
        delete this.admin;
        localStorage.removeItem('token');
        this.connected$.next(false);
        this.router.navigate(['/']);
    }
    getToken() {
        return this.token;
    }
    getId() {
        return this.id;
    }
    getAdmin() {
        return this.admin;
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
        console.log(form.value);
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
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil/profil.component */ "8IyQ");








const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_5__["ProfilComponent"], canActivate: [_middleware_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
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
    getAllPublications() {
        return new Promise((resolve, reject) => {
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi + '/api/publication/')
                .subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
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