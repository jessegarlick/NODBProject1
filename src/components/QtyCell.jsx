import formatCurrency from "../utils/formatCurrency"

function QtyCell({ isEditing, value, onValueChange }) {

    return isEditing ? (
        <td>
            <input
            type="number"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    ) : (
        <td>{value}</td>
    )
    
}

export default QtyCell