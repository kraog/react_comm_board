export const addCell =() => {
    return {
		type: "ADD_CELL",
		
	}
}

export const handleInputChange = (cellJSONlist) => {
	return {
		
		type: "HANDLE_INPUT_CHANGE",
		payload: {cellJSONlist}
	}
}

export const toggleCellForm = () => {
	return {
		type: "TOGGLE_CELL_FORM",
	}
}