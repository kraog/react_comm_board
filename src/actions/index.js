export const addCell =(cellList) => {
    return {
		type: "ADD_CELL",
		cellList
	}
}
export const addText =(phrase) => {
	return {
	type: "ADD_PHRASE",
	phrase
	}
}
export const clearText =() => {
	return {
	type: "CLEAR_PHRASE"	
	}
}




