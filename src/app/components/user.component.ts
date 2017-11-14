import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: './user.component.html',
    providers:[PostsService]
})

export class UserComponent {
    TestProp: string;
    //#region members of class
    title: string = "Employee";
    name: string;
    fullName: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;
    hobbyError: string;
    employees: Employee[] = [];
    posts: Post[] = [];
    detailPost: Post;
    //#endregion

    //#region Constructor
    constructor(private postsService: PostsService) {
        this.TestProp = "RakeshTest";
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
        this.employees.push({ FirstName: "Jagdish", LastName: "Narkar", id: 2 });

        let _newEmployee = new Employee1();
        _newEmployee.FirstName = "ARjun";
        _newEmployee.LastName = "Narkar";
        _newEmployee.id = 3;
        this.employees.push(_newEmployee);

        // service here
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }
    //#endregion

    //#region Click Events
    ReadValue() {
        console.log(this.TestProp);
    }
    addEmployee(formName) {
        console.log(formName);
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

    deleteHobby(i) {
        this.hobbies.splice(i, 1);
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }
    postClicked(p){
        console.log('You clicked: ' + p.id);
        this.detailPost = p;
        console.log(this.detailPost.title);
    }
    backToListing(){
        this.detailPost = null;
    }
    //#endregion
}

//#region Interfaces
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

class Employee1 {
    FirstName: string;
    LastName: string;
    id: number;
}
interface Post{
    id:number;
    body:string;
    title: string;
    userId:number;
}
//#endregion Interfaces