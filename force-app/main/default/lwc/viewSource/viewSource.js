import { LightningElement,api ,track} from 'lwc';

export default class ViewSource extends LightningElement {
    @api source;
    baseUrl = 'https://github.com/M0195/Salesforce-LWC/tree/main/force-app/main/default/';
    
    get sourceURL() {
        return this.baseUrl + this.source;
    }
}