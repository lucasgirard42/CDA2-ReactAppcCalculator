import calculatorReducers from '../reducers/calculatorReducers'
import '../setUpTests';


describe('Calculator Reducers',() => {

    it('adds correctly', () => {
        let state = {
            output: 100
        };
        let action = {type:"ADD_INPUTS", output: 500};
        state = calculatorReducers(state, action);

        expect (state.output).toEqual(500);
        //Créer le expect
    });

    it('delete correctly', () => {
        let state = {
            output:100
        };
        state = calculatorReducers(state,{type:"SUBTRACT_INPUTS", output:50});

        expect (state.output).toEqual(50);

        //Créer le expect
    });

});
