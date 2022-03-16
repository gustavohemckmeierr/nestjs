import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courses;
    findAll(): Course[];
    findOne(id: string): Course;
    create(createCourseDto: any): void;
    update(id: string, updateCourseDto: any): void;
    remove(id: string): void;
}
