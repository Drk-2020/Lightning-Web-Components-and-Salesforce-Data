import { LightningElement, track } from 'lwc';

export default class Trackexample extends LightningElement {
    // we are decrate this object through @track decorative to find latest value of this object
    @track fullName = {firstname:"" , lastname:""};

    handlechange(event){
        const field = event.target.name;
       // window.alert(field)

        if(field === 'firstname'){
            this.fullName.firstname = event.target.value;
        }
        else if(field === 'lastname'){
            this.fullName.lastname = event.target.value;
        }
    }
}