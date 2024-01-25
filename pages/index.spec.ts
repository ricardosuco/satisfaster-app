import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import index from './index.vue'

describe('Index component', () => {
    const drink = {
        id: 1,
        name: 'Coca Cola',
        instructions: 'Mix it all together',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg',
        category: 'Ordinary Drink'
    }
    const indexMount = (options?: any) => {
        const wrapper = mount(index, {
            global: {
                plugins: [Quasar],
                stubs: {
                    DrinkCard: true
                }
            },
            ...options
        })
        return wrapper
    }
    it('Should component to be defined', async () => {
        const wrapper = indexMount()
        expect(wrapper.vm).toBeDefined()
    })

    it('Should show 5x DrinkCard', async () => {
        const drinks = []
        for (let i = 0; i < 5; i++) {
            drinks.push({ ...drink, id: i })
        }
        const wrapper = indexMount({ props: { drinks } })
        const cards = wrapper.findAllComponents({ name: 'DrinkCard' })

        expect(cards.length).toBe(5)
    })

    it('Should not show DrinkCard when no drinks are passed', async () => {
        const wrapper = indexMount()
        const cards = wrapper.findAllComponents({ name: 'DrinkCard' })

        expect(cards.length).toBe(0)
    })

    it('Should show "Nenhum drink encontrado" when no drinks are passed', async () => {
        const wrapper = indexMount({ props: { drinks: [], noDrinks: true } })
        const foundEl = wrapper.find('[data-testid="no-drinks"]')
        expect(foundEl.text()).toContain('Nenhum drink encontrado')
    })
})
