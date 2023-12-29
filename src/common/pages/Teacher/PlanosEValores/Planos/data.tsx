interface Plano {
  nome: string;
  id: number;
  type: "particular" | "grupo" | "conjunto";
  investimento: number;
  quantidadeParticular: number | false;
  duracaoParticular: string | false;
  quantidadeGrupo: number | false;
  duracaoGrupo: string | false;
  ciclo: string;
}

const data: Plano[] = [
  {
    nome: "Particular Básico",
    id: 1,
    type: "particular",
    investimento: 240,
    quantidadeParticular: 1,
    duracaoParticular: "1 hora",
    quantidadeGrupo: false,
    duracaoGrupo: false,
    ciclo: "2 semanas",
  },
  {
    nome: "Particular Avançado",
    id: 2,
    type: "particular",
    investimento: 300,
    quantidadeParticular: 2,
    duracaoParticular: "40 minutos",
    quantidadeGrupo: false,
    duracaoGrupo: false,
    ciclo: "1 semana",
  },
  {
    nome: "Grupo",
    id: 3,
    type: "grupo",
    investimento: 150,
    quantidadeParticular: false,
    duracaoParticular: false,
    quantidadeGrupo: 3,
    duracaoGrupo: "20 a 40 minutos",
    ciclo: "1 semana",
  },
  {
    nome: "Conjunto Básico",
    id: 4,
    type: "conjunto",
    investimento: 350,
    quantidadeParticular: 1,
    duracaoParticular: "1 hora",
    quantidadeGrupo: 3,
    duracaoGrupo: "20 a 40 minutos",
    ciclo: "1 semana",
  },
  {
    nome: "Conjunto Intensivo",
    id: 5,
    type: "conjunto",
    investimento: 600,
    quantidadeParticular: 2,
    duracaoParticular: "40 minutos",
    quantidadeGrupo: 3,
    duracaoGrupo: "20 a 40 minutos",
    ciclo: "2 a 5 dias",
  },
];

export default data;
