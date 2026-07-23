import fs from "fs";

export class CategoriaRepository {

    private caminho = "dados/categoria.json";

    public listar() {

        const dados = fs.readFileSync(this.caminho, "utf-8");

        return JSON.parse(dados);

    }

    public buscarPorId(id: number) {

        const categorias = this.listar();

        return categorias.find((categoria: any) => categoria.id === id);

    }

    public salvar(categoria: any) {

        const categorias = this.listar();

        categorias.push(categoria);

        fs.writeFileSync(this.caminho, JSON.stringify(categorias, null, 2));

    }

    public editar(id: number, novaCategoria: any) {

        const categorias = this.listar();

        const indice = categorias.findIndex((categoria: any) => categoria.id === id);

        if (indice >= 0) {

            categorias[indice] = novaCategoria;

            fs.writeFileSync(this.caminho, JSON.stringify(categorias, null, 2));

        }

    }

    public deletar(id: number) {

        const categorias = this.listar();

        const novaLista = categorias.filter((categoria: any) => categoria.id !== id);

        fs.writeFileSync(this.caminho, JSON.stringify(novaLista, null, 2));

    }

}