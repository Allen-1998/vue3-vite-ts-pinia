// 类型推断
export const isArray = <T>(val: T) => Array.isArray(val)

export const isObject = <T>(val: T) => typeInference(val, 'Object')

export const typeInference = <T>(val: T, type: string) =>
  Object.prototype.toString.call(val).slice(8, -1) === type

// 数组
export function lastItem<T>(arr: T[]) {
  return arr[arr.length - 1]
}

export function clone<T>(json: T): T {
  return JSON.parse(JSON.stringify(json))
}

//对象
export function isValidKey(
  object: object,
  key: string | number | symbol
): key is keyof typeof object {
  return key in object
}

export function stringify(obj: Object, prefix = '&') {
  let str = ''
  for (const key in obj) {
    if (isValidKey(obj, key)) {
      str += `${key}=${obj[key]}${prefix}`
    }
  }
  return str.slice(0, -1)
}
