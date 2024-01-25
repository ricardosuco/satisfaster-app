import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import Header from './Header.vue'

describe('Header component', () => {
    const headerMount = () => {
        const wrapper = mount(Header, {
            global: {
                plugins: [Quasar]
            }
        })
        return wrapper
    }
    it('Should component to be defined', () => {
        const wrapper = headerMount()
        expect(wrapper.vm).toBeDefined()
    })
    it('Should emit event when click on button', async () => {
        const wrapper = headerMount()
        const button = wrapper.find('[data-testid="search-btn"]')
        await button.trigger('click')
        expect(wrapper.emitted().search).toBeTruthy()
        expect(wrapper.emitted().search[0][0]).toHaveProperty('name')
        expect(wrapper.emitted().search[0][0]).toHaveProperty('category')
    })
    it('Should emit event when press key enter', async () => {
        const wrapper = headerMount()
        const input = wrapper.find('[data-testid="search-input"]')
        await input.setValue('test')
        await input.trigger('keydown.enter')
        expect(wrapper.emitted().search).toBeTruthy()
        expect(wrapper.emitted().search[0][0]).toHaveProperty('name')
        expect(wrapper.emitted().search[0][0]).toHaveProperty('category')
        expect(wrapper.emitted().search[0][0].name).toBe('test')
        expect(wrapper.emitted().search[0][0].category).toBe('')
    })

    it.todo('Should emit event when click on dropdown button item', async () => {
        const wrapper = headerMount()
        const dropDownBtn = wrapper.find('[data-testid="dropdown-btn"]')
        await dropDownBtn.trigger('click')
        await flushPromises()
        const button = wrapper.find('[data-testid="item-btn"]')
        await button.trigger('click')
        expect(wrapper.emitted().search).toBeTruthy()
        expect(wrapper.emitted().search[0][0]).toHaveProperty('name')
        expect(wrapper.emitted().search[0][0]).toHaveProperty('category')
        expect(wrapper.emitted().search[0][0].name).toBe('')
    })
})
