import { LightningElement ,track} from 'lwc';

export default class LwcInputcmp1 extends LightningElement {
    @track name; //  declared a track decorator
    nameChange(e){ 
        console.log('====::value'+e.target.value); 
        console.log('====::name'+e.target.name); 
        // change handler method call when any change happen in the ligtning input feild to read input in lwc using  property
        if(e.target.name ==='input'){
            console.log('====::'+e.target.value);   
            this.name = e.target.value;
        }
    }

    get userName()
    {
        console.log('name==::'+this.name);
        return this.name;
    }
}