/* Deﬁnir las clases necesarias para representar un
Sistema que administre un gimnasio, teniendo en
cuenta los profesores, los alumnos, las distintas
disciplinas, horarios, las cuotas, los pagos del mes.
No tomar en cuenta si hay promociones, o
descuentos en las cuotas o aumentos. */

class Profesor {
    nombre: string;
    especialidad: string;
  
    constructor(nombre: string, especialidad: string) {
      this.nombre = nombre;
      this.especialidad = especialidad;
    }
  }
  
  class Alumno {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  }
  
  class Disciplina {
    nombre: string;
    horario?: string;
    profesor: Profesor;
  
    constructor(nombre: string,profesor: Profesor, horario?: string)  {
      this.nombre = nombre;
      this.horario = horario;
      this.profesor = profesor;
    }
  }
  
  class Pago {
    mes: string;
    monto: number;
    alumno: Alumno;
  
    constructor(mes: string, monto: number, alumno: Alumno) {
      this.mes = mes;
      this.monto = monto;
      this.alumno = alumno;
    }
  }
  
  class Gimnasio {
    profesores: Profesor[];
    alumnos: Alumno[];
    disciplinas: Disciplina[];
    pagos: Pago[];
  
    constructor() {
      this.profesores = [];
      this.alumnos = [];
      this.disciplinas = [];
      this.pagos = [];
    }
  
    agregarProfesor(profesor: Profesor) {
      this.profesores.push(profesor);
    }
  
    agregarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
    }
  
    agregarDisciplina(disciplina: Disciplina) {
      this.disciplinas.push(disciplina);
    }
  
    realizarPago(alumno: Alumno, mes: string, monto: number) {
      const pago = new Pago(mes, monto, alumno);
      this.pagos.push(pago);
    }
  
    obtenerPagosAlumno(alumno: Alumno): Pago[] {
      return this.pagos.filter((pago) => pago.alumno === alumno);
    }
  }

