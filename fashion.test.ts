describe("fashion", () => {

    // [] -> undefined
    it("list_is_empty", () => {
        const list: number[] = []
        const listEmpty: number = list[0]
        expect(undefined).toBe(listEmpty)
    })

    // [1] -> 1
    it("list_with_one_item", () => {
        const list: number[] = [1]
        const listItem: number = list[0]
        expect(1).toBe(listItem)
    })

})