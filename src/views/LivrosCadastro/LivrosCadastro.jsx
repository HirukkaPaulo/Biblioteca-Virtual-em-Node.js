import {useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'

const LivrosCadastro = () => {
  
  const [livro, setLivro] = useState({
    title:'',
    pages:'',
    isbn: '',
    pb: ''
  })

  async function createLivro(e){
    e.preventDefault();
    
    await LivrosService.createLivro(livro)
    .then(()=>{
      alert('O livro foi criado com sucesso.')
    })
    .catch(error => {
      console.error('Erro na requisição:', error.response.status, error.response.data);    
    });
    console.log(livro)
  } 


  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>          
          <form onSubmit={(e) => createLivro(e)} id="formulario">
          <div className='form-group'>
            <label>Titulo</label>
            <input type="text" id='titulo' required onChange={(event)=>{ setLivro({...livro, title: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>Número de Páginas</label>
            <input type="text" id='num' required onChange={(event)=>{ setLivro({...livro, pages: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>ISBN</label>
            <input type="text" id='isbn' required onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>Editora</label>
            <input type="text" id='editora' required onChange={(event)=>{ setLivro({...livro, pb: event.target.value})}}></input>
          </div> 
          <div className='form-group'>
            <button type='submit'>Cadastrar Livro</button>  
          </div>         
          </form>
        </div>
    </div>
  </>)
  
}

export default LivrosCadastro