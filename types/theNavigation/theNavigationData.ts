export interface TheNavigationData {
    active: string,
    loaded: string,
    windowTop: number,
    menuState: string,
    links: {
        id: string,
        route: string,
        name: string
    }[]
}
