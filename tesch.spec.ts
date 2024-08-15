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
  it('should', () => {
    // 单元测试 也是业务逻辑的用户之一
    // 单元测试可以驱动我们设计出更好用的程序api
    const user = new User("gjf")
    const product = new Product("Book")

    const result = user.buy(product)

    expect(result).toBe("User gjf bought Book")
  })
  it('v2 委托 工厂函数 来隐藏不需要的属性', () => {
    const user = createUser("gjf")
    const product = createProduct("Book")

    const result = user.buy(product)

    expect(result).toBe("User gjf bought Book")
  })
  it('虚拟对象的方式', () => {
    // 可读性 可维护性
    // 测试代码也需要维护
    const user = createUser("gjf")
    const product = { name: "Book" } as Product

    const result = user.buy(product)

    expect(result).toBe("User gjf bought Book")
  })
})

function createUser(name: string) {
  return new User(name, 28, "gjfxxx@gmail.com", "shenzhen")
}
function createProduct(name: string) {
  return new Product(name, 20, "nice book！")
}