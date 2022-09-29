export type ReturnType = {
    innerWidth: number,
    innerHeight: number,
}

export const getWindowSize: () => ReturnType = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}