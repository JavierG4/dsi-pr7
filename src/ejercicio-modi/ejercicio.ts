import { Collectable } from "./collectable.js"
import { Printable } from "./printable.js"

/**
 * Clase abstracta generica PrintableCollection que implementa las dos interzaces printable y collectable
 */
export abstract class PrintableCollectable<T> implements Collectable<T>, Printable {
  /**
   * Consstructor de la clase
   * @param list - Lista de objetos
   */
  constructor(protected list:T[]) {}

  /**
   * Añade un T
   * @param item - El item t es añadido
   */
  addItem(item : T) {
    this.list.push(item)
  }
  /**
   *  Funcion que obtiene un T según un indice
   * @param numero - Indice
   */ 
  getItem(iterador:number) {
    return this.list[iterador]
  }

  /**
   * Obtiene el size del vector
   */
  getNumberOfItems(): number {
    return this.list.length
  }

  /**
   * Pasando un valor lo elimina de la lista
   * @param item - Objeto T a eliminar
   */
  removeItem(item: T): T | undefined {
    if( this.list.length <= 0) {
      return undefined
    }
    let it:number = 0
    this.list.forEach((element,iterador) => {
      if(item === element) {
        it = iterador
      }
    })
    this.list.splice(it, 1)
    return item
  }

  /**
   * Metodo abstracto print que devuelve una string
   */
  abstract print(): string


}

