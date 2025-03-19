/**
 * Interfaz Genérica que implementa 4 funciones
 */
export interface Collectable<T> {
  /**
   * Añade un T
   * @param item - El item t es añadido
   */
  addItem(item:T): void,

  /**
   *  Funcion que obtiene un T según un indice
   * @param numero - Indice
   */ 
  getItem(numero:number): T, 

  /**
   * Pasando un valor lo elimina de la lista
   * @param item - Objeto T a eliminar
   */
  removeItem(item:T):T | undefined, 

  /**
   * Obtiene el size dle vector
   */
  getNumberOfItems(): number
}