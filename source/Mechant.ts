class Mechant extends Sprite {
    /*Attributs*/
    public i : number;
    public j : number;
    public scene: Scene;

    /*Contructeur*/
    public constructor (balise : HTMLElement, scene:Scene,i:number,j:number){
        super(balise);
        this.i=i;
        this.j=j;
        this.scene=scene;
    }

    public move(){ //IA
        let n = Math.random();
        if(n>0.5){
            let n = Math.random();
            if(n>0.5){
                if(this.i>this.scene.perso.i){
                    if(this.move_z()){
                    }else{
                        if(this.j<this.scene.perso.j){
                            this.move_d()
                        }
                        else{
                            this.move_q()
                        }
                    }
                }
                else if(this.i<this.scene.perso.i){
                    if(this.move_s()){
                    }else{
                        if(this.j<this.scene.perso.j){
                            this.move_d()
                        }
                        else{
                            this.move_q()
                        }
                    }
                }
                else{
                    if(this.j<this.scene.perso.j){
                        this.move_d()
                    }
                    else{
                        this.move_q()
                    }
                }
            }else{
                if(this.j<this.scene.perso.j){
                    if(this.move_d()){
                    }else{
                        if(this.i<this.scene.perso.i){
                            this.move_s()
                        }
                        else{
                            this.move_z()
                        }
                    }
                }
                else if(this.j>this.scene.perso.j){
                    if(this.move_q()){
                    }else{
                        if(this.i<this.scene.perso.i){
                            this.move_s()
                        }
                        else{
                            this.move_z()
                        }
                    }
                }
                else {
                    if(this.i<this.scene.perso.i){
                        this.move_s()
                    }else{
                        this.move_z
                    }
                }
            }
        }else{
            let n = Math.random();
            if(n<0.25){
                this.move_z()
            }
            else if(n>0.25 && n<0.5){
                this.move_q()
            }
            else if(n<0.5  && n<0.75){
                this.move_s()
            }
            else if(n<0.75  && n<1){
                this.move_d()
            }
        }
    } 

    public move_z(){
        if(this.scene.lab[this.i-1][this.j]!=1 && this.scene.lab[this.i-1][this.j]!=4){
            this.scene.lab[this.i][this.j]=0;
            this.i-=1;
            this.setY(this.i*50+10);
            this.scene.lab[this.i][this.j]=4;
            this.kill();
            return true
        }
    }

    public move_q(){
        if(this.scene.lab[this.i][this.j-1]!=1 && this.scene.lab[this.i][this.j-1]!=4){
            this.scene.lab[this.i][this.j]=0;
            this.j-=1;
            this.setX(this.j*50+10);
            this.scene.lab[this.i][this.j]=4;
            this.kill();
            return true
        }
    }

    public move_s(){
        if(this.scene.lab[this.i+1][this.j]!=1 && this.scene.lab[this.i+1][this.j]!=4){
            this.scene.lab[this.i][this.j]=0;
            this.i+=1;
            this.setY(this.i*50+10);
            this.scene.lab[this.i][this.j]=4;
            this.kill();
            return true
        }
    }

    public move_d(){
        if(this.scene.lab[this.i][this.j+1]!=1 && this.scene.lab[this.i][this.j+1]!=4){
            this.scene.lab[this.i][this.j]=0;
            this.j+=1;
            this.setX(this.j*50+10);
            this.scene.lab[this.i][this.j]=4;
            this.kill();
            return true
        }
    }

    public kill(){
        if (Sprite.collision(this.getRectangle(),this.scene.perso.getRectangle())){
            window.removeEventListener("keydown",this.scene.actionclavier);
            for (let i = 0; i < this.scene.mechants.length; i++) {
                clearInterval(this.scene.lIA[i]);
            }
            this.scene.retirer(this.scene.perso);
        }      
    }
}