// crear las clases Edificio, Piso y Departamento aquí
class Departamento{
    name: string;
    constructor(name:string){
        this.name = name
    }
    getName(){
        return this.name;
    }
}

class Piso{
    floor:string;
    deptos: Departamento[] = [];
    constructor(floor:string){
        this.floor = floor;
        this.deptos = [];
    }
    pushDepartamentos(name: Departamento){
        this.deptos.push(name);
    }
    getDepartamentos():Departamento[]{
        return this.deptos;
    }
}


class Edificio{
    pisos: Piso[];
    constructor(pisos:Piso[]){
        this.pisos = pisos;
    }
    addDepartamentoToPiso(floorName:string, depto:Departamento){
        const searchedDepto = this.pisos.find((p) => {p.floor == floorName});
        return searchedDepto.pushDepartamentos(depto);
    }
    getDepartamentosByPiso(floorName:string):Departamento[]{
        const searchDepto = this.pisos.find((p) => {p.floor == floorName});
        return searchDepto.getDepartamentos();
    }
}


// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();