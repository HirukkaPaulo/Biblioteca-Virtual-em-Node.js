import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'


const LivrosEdicao = () => {  
  let livroId = useParams();

  const [livro, setLivro] = useState({
    title:'',
    pages:'',
    isbn:'',
    pb:''
  })
  
  async function editLivro(e){
      e.preventDefault();
      
      await LivrosService.updateLivro(livroId.id,livro)
      .then(()=>{
        alert('O livro foi atualizado com sucesso.')
      })
      .catch(error => {
        console.error('Erro na requisição:', error.response.status, error.response.data);    
      });
    }  

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form onSubmit={(e) => editLivro(e)} id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input type="text" disabled required onChange={(event)=>{event.persist(); setLivro({...livro, id: event.target.value})}} value={livro.id }></input>
            </div>
            <div className='form-group'>
              <label>Titulo</label>
              <input type="text" required onChange={(event)=>{event.persist(); setLivro({...livro, title: event.target.value})}} value={livro.title } ></input>
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="text"  required onChange={(event)=>{event.persist(); setLivro({...livro, pages: event.target.value})}} value={livro.pages }></input>
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text"  required onChange={(event)=>{event.persist(); setLivro({...livro, pb: event.target.value})}} value={livro.pb }></input>
            </div> 
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text"  required onChange={(event)=>{event.persist(); setLivro({...livro, isbn: event.target.value})}} value={livro.isbn }></input>
            </div>
            
            <div className='form-group'>
              <button type='submit'>Atualizar Livro</button>  
            </div>                   
          </form>
          </div>        
    </div>

  </>)
  
}

export default LivrosEdicao