import { describe, test, expect } from 'vitest';
import {Logger} from "../src/logger"
import { Accion } from '../src/tupla';

const logger: Logger = Logger.getLogger()
const accion1: Accion = [1,"Inicio_Sesion",new Date(2022,5,24,0,0,0,0)]
const accion2: Accion = [1,"Inicio_Sesion",new Date(2023,5,24,0,0,0,0)]
const dateAbajo: Date = new Date(2020,1,1,0,0,0,0)
const DateArriba: Date = new Date(2024,1,1,0,0,0,0)
describe("Test de Logger", ()=> {
  test("Creacción de logger", ()=> {
    expect(Logger.getLogger())
  })
  test("Comprobar que es la misma instancia", ()=> {
    expect(logger === Logger.getLogger())
  })
  test("Creamos dos logger y debe dar lo mismo", () => {
    expect(Logger.getLogger() === Logger.getLogger()).toEqual(true)
  })
  test("Sin acciones en logger", ()=> {
    expect(logger.getAccionByUser(1)).toEqual([])
  })
  test("Añadimos accion y comprobamos que se añada", ()=> {
    expect(logger.addAccion(accion1)).toEqual(accion1)
    expect(logger.getAccionByUser(1)).toEqual([accion1])
  })
  test("Encontrar acciones por usuarios", ()=> {
    expect(logger.addAccion(accion2)).toEqual(accion2)
    expect(logger.getAccionByUser(1)).toEqual([accion1, accion2])
  })
  test("Encontar acciones entre fechas", ()=> {
    expect(logger.getAccionesByTiempo(dateAbajo,DateArriba)).toEqual([accion1,accion2])
  })
  test("Encontrar por accion del sistema", ()=> {
    expect(logger.getAccionByAccion("Inicio_Sesion")).toEqual([accion1,accion2])
  })
})