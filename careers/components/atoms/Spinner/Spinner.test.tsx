import { render } from '@testing-library/react'
import { Spinner } from '.'

describe('As Spinner component', () => {
    it('renders without crash', () => {
        const { container } = render(<Spinner />)

        // eslint-disable-next-line
        const spinner = container.querySelector('.spinner')
        expect(spinner).toBeInTheDocument()
    })
})
