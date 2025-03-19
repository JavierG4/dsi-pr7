import { describe, expect, test } from "vitest";

import { StringPrintableCollection} from "../src/ejercicio-modi/StringPrintableCollection"
import {NumericPrintableCollection} from "../src/ejercicio-modi/printable_number_collection"

const list_str: string[] = ["uno", "dos", "tres", "cuatro"]
const list_str2: string[] = ["juan", "manolo", "pedro", "javi"]
const list_num: number[] = [1,2,3,4]

const strCollection: StringPrintableCollection = new StringPrintableCollection(list_str)
const numberCollection: NumericPrintableCollection = new NumericPrintableCollection(list_num)

const strCollection2: StringPrintableCollection = new StringPrintableCollection(list_str2)
 

describe ("Coleccion de pruebas de StringsCollection", () => {
  test("Probar print ", ()=> {
    expect(strCollection.print()).toEqual("uno, dos, tres, cuatro")
  })

  test("Probar additem", ()=> {
    strCollection.addItem("cinco")
    expect(strCollection.print()).toEqual("uno, dos, tres, cuatro, cinco")
  })

  test("Probar getitem", ()=> {
    expect(strCollection.getItem(0)).toEqual("uno")
  })

  test("Probar getNumberOfItems", ()=> {
    expect(strCollection.getNumberOfItems()).toEqual(5)
  })

  test("Probar removeItem", ()=> {
    expect(strCollection.getNumberOfItems()).toEqual(5)
    expect(strCollection.removeItem("uno")).toEqual("uno")
    expect(strCollection.getNumberOfItems()).toEqual(4)
  })

  test("Undefind por querer borrar", ()=> {
    const und_str: StringPrintableCollection = new StringPrintableCollection([])
    expect(und_str.removeItem("e")).toBeUndefined()
  })

  test("Prueba solo expect",() => {
    expect(strCollection.addItem("seis"))
    expect(strCollection.removeItem("seis"))
  })
})

describe ("Coleccion de pruebas de NumberCollection", () => {
  test("Probar print ", ()=> {
    expect(numberCollection.print()).toEqual("1, 2, 3, 4")
  })

  test("Probar additem", ()=> {
    numberCollection.addItem(5)
    expect(numberCollection.print()).toEqual("1, 2, 3, 4, 5")
  })

  test("Probar getitem", ()=> {
    expect(numberCollection.getItem(0)).toEqual(1)
  })

  test("Probar getNumberOfItems", ()=> {
    expect(numberCollection.getNumberOfItems()).toEqual(5)
  })

  test("Probar removeItem", ()=> {
    expect(numberCollection.getNumberOfItems()).toEqual(5)
    expect(numberCollection.removeItem(1)).toEqual(1)
    expect(numberCollection.getNumberOfItems()).toEqual(4)
  })

  test("Undefind por querer borrar", ()=> {
    const und_num: NumericPrintableCollection = new NumericPrintableCollection([])
    expect(und_num.removeItem(1)).toBeUndefined()
  })

  test("Prueba expect", ()=> {
    expect(numberCollection.addItem(1))
    expect(numberCollection.removeItem(1))
  })
})

describe("String collection 2", ()=> {
  test("Probar print ", ()=> {
    expect(strCollection2.print()).toEqual("juan, manolo, pedro, javi")
  })

  test("Probar additem", ()=> {
    strCollection2.addItem("izan")
    expect(strCollection2.print()).toEqual("juan, manolo, pedro, javi, izan")
  })

  test("Probar getitem", ()=> {
    expect(strCollection2.getItem(0)).toEqual("juan")
  })

  test("Probar getNumberOfItems", ()=> {
    expect(strCollection2.getNumberOfItems()).toEqual(5)
    strCollection2.addItem("jose")
    expect(strCollection2.getNumberOfItems()).toBe(6)
  })

  test("Probar removeItem", ()=> {
    expect(strCollection2.getNumberOfItems()).toEqual(6)
    expect(strCollection2.removeItem("jose")).toEqual("jose")
    expect(strCollection2.getNumberOfItems()).toEqual(5)
  })
})