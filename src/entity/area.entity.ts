import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Area{

    @PrimaryGeneratedColumn()
    public id : number;

    @Column({type: 'varchar', length: 50})
    public name : string;

    @Column({type: 'varchar', length: 100})
    public description : string;


}

