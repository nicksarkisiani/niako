export interface IFilm {
    id: number
    name: string;
    img: string
    text: string
    videos: IVideo[]
}

interface IVideo {
    name: string
    link: string
    additional?: string
}