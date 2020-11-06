import {
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  Column,
  Entity,
} from 'typeorm'

import Image from './Image'

@Entity('orphanages')
export default class Orphanage {
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

  @Column('varchar')
  opening_hours: string

  @Column({ default: false })
  open_on_weekends: boolean

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}
