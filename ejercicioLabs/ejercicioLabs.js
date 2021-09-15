import { LightningElement, track, wire } from 'lwc';
import getAllPosts from '@salesforce/apex/PostService.getAllPosts';

export default class EjercicioLabs extends LightningElement {

    @track
    posts = [
        {Id:  1, Title__c : 'Alabama', Author__c : 'Testor', Thumbnail__c: 'test', Self_text__c: 'test'}
    ];

    @track
    loading = false;

    @track
    postTrunks = [];

    @track
    error;

    initialPosition;

    lastIndexView;
        
    @wire(getAllPosts)
    wiredPosts({ error, data }) {
        if (data) {
            this.posts = data;
            for (let i = 0; i < 4; i++) {
                this.postTrunks.push(data[i]);
            }
            this.initialPosition = 0;
            this.lastIndexView = 4
            this.error = undefined;
            console.log('Todos los post: ', JSON.stringify(data));
            console.log('TODOS LOS TRUNCADOS: ', JSON.stringify(this.postTrunk));
        } else if (error) {
            this.error = error;
            this.posts = undefined;
            console.log('Ocurrio este error: ',error);
            console.log('Ocurrio este error JSON: ', JSON.stringify(error) );
        }
    }

    handleClickPrevious(){
        this.loading = true;
        this.initialPosition <= 0 ? '' : this.initialPosition -= 4;
        this.lastIndexView = this.initialPosition + 4;
        var nuevoArreglo = [];
        for(let i = this.initialPosition; i < this.initialPosition + 4 ; i++ ){
            nuevoArreglo.push(this.posts[i]);
        }
        this.postTrunks = nuevoArreglo;

        console.log('El nuevo position es', this.initialPosition);
        console.log('Tu nuevo arreglo es: ', nuevoArreglo);
        this.loading = false;
    }

    handleClickNext(){
        this.loading = true;
        this.initialPosition != this.posts.length - 1 ? this.initialPosition += 4 : '';
        this.lastIndexView = this.initialPosition + 4
        this.lastIndexView > this.posts.length ? this.lastIndexView = this.posts.length : '';
        var nuevoArreglo = [];
        for(let i = this.initialPosition; i < this.initialPosition + 4 ; i++ ){
            i >= this.posts.length ? '' : nuevoArreglo.push(this.posts[i]);
        }
        this.postTrunks = nuevoArreglo;

        console.log('El nuevo position es', this.initialPosition);
        console.log('Tu nuevo arreglo es: ', nuevoArreglo);
        this.loading = false;
    }

    handleClick(event){
        this.loading = true;
        if(event.target.label === 'Next'){

            this.initialPosition != this.posts.length - 1 ? this.initialPosition += 4 : '';
            this.lastIndexView = this.initialPosition + 4
            this.lastIndexView > this.posts.length ? this.lastIndexView = this.posts.length : '';
            var nuevoArreglo = [];
            for(let i = this.initialPosition; i < this.initialPosition + 4 ; i++ ){
                i >= this.posts.length ? '' : nuevoArreglo.push(this.posts[i]);
            }
            this.postTrunks = nuevoArreglo;

        }else if(event.target.label === 'Previous'){

            this.initialPosition <= 0 ? '' : this.initialPosition -= 4;
            this.lastIndexView = this.initialPosition + 4;
            var nuevoArreglo = [];
            for(let i = this.initialPosition; i < this.initialPosition + 4 ; i++ ){
                nuevoArreglo.push(this.posts[i]);
            }
            this.postTrunks = nuevoArreglo;

        }
        this.loading = false;
        console.log('Diste click al boton con el label: ', event.target.label );
    }

}