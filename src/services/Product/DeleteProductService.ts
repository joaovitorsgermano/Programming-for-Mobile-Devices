interface IProductDelete {
    id: string;
}

class DeleteProductService {
    async execute({ id }: IProductDelete) {

        const product = { message: "Registro excluído com sucesso!" }

        return product;

    }

}

export { DeleteProductService };