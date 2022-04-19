//==================================================================================================
// ANIMATION AVEC TYPESCRIPT                                                               Scene.ts
//==================================================================================================

// Classe  S c e n e //-----------------------------------------------------------------------------
class Scene extends Sprite {
    //----------------------------------------------------------------------------------------Attributs
    public lab: Array<Array<number>>;
    public lab_diam: Array<Array<number>>;
    public lab_temoin: Array<Array<Sprite>>;
    public perso: Perso;
    public actionclavier : any;
    public point: number;
    public mechants: Array<Mechant>;
    public lIA: Array<any>;

    //-------------------------------------------------------------------------------------Constructeur
    public constructor(balise : HTMLElement) {
    super(balise);
    this.setDimension(500,500);
    this.setX((window.innerWidth - this.getLargeur()) / 2);
    this.setY((window.innerHeight - this.getHauteur()) / 2);
    }

    //-----------------------------------------------------------------------------------------demarrer
    public demarrer() {

        this.point=0;
        //Création labyrinthe (à optimiser)
        this.lab =new Array<Array<number>>();
        this.lab.push([1,1,1,1,1,1,1,1,1,1]);
        this.lab.push([1,2,0,2,2,2,2,0,2,1]);
        this.lab.push([1,4,1,2,1,1,2,1,0,1]);
        this.lab.push([1,2,2,2,0,0,2,2,2,1]);
        this.lab.push([1,2,1,3,1,1,0,1,2,0]);
        this.lab.push([1,2,1,0,1,1,0,1,2,1]);
        this.lab.push([1,2,2,2,0,0,2,2,2,1]);
        this.lab.push([1,0,1,2,1,1,2,1,4,1]);
        this.lab.push([1,2,0,2,2,2,2,0,2,1]);
        this.lab.push([1,1,1,1,1,1,1,1,1,1]);

        this.lab_temoin=new Array<Array<Sprite>>(10);
        for (let i = 0; i < 10; i++) {
            this.lab_temoin[i]=new Array<Sprite>(10);
        }
        this.lab_diam=new Array<Array<number>>(10);
        for (let i = 0; i < 10; i++) {
            this.lab_diam[i]=new Array<number>(10);
        }
        this.mechants=new Array<Mechant>(2);
        this.lIA=new Array<any>(2);

        for (let i =0; i<this.lab.length; i++){
            for (let j = 0; j < this.lab[i].length; j++) {
                if(this.lab[i][j]==1){
                    let img : Sprite = new Sprite(document.createElement("img"));
                    img.setImage("brique.png",50,50)
                    this.ajouter(img);
                    img.setXY(j*50,i*50);
                    img.getBalise().style.zIndex="0"
                    this.lab_temoin[i][j]=img;
                }
                else{
                    let img : Sprite = new Sprite(document.createElement("img"));
                    img.setImage("grass.jpg",50,50)
                    this.ajouter(img);
                    img.setXY(j*50,i*50);
                    img.getBalise().style.zIndex="0"
                    this.lab_temoin[i][j]=img;
                }
                if(this.lab[i][j]==2){
                    let img : Sprite = new Sprite(document.createElement("img"));
                    img.setImage("diamond.png",30,30)
                    this.ajouter(img);
                    img.setXY(j*50+10,i*50+10);
                    img.getBalise().style.zIndex="1"
                    this.lab_temoin[i][j]=img;
                    this.point+=1;
                    this.lab_diam[i][j]=1;
                }
                if(this.lab[i][j]==3){
                    this.perso =new Perso(document.createElement("img"),this,i,j)
                    this.perso.setImage("steve.jpg",30,30)
                    this.ajouter(this.perso);
                    this.perso.setXY(j*50+10,i*50+10);
                    this.perso.getBalise().style.zIndex="2"
                }
                if(this.lab[i][j]==4){
                    var mechant = new Mechant(document.createElement("img"),this,i,j)
                    mechant.setImage("creeper.jpg",30,30)
                    this.ajouter(mechant);
                    mechant.setXY(j*50+10,i*50+10);
                    mechant.getBalise().style.zIndex="3";
                    this.mechants[this.mechants.length]=(mechant);
                }
            }
        }
        this.actionclavier=(e:KeyboardEvent)=>{
            if(e.key=="ArrowLeft") {
                this.perso.move_q();
                console.log("left")
            }
            if(e.key=="ArrowRight") {
                this.perso.move_d();
                console.log("Right")
            }
            if(e.key=="ArrowUp") {
                this.perso.move_z();
                console.log("Up")
            }
            if(e.key=="ArrowDown") {
                this.perso.move_s();
                console.log("Down")
            }
            document.getElementById("point").innerHTML= "Diamant à récupérer : "+this.point;
        }

        window.addEventListener("keydown",this.actionclavier);
        document.getElementById("point").innerHTML= "Diamant à récupérer : "+this.point;
        for (let i = 0; i < this.mechants.length; i++) {
            this.lIA[i]=setInterval(()=>{this.mechants[i].move()},500);    
        }
        
    }

    //------------------------------------------------------------------------------------------arreter
    public arreter() {
    /* Ecrire ici le code qui termine la scene. */
    }
}

// Fin //-------------------------------------------------------------------------------------------
