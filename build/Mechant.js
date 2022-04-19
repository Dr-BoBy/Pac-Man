"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mechant = (function (_super) {
    __extends(Mechant, _super);
    function Mechant(balise, scene, i, j) {
        var _this = _super.call(this, balise) || this;
        _this.i = i;
        _this.j = j;
        _this.scene = scene;
        return _this;
    }
    Mechant.prototype.move = function () {
        var n = Math.random();
        if (n > 0.5) {
            var n_1 = Math.random();
            if (n_1 > 0.5) {
                if (this.i > this.scene.perso.i) {
                    if (this.move_z()) {
                    }
                    else {
                        if (this.j < this.scene.perso.j) {
                            this.move_d();
                        }
                        else {
                            this.move_q();
                        }
                    }
                }
                else if (this.i < this.scene.perso.i) {
                    if (this.move_s()) {
                    }
                    else {
                        if (this.j < this.scene.perso.j) {
                            this.move_d();
                        }
                        else {
                            this.move_q();
                        }
                    }
                }
                else {
                    if (this.j < this.scene.perso.j) {
                        this.move_d();
                    }
                    else {
                        this.move_q();
                    }
                }
            }
            else {
                if (this.j < this.scene.perso.j) {
                    if (this.move_d()) {
                    }
                    else {
                        if (this.i < this.scene.perso.i) {
                            this.move_s();
                        }
                        else {
                            this.move_z();
                        }
                    }
                }
                else if (this.j > this.scene.perso.j) {
                    if (this.move_q()) {
                    }
                    else {
                        if (this.i < this.scene.perso.i) {
                            this.move_s();
                        }
                        else {
                            this.move_z();
                        }
                    }
                }
                else {
                    if (this.i < this.scene.perso.i) {
                        this.move_s();
                    }
                    else {
                        this.move_z;
                    }
                }
            }
        }
        else {
            var n_2 = Math.random();
            if (n_2 < 0.25) {
                this.move_z();
            }
            else if (n_2 > 0.25 && n_2 < 0.5) {
                this.move_q();
            }
            else if (n_2 < 0.5 && n_2 < 0.75) {
                this.move_s();
            }
            else if (n_2 < 0.75 && n_2 < 1) {
                this.move_d();
            }
        }
    };
    Mechant.prototype.move_z = function () {
        if (this.scene.lab[this.i - 1][this.j] != 1 && this.scene.lab[this.i - 1][this.j] != 4) {
            this.scene.lab[this.i][this.j] = 0;
            this.i -= 1;
            this.setY(this.i * 50 + 10);
            this.scene.lab[this.i][this.j] = 4;
            this.kill();
            return true;
        }
    };
    Mechant.prototype.move_q = function () {
        if (this.scene.lab[this.i][this.j - 1] != 1 && this.scene.lab[this.i][this.j - 1] != 4) {
            this.scene.lab[this.i][this.j] = 0;
            this.j -= 1;
            this.setX(this.j * 50 + 10);
            this.scene.lab[this.i][this.j] = 4;
            this.kill();
            return true;
        }
    };
    Mechant.prototype.move_s = function () {
        if (this.scene.lab[this.i + 1][this.j] != 1 && this.scene.lab[this.i + 1][this.j] != 4) {
            this.scene.lab[this.i][this.j] = 0;
            this.i += 1;
            this.setY(this.i * 50 + 10);
            this.scene.lab[this.i][this.j] = 4;
            this.kill();
            return true;
        }
    };
    Mechant.prototype.move_d = function () {
        if (this.scene.lab[this.i][this.j + 1] != 1 && this.scene.lab[this.i][this.j + 1] != 4) {
            this.scene.lab[this.i][this.j] = 0;
            this.j += 1;
            this.setX(this.j * 50 + 10);
            this.scene.lab[this.i][this.j] = 4;
            this.kill();
            return true;
        }
    };
    Mechant.prototype.kill = function () {
        if (Sprite.collision(this.getRectangle(), this.scene.perso.getRectangle())) {
            window.removeEventListener("keydown", this.scene.actionclavier);
            for (var i = 0; i < this.scene.mechants.length; i++) {
                clearInterval(this.scene.lIA[i]);
            }
            this.scene.retirer(this.scene.perso);
        }
    };
    return Mechant;
}(Sprite));
