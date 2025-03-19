import { PrintableCollectable } from "./ejercicio.js"

/**
 * Clase NumericPrintableCollection que exttiende de la classe generica PrintableCollectable con el valor de number
 */
export class NumericPrintableCollection extends PrintableCollectable<number> {
  /**
   * 
   * @param list - Lista de numeros
   */
  constructor(protected list: number[]) {
    super(list)
  }

  /**
   * Metodo print
   * @returns devuelve una string de todos los numeros separados por comas
   */
  print() {
    let str:string = ""
    this.list.forEach((numero, indice) => {
      if (indice + 1 === this.list.length) {
        str += numero
      } else {
        str += numero + ", "
      }
    })
    return str
  }
}