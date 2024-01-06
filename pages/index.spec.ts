import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import index from './index.vue'


describe('Index component', () => {
    const indexMount = () => {
        const wrapper = mount(index, {
            global: {
                plugins: [Quasar]
            },
        })
        return wrapper
    }
    it('Should component to be defined', async () => {
        const wrapper = indexMount()
        expect(wrapper.vm).toBeDefined()

    })
})
