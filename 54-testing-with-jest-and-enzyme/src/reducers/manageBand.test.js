import React from "react";
import manageBand from "./manageBand";


describe('manageBand', () => {
    // this reducer is initialized with proper state
    it('initialized with proper state (upon @@INIT)', () => {
        let action = { type: "@@INIT" }
        expect(manageBand(undefined, action)).toEqual({ bands: [] })
    });

    // add band correctly
    it('adds band correctly', () => {
        let action = { type: "ADD_BAND", name: "Sinatra and the Railers"};
        let mockStateOutput = {
            bands: [
                {
                    id: 1,
                    name: "Sinatra and the Railers"
                }
            ]
        };
        expect(manageBand({ bands: []}, action)).toEqual(mockStateOutput);
    });

    // delete band correctly
    it('deletes band correctly', () => {
        let action = { type: "DELETE_BAND", id: 1};
        let mockStateOutput = { bands: [] }
        let mockStateInput = { bands: [{ id: 1, name: "Sinatra and the Railers"} ]}

        expect(manageBand(mockStateInput, action)).toEqual(mockStateOutput);
    });

});