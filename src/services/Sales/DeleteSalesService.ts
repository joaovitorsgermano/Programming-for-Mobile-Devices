interface ISalesDelete {
    id: string;
}

class DeleteSalesService {
    async execute({ id }: ISalesDelete) {

        const sales = { message: "Registro excluído com sucesso!" }

        return sales;

    }

}

export { DeleteSalesService };