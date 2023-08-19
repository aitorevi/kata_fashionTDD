// [] -> undefined

import { list } from "./fashion"

describe("fashion", () => {

    it("list_is_empty", () => {
        const listEmpty = list[0]
        expect(undefined).toBe(listEmpty)
    })

})