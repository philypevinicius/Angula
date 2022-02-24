import { Component, OnInit } from "@angular/core";
import { course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'Janeiro, 4, 2022'
            },

            {
                id: 1,
                name: 'angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'Fevereiro, 24, 2022'
            }
        ]
    }
    
}