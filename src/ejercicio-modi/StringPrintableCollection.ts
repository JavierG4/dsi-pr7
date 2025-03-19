import { PrintableCollectable } from "./ejercicio.js";

/**
 * Clase StringPrintableCollection que extiende de PrintableCollectable con el valor string
 */
export class StringPrintableCollection extends PrintableCollectable<string> {
  /**
   * Constructor de la clase
   * @param list - Lista de strings
   */
  constructor(protected list: string []) {
    super(list)
  }

  /**
   * Metodo print heredadao de PrintableCollectable
   * @returns Devuelve la concatenacón de las str separadas por comas
   */
  print() {
    let str_aux: string = ""
    this.list.forEach((str, indice) => {
      if (indice + 1 === this.list.length) {
        str_aux += str
      } else {
        str_aux += str + ", "
      }
    })
    return str_aux
  }
}