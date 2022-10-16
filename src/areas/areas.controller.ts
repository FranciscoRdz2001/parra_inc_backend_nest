import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { Area } from 'src/entity/area.entity';
import { AreasService } from './areas.service';

@Controller('areas')
export class AreasController {

    @Inject(AreasService)
    private readonly service: AreasService;

    @Get(':id')
    public getOne(@Param('id', ParseIntPipe) id: number): Promise<Area>{
        return this.service.getArea(id)
    }

    @Get('getAll')
    getAll(){
        return {
            'id': 1,
            'nombre': 'Sistemas'
        };
    }
}
