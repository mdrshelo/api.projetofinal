import fs from "fs";

export class ComentarioRepository {

    private caminho = "dados/comentario.json";

    public listar() {

        const dados = fs.readFileSync(this.caminho, "utf-8");

        return JSON.parse(dados);

    }

    public buscarPorId(id: number) {

        const comentarios = this.listar();

        return comentarios.find((comentario: any) => comentario.id === id);

    }

    public salvar(comentario: any) {

        const comentarios = this.listar();

        comentarios.push(comentario);

        fs.writeFileSync(this.caminho, JSON.stringify(comentarios, null, 2));

    }

    public editar(id: number, novoComentario: any) {

        const comentarios = this.listar();

        const indice = comentarios.findIndex((comentario: any) => comentario.id === id);

        if (indice >= 0) {

            comentarios[indice] = novoComentario;

            fs.writeFileSync(this.caminho, JSON.stringify(comentarios, null, 2));

        }

    }

    public deletar(id: number) {

        const comentarios = this.listar();

        const novaLista = comentarios.filter((comentario: any) => comentario.id !== id);

        fs.writeFileSync(this.caminho, JSON.stringify(novaLista, null, 2));

    }

}