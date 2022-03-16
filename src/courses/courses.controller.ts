import { Body, Controller, Get, Res, HttpCode, HttpStatus, Param, Post, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}
    
    @Get()
        findAll(@Res() response) {
            return response.status(200).send('Listagem de cursos');
        }

    @Get(':id')
        findOne(@Param('id') id: string) {
            return `Curso ${id}`;
        }  

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body()body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body()body){
        return `Atualização do Curso #${id}`
    }

    @Delete(':id')
    remove(@Param('id')id: string) {
        return `Exclusao do Curso #${id}`;
    }

}
