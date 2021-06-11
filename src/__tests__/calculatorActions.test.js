import { addInputs , subtractInputs, fetchRandomNumber } from '../actions/calculatorActions'
import '../setUpTests';

describe('ACTIONS - Test calculatorActions',()=>{

    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        
        expect(add.output).toEqual(50);
        //Créer le expect
    });


    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);

        expect(subtract.output).toEqual(-50);
        //Créer le expect
    });

});

