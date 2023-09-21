export class Filme{
    id: number
    nomePt: string
    nomeOriginal: string
    generos: string[]
    sinopse: string
    posterUrl: string
    videoUrl: string
    anoLancamento: string
    diretor: string
    elenco: string[]

    constructor(id: number, nomePt: string, nomeOriginal: string, generos: string[], sinopse: string, posterUrl: string, videoUrl: string, anoLancamento: string, diretor: string, elenco: string[]) {
        this.id = id
        this.nomePt = nomePt
        this.nomeOriginal = nomeOriginal
        this.generos = generos
        this.sinopse = sinopse
        this.posterUrl = posterUrl
        this.videoUrl = videoUrl
        this.anoLancamento = anoLancamento
        this.diretor = diretor
        this.elenco = elenco
    }
}