import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class AppComponent implements OnInit {
    private http;
    name: string;
    showReadmore: boolean;
    constructor(http: HttpClient);
    ngOnInit(): void;
    showMore(show: boolean): void;
}
