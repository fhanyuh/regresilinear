
const Store = {
    state: {
        totalRow: 4,
		valuesX: [],
		valuesY: [],
        cX : [],
        cY : [],
        cX2: [],
        cY2: [],
        cXY: [],
		convertedXY: [],
		clicked: false,
		sumX: 0,
		sumY: 0,
		sumX2: 0,
		sumY2: 0,
		sumXY: 0,
		b: 0,
		b_1: 0,
		b_2: 0,
		b_3: 0,
		penyebut_1: 0,
		penyebut_2: 0,
		penyebut_3: 0,
		deltaY: 0,
		deltaY2: 0,
		deltaY2_1: 0,
		deltaY2_2: 0,
		deltaY2_3: 0,
		deltaY2_4: 0,
		deltaY2_5: 0,
		deltaY2_6: 0,
		deltaB_1: 0,
		deltaB_2: 0,
		deltaB: 0,
		tingkatKetelitian: 0,
		tingkatKetelitian_1: 0,
		pembulatan: true,
		belakangDesimal: 10000000,
    },
    action: {
		resetHandler(state){
			sumX = 0,
		sumY = 0,
		sumX2 = 0,
		sumY2 = 0,
		sumXY = 0,
		b = 0,
		b_1 = 0,
		b_2 = 0,
		b_3 = 0,
		penyebut_1 = 0,
		penyebut_2 = 0,
		penyebut_3 = 0,
		deltaY = 0,
		deltaY2 = 0,
		deltaY2_1 = 0,
		deltaY2_2 = 0,
		deltaY2_3 = 0,
		deltaY2_4 = 0,
		deltaY2_5 = 0,
		deltaY2_6 = 0,
		deltaB_1 = 0,
		deltaB_2 = 0,
		deltaB = 0,
		tingkatKetelitian = 0,
		tingkatKetelitian_1 = 0,
		pembulatan = true,
		belakangDesimal = 10000000
		},
        calculationHandler(state) {
			//Eksperimen
			Store.state.penyebut_1 = Math.round((Store.state.totalRow * Store.state.sumX2) * Store.state.belakangDesimal) /Store.state.belakangDesimal,
			Store.state.penyebut_2 = Math.round((Store.state.sumX * Store.state.sumX) * Store.state.belakangDesimal)/Store.state.belakangDesimal
			Store.state.penyebut_3 = Math.round((Store.state.penyebut_1 - Store.state.penyebut_2) * Store.state.belakangDesimal)/Store.state.belakangDesimal
			Store.state.b_1 = Math.round((Store.state.totalRow * Store.state.sumXY)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.b_2 = Math.round((Store.state.sumX * Store.state.sumY)* Store.state.belakangDesimal ) / Store.state.belakangDesimal,
			Store.state.b_3 = Math.round((Store.state.b_1 - Store.state.b_2) * Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.b = Math.round((Store.state.b_3 / Store.state.penyebut_3) * Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2_1 = Math.round((Store.state.sumX2 * Store.state.sumY * Store.state.sumY) * Store.state.belakangDesimal ) / Store.state.belakangDesimal,
			Store.state.deltaY2_2 = Math.round((2 * Store.state.sumX * Store.state.sumY * Store.state.sumXY)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2_3 = Math.round((Store.state.totalRow * Store.state.sumXY * Store.state.sumXY)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2_4 = Math.round((Store.state.deltaY2_1 - Store.state.deltaY2_2 + Store.state.deltaY2_3)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2_5 = Math.round((Store.state.deltaY2_4 / Store.state.penyebut_3)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2_6 = Math.round((Store.state.sumY2 - Store.state.deltaY2_5)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY2 = Math.round(((1/(Store.state.totalRow-2)) * Store.state.deltaY2_6)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaY = Math.sqrt(Store.state.deltaY2),
			Store.state.deltaB_1 = Math.round(((Store.state.totalRow) / Store.state.penyebut_3)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaB_2 = Math.round((Math.sqrt(Store.state.deltaB_1))*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.deltaB = Math.round((Store.state.deltaY * Store.state.deltaB_2)*Store.state.belakangDesimal)/Store.state.belakangDesimal,
			Store.state.tingkatKetelitian_1 = Math.round((1-(Store.state.deltaB/Store.state.b))*Store.state.belakangDesimal)/Store.state.belakangDesimal
			Store.state.tingkatKetelitian = Store.state.tingkatKetelitian_1 * 100
			Store.state.clicked = true
		},
        getters: {
            totalRow: (state) => {
                return Store.state.totalRow
            },
            values: (state) => {
                return Store.state.values
            },
        },
    } 
}
export default Store