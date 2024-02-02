import formatCurrency from "../utils/formatCurrency"


function PriceCell({ isEditing, value, onValueChange }) {
    
    return isEditing ? (
        <td>
            <input
            type="number"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    ) : (
        <td>{formatCurrency(value)}</td>
    )
}

export default PriceCell