import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Persons from './components/Persons/Persons';
import { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';


function App() {
  const [persons, setPersons] = useState([])
  const [userInfo, setUserInfo] = useState([])

  const handleUserInfo = (user) => {
    const newUser = [...userInfo, user]
    setUserInfo(newUser)

  }

  useEffect(() => {
    fetch('fakeData.JSON')
      .then(res => res.json())
      .then(data => setPersons(data));
  }, [])
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="container body">
        <div className="row ">
          <div className="col-md-9 left-side ">
            <div className="row">
              {
                persons.map((person) => (<Persons

                  key={person.id}
                  person={person}
                  handleUserInfo={handleUserInfo}


                ></Persons>))
              }
            </div>
          </div>
          <div className="col-md-3 right-side ">
            <div>
              <UserInfo
                userInfo={userInfo}
              >

              </UserInfo>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
