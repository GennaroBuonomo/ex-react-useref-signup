import { useState } from "react"
import './App.css'

function App() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [description, setDescription] = useState("");

  const heandleSubmit = e => {
    e.preventDefault();
    if(
      !fullName.trim() || 
      !userName.trim() || 
      !password.trim() || 
      !specialization.trim() || 
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ){
      alert("Errore: Tutti i campi sono obbligatori!");
      return;
    }
    console.log('Submit effettuato:',{
      fullName,
      userName,
      password,
      specialization,
      experienceYears,
      description,
    });
  }


  return (
    <>
    <div className="App">
      <h1>Web Developer Singup</h1>
      <form onSubmit={heandleSubmit}>
        <label>
          <p>Nome completo</p>
          <input 
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} 
          />
        </label>
        <label>
          <p>Username</p>
          <input 
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)} 
          />
        </label>
        <label>
          <p>password</p>
          <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <label>
          <p>Specializzazione</p>
          <select
           value={specialization}
           onChange={e => setSpecialization(e.target.value)} 
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input 
          type="number"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)} 
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />
        </label>
      <button type="submit">Registati</button>
      </form>
    </div>
    </>
  )
}

export default App
