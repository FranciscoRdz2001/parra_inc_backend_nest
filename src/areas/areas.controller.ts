import { Controller, Get, Delete, Post, Put, Body, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { Area } from 'src/entity/area.entity';
import { AreasService } from './areas.service';
import { CreateAreaDTO } from './dto/area.dto';

@Controller('areas')
export class AreasController {

    @Inject(AreasService)
    private readonly areasService: AreasService;
    
    @Get('getAll')
    async getAll(): Promise<Area[]>{
        return await this.areasService.getAll();
    }

    @Delete('remove/:id')
    async deleteOne(@Param('id', ParseIntPipe) id: number){

        let area : Area = await this.areasService.getOne(id);

        if(area != null){
            await this.areasService.delete(area);
            return {
                'message': 'Removed successfully',
                'area': area 
            };
        }
        
        return {
            'message' : 'Dont exist.',
            'area': area
        };
    }

    @Post('add')
    async add(@Body() area: CreateAreaDTO){

        let newArea: Area = new Area();

        newArea.name = area.name;
        newArea.description = area.description;

        await this.areasService.create(newArea);

        return {
            'message': 'Successfully created.',
            'area': newArea
        }
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() newArea: CreateAreaDTO) {
        
        let oldArea : Area = await this.areasService.getOne(id);

        if(oldArea != null){
            let res = await this.areasService.update(
                Object.assign({}, oldArea), 
                Object.assign({}, newArea)
            )

            return {
                'message': 'Updated successfully.',
                'area': oldArea,
                'new area': res,
            };
        }
        
        return {
            'message' : 'Dont exist.',
            'area': newArea
        };
    }

    @Get('get/:id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Area>{
        return await this.areasService.getOne(id);
    }
}
