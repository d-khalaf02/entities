import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'
import { BookingBuilder } from '../../utils/builders/BookingBuilder'
import type { IService } from '../interfaces/IServices'

export function createBookingInstance(
    id: number,
    services: IService[],
    checkInDate: Date,
    checkOutDate: Date
){
    const bookingBuilder = container.get<BookingBuilder>(TYPES.BookingBuilder)

    return bookingBuilder
        .setId(id)
        .setServices(services)
        .setCheckInDate(checkInDate)
        .setCheckOutDate(checkOutDate)
        .build()
}