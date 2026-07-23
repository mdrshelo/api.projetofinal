import fs from "fs";

export class AutorRepository {

    private caminho = "dados/autor.json";

    public listar() {

        const dados = fs.readFileSync(this.caminho, "utf-8");

        return JSON.parse(dados);

    }

    public buscarPorId(id: number) {

        const autores = this.listar();

        return autores.find((autor: any) => autor.id === id);

    }

    public salvar(autor: any) {

        const autores = this.listar();

        autores.push(autor);

        fs.writeFileSync(this.caminho, JSON.stringify(autores, null, 2));

    }

    public editar(id: number, novoAutor: any) {

        const autores = this.listar();

        const indice = autores.findIndex((autor: any) => autor.id === id);

        if (indice >= 0) {

            autores[indice] = novoAutor;

            fs.writeFileSync(this.caminho, JSON.stringify(autores, null, 2));

        }

    }

    public deletar(id: number) {

        const autores = this.listar();

        const novaLista = autores.filter((autor: any) => autor.id !== id);

        fs.writeFileSync(this.caminho, JSON.stringify(novaLista, null, 2));

    }

}