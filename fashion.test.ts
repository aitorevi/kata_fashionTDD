import { list } from "./fashion"

describe("fashion", () => {

    // [] -> undefined
    it("list_is_empty", () => {
        const listEmpty = list[0]
        expect(undefined).toBe(listEmpty)
    })

    // [1] -> 1
    it("list_with_one_item", () => {
        const listItem = list[0]
        expect(1).toBe(listItem)
    })

})