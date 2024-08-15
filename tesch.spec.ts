import { it, expect, describe } from 'vitest'
import { Product } from './Product'
import { User } from './User'

describe("user", () => {
  it("should buy a product", () => {
    const user = new User("gjf", 28, "gjfxxx@gmail.com", "shenzhen")
    const product = new Product("Book", 20, "nice book！")

    const result = user.buy(product)

    expect(result).toBe("User gjf bought Book")
  })
})

