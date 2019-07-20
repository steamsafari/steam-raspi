const ctrlWedo2 = require("../../controllers/wedo2")

describe("#controllers", function() {
  describe("#wedo2.js", function() {
    const fnMock = jest.fn()
    ctrlWedo2.py_motor = fnMock
    test("motor", async () => {
      const data = await ctrlWedo2.motor()
      expect(fnMock.mock.calls.length).toBe(1)
      expect(data).toStrictEqual({ code: 0 })
    })
  })
})
