import { shallowMount } from "@vue/test-utils"
import Home from "@/components/Home.vue"

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "This is raspi web home page."
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toContain(msg)
  })
})
