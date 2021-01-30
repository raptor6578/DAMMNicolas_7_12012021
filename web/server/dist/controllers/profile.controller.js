"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_model_1 = __importDefault(require("../models/profile.model"));
const fs = __importStar(require("fs"));
class ProfileController {
    getProfile(req, res) {
        profile_model_1.default.findOne({ where: { UserId: res.locals.userId } })
            .then(profile => res.json(profile))
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    putProfile(req, res) {
        profile_model_1.default.findOne({ where: { UserId: res.locals.userId } })
            .then((profile) => {
            if (!profile) {
                res.status(404);
                return res.json({ message: `Profil introuvable.` });
            }
            for (const key of Object.keys(req.body)) {
                profile[key] = req.body[key];
            }
            if (req.file) {
                fs.unlink(`images/upload/${profile.picture}`, () => {
                    return;
                });
                profile.picture = req.file.filename;
            }
            profile.save()
                .then(() => {
                res.status(200);
                return res.json({ message: 'Votre profil a bien été modifiée.' });
            })
                .catch((error) => {
                res.status(400);
                return res.json({ message: error });
            });
        })
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
}
exports.default = new ProfileController();
