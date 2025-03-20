import { Accion } from "./tupla.js";

/**
 * Clase Logger que registra acciones y sigue el pátron singleton
 */
export class Logger implements Iterable<Accion> {
  /**
   * Instancia de Logger
   */
  private static Logger: Logger

  /**
   * Array de acciones
   */
  private acciones: Accion[]

  /**
   * Inicializa la clase
   */
  private constructor () {
    this.acciones = []
  }

  /**
   * Función que añade un acción
   * @param accion - Tupla que va a ser añadida
   * @returns Devuelve la tupla añadida
   */
  addAccion(accion:Accion): Accion {
    this.acciones.push(accion) 
    return accion 
  }

  [Symbol.iterator](): IterableIterator<Accion> {
    return this.acciones.values()
  }

  /**
   * Metodo que crea la instancia sino ha sido creada, además devuelve la instancia
   * @returns Devuelve la instancia
   */
  public static getLogger(): Logger {
    if (!Logger.Logger) {
      Logger.Logger = new Logger();
    }
    return Logger.Logger; 
  }

  /**
   * 
   * @param user - User del que queremos ver las acciones que ha hecho
   * @returns 
   */
  getAccionByUser(user:number) : Accion[] {
    const accionesUser: Accion[] = []
    this.acciones.forEach(accion => {
      if(accion[0] === user) {
        accionesUser.push(accion)
      }
    })
    return accionesUser
  }

  /**
   * Funcion que en basse a una accion devuelve una array de acciones que han realizado esa accion del sistema
   * @param accionsys - Accion del sistema
   * @returns Devuelve una array de acciones 
   */
  getAccionByAccion(accionsys:string):Accion[] {
    const accionesAccion: Accion[] = []
    this.acciones.forEach(accion => {
      if(accion[1] === accionsys) {
        accionesAccion.push(accion)
      }
    })
    return accionesAccion
  }

  /**
   * Funcion que le pasas dos fechas y te devuelve las acciones realizadas entre esos momentos
   * @param date1 - Objeto date para comparar
   * @param date2 - Objeto date para comparar
   * @returns Array de acciones que se han realizado entre dos momentos
   */
  getAccionesByTiempo(date1: Date, date2: Date): Accion[] {
    const accionesEnTiempo: Accion[] = [];
    this.acciones.forEach(accion => {
      const accionDate = new Date(accion[2]); 
      if (accionDate >= date1 && accionDate <= date2) {
        accionesEnTiempo.push(accion);
      }
    });
    return accionesEnTiempo;
  }

}

