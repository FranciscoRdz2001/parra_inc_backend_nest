import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from 'src/entity/area.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AreasService {

    @InjectRepository(Area)
    private readonly repository : Repository<Area>;

    public getArea(id: number): Promise<Area>{
        return this.repository.findOne({where: {id: id}});
    }
}
