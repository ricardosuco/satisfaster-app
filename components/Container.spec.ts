import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import Container from './Container.vue'

describe('Container component', () => {
    const containerMount = () => {
        const wrapper = mount(Container, {
            global: {
                plugins: [Quasar]
            },
        })
        return wrapper
    }
    it('Should component to be defined', () => {
        const wrapper = containerMount()
        expect(wrapper.vm).toBeDefined()
    })
})
