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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene(balise) {
        var _this = _super.call(this, balise) || this;
        _this.setDimension(500, 500);
        _this.setX((window.innerWidth - _this.getLargeur()) / 2);
        _this.setY((window.innerHeight - _this.getHauteur()) / 2);
        return _this;
    }
    Scene.prototype.demarrer = function () {
        var _this = this;
        this.point = 0;
        this.lab = new Array();
        this.lab.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        this.lab.push([1, 2, 0, 2, 2, 2, 2, 0, 2, 1]);
        this.lab.push([1, 4, 1, 2, 1, 1, 2, 1, 0, 1]);
        this.lab.push([1, 2, 2, 2, 0, 0, 2, 2, 2, 1]);
        this.lab.push([1, 2, 1, 3, 1, 1, 0, 1, 2, 0]);
        this.lab.push([1, 2, 1, 0, 1, 1, 0, 1, 2, 1]);
        this.lab.push([1, 2, 2, 2, 0, 0, 2, 2, 2, 1]);
        this.lab.push([1, 0, 1, 2, 1, 1, 2, 1, 4, 1]);
        this.lab.push([1, 2, 0, 2, 2, 2, 2, 0, 2, 1]);
        this.lab.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        this.lab_temoin = new Array(10);
        for (var i = 0; i < 10; i++) {
            this.lab_temoin[i] = new Array(10);
        }
        this.lab_diam = new Array(10);
        for (var i = 0; i < 10; i++) {
            this.lab_diam[i] = new Array(10);
        }
        this.mechants = new Array(2);
        this.lIA = new Array(2);
        for (var i = 0; i < this.lab.length; i++) {
            for (var j = 0; j < this.lab[i].length; j++) {
                if (this.lab[i][j] == 1) {
                    var img = new Sprite(document.createElement("img"));
                    img.setImage("brique.png", 50, 50);
                    this.ajouter(img);
                    img.setXY(j * 50, i * 50);
                    img.getBalise().style.zIndex = "0";
                    this.lab_temoin[i][j] = img;
                }
                else {
                    var img = new Sprite(document.createElement("img"));
                    img.setImage("grass.jpg", 50, 50);
                    this.ajouter(img);
                    img.setXY(j * 50, i * 50);
                    img.getBalise().style.zIndex = "0";
                    this.lab_temoin[i][j] = img;
                }
                if (this.lab[i][j] == 2) {
                    var img = new Sprite(document.createElement("img"));
                    img.setImage("diamond.png", 30, 30);
                    this.ajouter(img);
                    img.setXY(j * 50 + 10, i * 50 + 10);
                    img.getBalise().style.zIndex = "1";
                    this.lab_temoin[i][j] = img;
                    this.point += 1;
                    this.lab_diam[i][j] = 1;
                }
                if (this.lab[i][j] == 3) {
                    this.perso = new Perso(document.createElement("img"), this, i, j);
                    this.perso.setImage("steve.jpg", 30, 30);
                    this.ajouter(this.perso);
                    this.perso.setXY(j * 50 + 10, i * 50 + 10);
                    this.perso.getBalise().style.zIndex = "2";
                }
                if (this.lab[i][j] == 4) {
                    var mechant = new Mechant(document.createElement("img"), this, i, j);
                    mechant.setImage("creeper.jpg", 30, 30);
                    this.ajouter(mechant);
                    mechant.setXY(j * 50 + 10, i * 50 + 10);
                    mechant.getBalise().style.zIndex = "3";
                    this.mechants[this.mechants.length] = (mechant);
                }
            }
        }
        this.actionclavier = function (e) {
            if (e.key == "ArrowLeft") {
                _this.perso.move_q();
                console.log("left");
            }
            if (e.key == "ArrowRight") {
                _this.perso.move_d();
                console.log("Right");
            }
            if (e.key == "ArrowUp") {
                _this.perso.move_z();
                console.log("Up");
            }
            if (e.key == "ArrowDown") {
                _this.perso.move_s();
                console.log("Down");
            }
            document.getElementById("point").innerHTML = "Diamant à récupérer : " + _this.point;
        };
        window.addEventListener("keydown", this.actionclavier);
        document.getElementById("point").innerHTML = "Diamant à récupérer : " + this.point;
        var _loop_1 = function (i) {
            this_1.lIA[i] = setInterval(function () { _this.mechants[i].move(); }, 500);
        };
        var this_1 = this;
        for (var i = 0; i < this.mechants.length; i++) {
            _loop_1(i);
        }
    };
    Scene.prototype.arreter = function () {
    };
    return Scene;
}(Sprite));
