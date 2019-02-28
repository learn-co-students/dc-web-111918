import React from "react";
import {shallow} from "enzyme";
import Band from "./Band";


let mockProps = {
    id: 1,
    name: "wrm up band",
    deleteBand: jest.fn()
}
let wrapper = shallow(<Band {...mockProps} />);


describe("< Band />", () =>{
    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("deletes band onClick", () => {
        wrapper.find("button").simulate("click");
        expect(mockProps.deleteBand).toBeCalledWith(mockProps.id)
    })
});