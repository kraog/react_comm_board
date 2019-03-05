const initialState = {
    cells: {
    	cellList: [],
		newCell: {
				id: '',
				id_parent: '',
				src: '',
				type: '',
				value: ''
			},
	},
	ui: {
			isCellFormHidden: true
		}
}

export default initialState;