let TEST_DATA = [
    { id: 0, candyName: "Skittles", qty: 1, price: 3},
    { id: 1, candyName: "Sour Punch Straws", qty: 1, price: 4},
    { id: 2, candyName: "Starburst", qty: 1, price: 2},
    { id: 3, candyName: "Hershey's w/ Almonds", qty: 1, price: 1},
    { id: 4, candyName: "Airheads Extremes", qty: 1, price: 5},
    ];

    let globalId = 5;

    const handlerFunctions = {
        getInvoices: (req, res) => {
            res.send({
                message: "All invoices from TEST_DATA",
                invoices: TEST_DATA
            })
        },

        addInvoice: (req, res) => {
            const { candyName } = req.body
            const newInvoice = {
                id: globalId,
                candyName: candyName,
                price: 0,
                qty: 0,
            }
            TEST_DATA.push(newInvoice)
            globalId++
            res.send({
                message: "New invoice added to TEST_DATA",
                newInvoice: newInvoice,
            })
        },

        deleteInvoice: (req, res) => {
            const { id } = req.params
            TEST_DATA = TEST_DATA.filter((invoice) => {
                return invoice.id !== +id
            })

            res.send({
                message: "I tried to delete this invoice",
                status: true,
            })
        },

        updateInvoice: (req, res) => {
            const { id } = req.params
            const { price, qty, candyName } = req.body
            const index = TEST_DATA.findIndex((invoice) => {
                return invoice.id === +id
            })
            const invoiceToUpdate = TEST_DATA[index]
            invoiceToUpdate.candyName = candyName
            invoiceToUpdate.price = +price
            invoiceToUpdate.qty = +qty

            res.send({
                message: "Invoice update", 
                updatedInvoice: invoiceToUpdate,
            })
        }
    }

    export default handlerFunctions