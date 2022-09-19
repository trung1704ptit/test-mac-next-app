export const pageErrorHandler = (e, page) => {
    return {
        redirect: {
            destination: '/error',
            permanent: false
        },
        props:{},
    }
}