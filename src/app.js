import './App.css';
import { useState } from "react";
import Axios from "axios";
import 'bootstarp/dist/css/bootstarp.min.css';

function App(){
  const [nome, setNome] = useStatestate("");
  const [ idade, setIdade] = useState("");
  const[cargo, setCargo] = useState("");
  const [temposer, setTemposer] = useState();
  const [id, setId] = useState ();

  const [editar, setEditar] = useState (false);
  const [funcionariosList, setFuncionarios] = useState ([]);

  const add = () => {
  Axios.post("https://localhost:3001/create", {

    nome: nome,
    idade: idade,
    cargo: cargo,
    temposer: temposer
  }).then(() => {
    getFuncionarios();
    alert("funcionarios registrado com sucesso!!!");
    limparCampos();
  });
   
  const deleteFuncionarios = (id) => {
    Axios.delete(`http://localhost:3001/delete${id}`).then(() =>{

      getFuncionarios();
      alert("Eliminado");
      limparCampos();
    })
  }
 
   const limparCampos = () => {
    setNome("");
    setIdade(0);
    setId(0);
    setCargo("");
    setTemposer("");
    setEditar(false);
   }

   const limparFuncionarios = () => {
    setNome(val.nome);
    setIdade(val.idade);
    setId(val.id);
    setCargo(val.cargo);
    setTemposer(val.temposer);
    setEditar(true);
   }

 }

 }