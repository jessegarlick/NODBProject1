import './InvoiceTable.css';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow'
import { useState } from 'react';
import axios from 'axios'

let globalId = 5;

function MainTable({ initialData }) {
    const [currentData, setCurrentData] = useState(initialData)

    const rows = currentData.map((invoice) => {
        return (
            <TableRow   
                key={invoice.id}
                initialIsEditing={false}
                initialInvoiceData={invoice}
                deleteFunc={() => deleteRow(invoice.id)}
            />
        )
    })
    
    const addRow = async () => {
        const response = await axios.post('/invoice/add', {
            candyName: "Enter name here"
        })
        setCurrentData([...currentData, response.data.newInvoice])
    }

    const deleteRow = (id) => {
        axios.delete(`/invoice/delete/${id}`)
        .then((res) => {
            const filteredList = currentData.filter((invoice) => {
                return invoice.id !== id
            })

            setCurrentData(filteredList)
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {rows}
                </tbody>

                <tfoot>
                    <AddButton addRow={addRow} />
                </tfoot>
            </table>
        </div>
    )
}

export default MainTable