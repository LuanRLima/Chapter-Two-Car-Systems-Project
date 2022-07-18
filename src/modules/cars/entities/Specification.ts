import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('specifications')
class Specification {
    @PrimaryGeneratedColumn('uuid')
    id?: string
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    createed_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }

    }
}

export { Specification };