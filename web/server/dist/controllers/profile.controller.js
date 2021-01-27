"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_model_1 = __importDefault(require("../models/profile.model"));
class ProfileController {
    getProfile(req, res) {
        profile_model_1.default.findOne({ where: { userId: res.locals.userId } })
            .then(profile => res.json(profile))
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
}
exports.default = new ProfileController();
