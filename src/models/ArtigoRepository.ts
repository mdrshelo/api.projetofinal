import fs from "fs";

export class ArtigoRepository {

    private caminho = "dados/artigo.json";

    public listar() {

        const dados = fs.readFileSync(this.caminho, "utf-8");

        return JSON.parse(dados);

    }

    public buscarPorId(id: number) {

        const artigos = this.listar();

        return artigos.find((artigo: any) => artigo.id === id);

    }

    public salvar(artigo: any) {

        const artigos = this.listar();

        artigos.push(artigo);

        fs.writeFileSync(this.caminho, JSON.stringify(artigos, null, 2));

    }

    public editar(id: number, novoArtigo: any) {

        const artigos = this.listar();

        const indice = artigos.findIndex((artigo: any) => artigo.id === id);

        if (indice >= 0) {

            artigos[indice] = novoArtigo;

            fs.writeFileSync(this.caminho, JSON.stringify(artigos, null, 2));

        }

    }

    public deletar(id: number) {

        const artigos = this.listar();

        const novaLista = artigos.filter((artigo: any) => artigo.id !== id);

        fs.writeFileSync(this.caminho, JSON.stringify(novaLista, null, 2));

    }

}