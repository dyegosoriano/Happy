import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  path: string
}
