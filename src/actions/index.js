export const addCell =(cellList) => {
    return {
		type: "ADD_CELL",
		cellList: cellList
		
	}
}
export const addText =(phrase) => {
	return {
	type: "ADD_PHRASE",
	phrase: {phrase}
	
}
}

