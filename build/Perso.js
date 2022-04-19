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
var Perso = (function (_super) {
    __extends(Perso, _super);
    function Perso(balise, scene, i, j) {
        var _this = _super.call(this, balise) || this;
        _this.i = i;
        _this.j = j;
        _this.scene = scene;
        _this.alive = true;
        return _this;
    }
    Perso.prototype.move_z = function () {
        if (this.scene.lab[this.i - 1][this.j] != 1) {
            this.scene.lab[this.i][this.j] = 0;
            this.i -= 1;
            this.setY(this.i * 50 + 10);
            if (this.scene.lab_diam[this.i][this.j] == 1) {
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point = this.scene.point - 1;
            }
            this.scene.lab[this.i][this.j] = 3;
            if (this.i == 4 && this.j == 9) {
                window.removeEventListener("keydown", this.scene.actionclavier);
                for (var i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    };
    Perso.prototype.move_q = function () {
        if (this.scene.lab[this.i][this.j - 1] != 1) {
            this.scene.lab[this.i][this.j] = 0;
            this.j -= 1;
            this.setX(this.j * 50 + 10);
            if (this.scene.lab_diam[this.i][this.j] == 1) {
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point = this.scene.point - 1;
            }
            this.scene.lab[this.i][this.j] = 3;
            if (this.i == 4 && this.j == 9) {
                window.removeEventListener("keydown", this.scene.actionclavier);
                for (var i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    };
    Perso.prototype.move_s = function () {
        if (this.scene.lab[this.i + 1][this.j] != 1) {
            this.scene.lab[this.i][this.j] = 0;
            this.i += 1;
            this.setY(this.i * 50 + 10);
            if (this.scene.lab_diam[this.i][this.j] == 1) {
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point = this.scene.point - 1;
            }
            this.scene.lab[this.i][this.j] = 3;
            if (this.i == 4 && this.j == 9) {
                window.removeEventListener("keydown", this.scene.actionclavier);
                for (var i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    };
    Perso.prototype.move_d = function () {
        if (this.scene.lab[this.i][this.j + 1] != 1) {
            this.scene.lab[this.i][this.j] = 0;
            this.j += 1;
            this.setX(this.j * 50 + 10);
            if (this.scene.lab_diam[this.i][this.j] == 1) {
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point = this.scene.point - 1;
            }
            this.scene.lab[this.i][this.j] = 3;
            if (this.i == 4 && this.j == 9) {
                window.removeEventListener("keydown", this.scene.actionclavier);
                for (var i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    };
    return Perso;
}(Sprite));
