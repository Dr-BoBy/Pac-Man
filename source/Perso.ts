class Perso extends Sprite {
    /*Attributs*/
    public i : number;
    public j : number;
    public scene: Scene;
    public alive: boolean;

    /*Contructeur*/
    public constructor (balise : HTMLElement, scene:Scene,i:number,j:number){
        super(balise);
        this.i=i;
        this.j=j;
        this.scene=scene;
        this.alive=true;
    }

    public move_z(){
        if(this.scene.lab[this.i-1][this.j]!=1){
            this.scene.lab[this.i][this.j]=0;
            this.i-=1;
            this.setY(this.i*50+10);
            if(this.scene.lab_diam[this.i][this.j]==1){
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point=this.scene.point-1
            }
            this.scene.lab[this.i][this.j]=3;
            if(this.i==4 && this.j==9){
                window.removeEventListener("keydown",this.scene.actionclavier);
                for (let i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    }

    public move_q(){
        if(this.scene.lab[this.i][this.j-1]!=1){
            this.scene.lab[this.i][this.j]=0;
            this.j-=1;
            this.setX(this.j*50+10);
            if(this.scene.lab_diam[this.i][this.j]==1){
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point=this.scene.point-1
            }
            this.scene.lab[this.i][this.j]=3;
            if(this.i==4 && this.j==9){
                window.removeEventListener("keydown",this.scene.actionclavier);
                for (let i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    }

    public move_s(){
        if(this.scene.lab[this.i+1][this.j]!=1){
            this.scene.lab[this.i][this.j]=0;
            this.i+=1;
            this.setY(this.i*50+10);
            if(this.scene.lab_diam[this.i][this.j]==1){
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point=this.scene.point-1
            }
            this.scene.lab[this.i][this.j]=3;
            if(this.i==4 && this.j==9){
                window.removeEventListener("keydown",this.scene.actionclavier);
                for (let i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    }

    public move_d(){
        if(this.scene.lab[this.i][this.j+1]!=1){
            this.scene.lab[this.i][this.j]=0;
            this.j+=1;
            this.setX(this.j*50+10);
            if(this.scene.lab_diam[this.i][this.j]==1){
                this.scene.retirer(this.scene.lab_temoin[this.i][this.j]);
                this.scene.point=this.scene.point-1
            }
            this.scene.lab[this.i][this.j]=3;
            if(this.i==4 && this.j==9){
                window.removeEventListener("keydown",this.scene.actionclavier);
                for (let i = 0; i < this.scene.mechants.length; i++) {
                    clearInterval(this.scene.lIA[i]);
                }
            }
        }
    }

}