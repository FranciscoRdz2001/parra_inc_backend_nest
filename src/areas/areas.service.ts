import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from 'src/entity/area.entity';
import { Repository } from 'typeorm';
import { CreateAreaDTO } from './dto/area.dto';


@Injectable()
export class AreasService {

    @InjectRepository(Area)
    private readonly repository : Repository<Area>;

    async getOne(id: number): Promise<Area>{
        return await this.repository.findOne({where: {id: id}});
    }

    async getAll(): Promise<Area[]>{
        return await this.repository.find();
    }

    async delete(area: Area): Promise<void>{
        let res = await this.repository.delete(area);
    }

    async create(area: Area): Promise<Area>{
        return await this.repository.save(area);
    }

    async update(oldArea: Area, newArea: CreateAreaDTO): Promise<Area>{

        oldArea.name = newArea.name;
        oldArea.description = newArea.description;
        await this.repository.update(oldArea.id, oldArea);
        return oldArea;
    }
}
