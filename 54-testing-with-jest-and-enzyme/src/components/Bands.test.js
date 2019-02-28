import React from "react";
import Bands from "./Bands";
import Band from "./Band";
import { shallow } from "enzyme";

describe("Bands", () => {
    it("renders props.bands as <Band /> components", () => {
        let mockProps = {
            bands: [{ id: 1, name: "Sinatra and the Railers"}, {id: 2, name: "warm up band"}]
        }
        let wrapper = shallow(<Bands {...mockProps} />);

        expect(wrapper.find(Band).length).toBe(mockProps.bands.length)

    });
});

