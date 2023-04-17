export type Game = {
    fullyOptimized: boolean
    genre: string
    highlightsSupported: boolean
    id: number
    publisher: string
    status: GameStatus
    steamUrl: string
    title: string
}

export enum GameStatus {
    Available = "AVAILABLE",
    Patching = "PATCHING"
}