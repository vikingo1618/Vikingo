import { Component, OnInit, OnDestroy, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit, OnDestroy {

    @Output() onSearchUser = new EventEmitter<string>();
    userName: string;
    constructor(){

    }

    ngOnInit(): void {
       
    }
    ngOnDestroy() {
        
    }

    onSearchClick(){
        this.onSearchUser.emit(this.userName);
    }
}