import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(response: any): any;
    findOne(id: string): string;
    create(body: any): any;
    update(id: string, body: any): string;
    remove(id: string): string;
}
