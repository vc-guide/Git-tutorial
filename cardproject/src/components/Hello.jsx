import React from 'react';

const Hello = () => {
  const name =["vini", "babu", "raju"]
  return (
    <div>Hello
      <h1>Myre Idapadu</h1>
      <section>
        {name.map(n=>(
          <li>{n}</li>
        ))}
      </section>
    </div>
  )
}

export default Hello;