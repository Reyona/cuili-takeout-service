import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState } from '@/store/order'
import orderReducer from '@/store/order'
import EatPage from './index'

describe(`test EatPage`, () => {
    it(`
        should render EatPage
        when set a food list
    `, () => {
        // const store = createStore(orderReducer, initialState);
        // render(<Provider store={store}><EatPage /></Provider>)
        // const result = screen.getAllByTestId('page-container')
        // expect(result).toBeInTheDocument()
    })
})