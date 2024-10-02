import 'reflect-metadata'
import { describe, expect, test } from 'vitest'
import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'
import { Property } from './Property'

const propertyFaker = container.get<Property>(TYPES.PropertyFaker)

describe('Property', () => {
    test('testing Property Class ', () => {
        // Arrange
        const sut = new Property(
            propertyFaker.id,
            propertyFaker.name,
            propertyFaker.description,
            propertyFaker.address,
            propertyFaker.aminities,
            propertyFaker.owner,
            propertyFaker.propertyManager,
        )

        // Assert
        expect(sut).toHaveProperty('id')
        expect(sut).toHaveProperty('name')
        expect(sut).toHaveProperty('description')
        expect(sut).toHaveProperty('address')
        expect(sut.address).toHaveProperty('street')
        expect(sut.address).toHaveProperty('zip')
        expect(sut.address).toHaveProperty('city')
        expect(sut).toHaveProperty('owner')
        expect(sut).toHaveProperty('propertyManager')
    })
})
