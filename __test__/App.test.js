import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '.././utils/test-utils';
import App from '.././src/app/App';


export const handlers = [
	rest.get('/api/user', (req, res, ctx) => {
		return res(ctx.json("john smith"), ctx.delay(150))
	})
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("fetch stuff", () => {
	renderWithProviders(<App/>)
	expect.screen.getByText(/no user/i).toBeInTheDocument()
})
