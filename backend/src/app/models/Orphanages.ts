import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('orphanages')
export default class Orphanages {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 255 })
  name: string

  @Column('decimal', { scale: 10 })
  latitude: number

  @Column('decimal', { scale: 10 })
  longitude: number

  @Column('varchar')
  about: string

  @Column('varchar')
  instructions: string

  @Column({ default: false })
  open_on_weekends: boolean
}
