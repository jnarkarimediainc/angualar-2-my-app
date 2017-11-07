import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    title: string = "Employee";
    name: string;
    fullName: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;
    hobbyError: string;

    constructor() {
        this.name = 'Jagdish';
        this.fullName = this.name + ", Narkar";
        this.email = 'jnarkar@gmail.com';
        this.address = {
            street: '18 Ulysses St',
            city: 'Parsippany',
            state: 'NJ',
            zip: '07054'
        };
        this.hobbies = ['Sports', 'Music', 'Travel'];
        this.showHobbies = true;
    }

    addHobby(HobbyValue) {
        this.hobbyError = "";
        // get the value
        if (this.hobbies.find(x => x == HobbyValue) == undefined) {
            this.hobbies.push(HobbyValue);
        } else {
            this.hobbyError = "Hobby " + HobbyValue + " already exist in list";
        }
    }

    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }
}

// the address interfrace being used in UserComponent class to 
interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Employee {
    FirstName: string;
    LastName: string;
    id: number;
}
