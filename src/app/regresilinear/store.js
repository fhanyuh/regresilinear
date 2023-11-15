import { useState } from "react"

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
		deltaB: 0,
		tingkatKetelitian: 0,
		pembulatan: true,
		belakangDesimal: 10000,
    },
    action: {
        initValues(){
            Store.state.values = []
            for (let i = 0; i < Store.state.totalRow; i++) {
                console.log(Store.state.values);
                Store.state.values = [
                    ...Store.state.values,
                    {
                        no: i + 1,
                        x: i + 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        xy: 0,
                    },
                ]
            }
        },
        calculationHandler(state) {
			state.belakangDesimal = store.state.belakangDesimal
			state.values.forEach((eachValue) => {
				eachValue.x2 = Math.round((eachValue.x * eachValue.x) * state.belakangDesimal ) / state.belakangDesimal
				eachValue.y2 = Math.round((eachValue.y * eachValue.y) * state.belakangDesimal ) / state.belakangDesimal
				eachValue.xy = Math.round((eachValue.x * eachValue.y) * state.belakangDesimal ) / state.belakangDesimal
				state.sum_x += eachValue.x
				state.sum_y += eachValue.y
				state.sum_x2 += eachValue.x2
				state.sum_y2 += eachValue.y2
				state.sum_xy += eachValue.xy
			})
			state.sum_x = Math.round((state.sum_x) * state.belakangDesimal ) / state.belakangDesimal
			state.sum_y = Math.round((state.sum_y) * state.belakangDesimal ) / state.belakangDesimal
			state.sum_x2 = Math.round((state.sum_x2) * state.belakangDesimal ) / state.belakangDesimal
			state.sum_y2 = Math.round((state.sum_y2) * state.belakangDesimal ) / state.belakangDesimal
			state.sum_xy = Math.round((state.sum_xy) * state.belakangDesimal ) / state.belakangDesimal
			//Eksperimen
			state.b_1 = Math.round((state.values.length * state.sum_xy)*state.belakangDesimal)/state.belakangDesimal,
			state.b_2 = Math.round((state.sum_x * state.sum_y)* state.belakangDesimal ) / state.belakangDesimal,
			state.b_3 = Math.round((state.b_1 - state.b_2) * state.belakangDesimal)/state.belakangDesimal
			state.penyebut_1 = Math.round((state.values.length * state.sum_x2) * state.belakangDesimal) /state.belakangDesimal,
			state.penyebut_2 = Math.round((state.sum_x * state.sum_x) * state.belakangDesimal)/state.belakangDesimal
			state.penyebut_3 = Math.round((state.penyebut_1 - state.penyebut_2) * state.belakangDesimal)/state.belakangDesimal
			state.deltaY2_1 = Math.round((state.sum_x2 * state.sum_y * state.sum_y) * state.belakangDesimal ) / state.belakangDesimal,
			state.deltaY2_2 = Math.round((2 * state.sum_x * state.sum_y * state.sum_xy)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaY2_3 = Math.round((state.values.length * state.sum_xy * state.sum_xy)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaY2_4 = Math.round((state.deltaY2_1 - state.deltaY2_2 + state.deltaY2_3)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaY2_5 = Math.round((state.deltaY2_4 / state.penyebut_3)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaY2_6 = Math.round((state.sum_y2 - state.deltaY2_5)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaB_1 = Math.round((state.values.length / state.penyebut_3)*state.belakangDesimal)/state.belakangDesimal,
			state.deltaB_2 = Math.round((Math.sqrt(state.deltaB_1))*state.belakangDesimal)/state.belakangDesimal
			if (state.pembulatan == true) {
				state.b =
					Math.round(
						((state.values.length * state.sum_xy -
							state.sum_x * state.sum_y) /
							(state.values.length * state.sum_x2 -
								state.sum_x * state.sum_x)) *
							state.belakangDesimal
					) / state.belakangDesimal
				state.deltaY =
					Math.round(
						Math.sqrt(
							Math.round(
								(1 / (state.values.length - 2)) *
									(state.sum_y2 -
										(state.sum_x2 *
											(state.sum_y * state.sum_y) -
											2 *
												state.sum_x *
												state.sum_y *
												state.sum_xy +
											state.values.length *
												state.sum_xy *
												state.sum_xy) /
											(state.values.length *
												state.sum_x2 -
												state.sum_x * state.sum_x)) *
									state.belakangDesimal
							) / state.belakangDesimal
						) * state.belakangDesimal
					) / state.belakangDesimal
				state.deltaY2 =
					Math.round(
						(1 / (state.values.length - 2)) *
							(state.sum_y2 -
								(state.sum_x2 * (state.sum_y * state.sum_y) -
									2 *
										state.sum_x *
										state.sum_y *
										state.sum_xy +
									state.values.length *
										state.sum_xy *
										state.sum_xy) /
									(state.values.length * state.sum_x2 -
										state.sum_x * state.sum_x)) *
							state.belakangDesimal
					) / state.belakangDesimal
				state.deltaB =
					Math.round(
						((state.deltaY * Math.sqrt(state.values.length)) /
							Math.sqrt(
								state.values.length * state.sum_x2 -
									state.sum_x * state.sum_x
							)) *
							state.belakangDesimal
					) / state.belakangDesimal
				state.tingkatKetelitian =
					Math.round(
						(1 - state.deltaB / state.b) *
							100 *
							state.belakangDesimal
					) / state.belakangDesimal
			} else {
				state.b =
					(state.values.length * state.sum_xy -
						state.sum_x * state.sum_y) /
					(state.values.length * state.sum_x2 -
						state.sum_x * state.sum_x)
				state.deltaY = Math.sqrt(
					(1 / (state.values.length - 2)) *
						(state.sum_y2 -
							(state.sum_x2 * (state.sum_y * state.sum_y) -
								2 * state.sum_x * state.sum_y * state.sum_xy +
								state.values.length *
									state.sum_xy *
									state.sum_xy) /
								(state.values.length * state.sum_x2 -
									state.sum_x * state.sum_x))
				)
				state.deltaY2 =
					(1 / (state.values.length - 2)) *
					(state.sum_y2 -
						(state.sum_x2 * (state.sum_y * state.sum_y) -
							2 * state.sum_x * state.sum_y * state.sum_xy +
							state.values.length * state.sum_xy * state.sum_xy) /
							(state.values.length * state.sum_x2 -
								state.sum_x * state.sum_x))

				state.deltaB =
					(state.deltaY * Math.sqrt(state.values.length)) /
					Math.sqrt(
						state.values.length * state.sum_x2 -
							state.sum_x * state.sum_x
					)
				state.tingkatKetelitian = (1 - state.deltaB / state.b) * 100
			}

			state.clicked = true
			console.log(state)
		},
        getters: {
            totalRow: (state) => {
                return state.totalRow
            },
            values: (state) => {
                return state.values
            },
        },
    } 
}
export default Store