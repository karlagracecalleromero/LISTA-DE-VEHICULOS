export interface Vehiculo {
  codigo: String;
  marca?:  String;
  color?: String;
  modelo?: String;
  kilometraje?:number ;
  precio?: number;
  foto?: String | null;
  anio?:number;
  calificacion?: any;

}
