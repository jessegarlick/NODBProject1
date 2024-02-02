import ModeButtons from "./ModeButtons";
import PriceCell from "./PriceCell";
import NameCell from "./NameCell";
import QtyCell from "./QtyCell";
import { useState } from 'react';
import axios from 'axios';
import formatCurrency from "../utils/formatCurrency.js"


function TableRow({ initialIsEditing, initialInvoiceData, deleteFunc }) {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [candyName, setCandyName] = useState(initialInvoiceData.candyName)
    const [price, setPrice] = useState(initialInvoiceData.price)
    const [qty, setQty] = useState(initialInvoiceData.qty)

    const makeEditMode = () => setEditMode(true)
    const makeNormalMode = () => {
        const bodyObj = {
            candyName,
            price,
            qty,
        }
        axios.put(`/invoice/update/${initialInvoiceData.id}`, bodyObj)
        .then((res) => {
            setEditMode(false)
        })
    }

    return (
        <tr>
            <ModeButtons
                isEditing={editMode}
                saveClick={makeNormalMode}
                editClick={makeEditMode}
                deleteFunc={deleteFunc}
            />
            <NameCell
                isEditing={editMode}
                value={candyName}
                onValueChange={setCandyName}
            />
            <PriceCell
                isEditing={editMode}
                value={price}
                onValueChange={setPrice}
            />
            <QtyCell
                isEditing={editMode}
                value={qty}
                onValueChange={setQty}
            />

            <td>{formatCurrency(price*qty)}</td>


        </tr>
    )
}

export default TableRow