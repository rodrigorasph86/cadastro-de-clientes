'use strict'

const openModal = () => document.getElementById('modal')
      .classList.add('active')

const closeModal = () => document.getElementById('modal')
      .classList.remove('active') 
      
 
const tempClient = {
      nome: "del tus tus tus",
      email: "juvenal@gmail.com",
      celular: "6299800000",
      cidade: "Goiania"
}

const getLocalStorage  = ()=> JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage  = (dbClient)=> localStorage.setItem("db_client", JSON.stringify(dbClient))

//READ
const readClient = ()=> getLocalStorage()

//UPDATE
const updateClient = (index, client) => {
      const dbClient = readClient()
      dbClient[index] = client
      setLocalStorage(dbClient)
  }

//DELETE
const deletClient = (index) => {
      const dbClient = readClient()
      dbClient.splice(index, 1) 
      setLocalStorage(dbClient)
}

//CREATE
const createClient = (client) => {
      const dbClient = getLocalStorage();
      dbClient.push(client);
      setLocalStorage(dbClient);
      
}

document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)

document.getElementById('modalClose')
        .addEventListener('click', closeModal)        