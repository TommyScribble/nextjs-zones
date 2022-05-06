/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter(props: {
    route: string
    pathname: string
    query: string
    asPath: string
}) {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    useRouter.mockImplementationOnce(() => ({
        route: props.route,
        pathname: props.pathname,
        query: props.query,
        asPath: props.asPath,
    }))
}

/**
 * addTestId
 * Add test ids DOM elements to help with finding them only in development envrironments, removes them in production
 */
export function addTestId(id: string) {
    if (process.env.NODE_ENV === 'production') return
    return id
}
