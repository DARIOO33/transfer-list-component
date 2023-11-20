import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([1, 2, 3, 4])
  const [selectedItems, setSelectedItems] = useState([])
  const [list2, setList2] = useState([])
  function addToSelectedItems(e) {
    if (selectedItems.includes(e)) {
      const updatedList = selectedItems.filter(item => item != e);
      setSelectedItems(updatedList)
    }
    else {
      setSelectedItems(prev => ([...prev, e]))
    }
  }




  function moveElement() {
    var array = selectedItems
    selectedItems.forEach((e => {
      if (list2.includes(e)) {
        const updatedList = array.filter(item => item != e);
        array = updatedList

      }
    }))

    if (array.length == 0) return
    const updatedList = list.filter(item => !array.includes(item));
    array.forEach(element => {
      setList2(prev => ([...prev, element]))
    });
    setList(updatedList);
    setSelectedItems([])
  }




  function moveElementBack() {
    var array = selectedItems
    selectedItems.forEach((e => {
      if (list.includes(e)) {
        const updatedList = array.filter(item => item != e);

        array = updatedList

      }
    }))
    if (array.length == 0) return
    array.forEach(element => {
      setList(prev => ([...prev, element]))
    });
    const updatedList = list2.filter(item => !array.includes(item));
    setList2(updatedList)
    setSelectedItems([])
  }
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems])



  return (
    <div className='flex'>
      <div className='list'>
        {list.map((x) => (

          <p key={x}>
            <input
              type="checkbox"
              onChange={() => addToSelectedItems(x)}
            />
            {x}
          </p>

        ))}

      </div>

      <div className='buttons'>
        <p>

          <button onClick={() => moveElement()}>
            {">"}
          </button>
        </p>
        <p>

          <button onClick={() => moveElementBack()}>
            {"<"}
          </button>
        </p>
      </div>

      <div className='list'>
        {list2.map((x) => (

          <p key={x}>
            <input
              type="checkbox"
              onChange={() => addToSelectedItems(x)}
            />
            {x}
          </p>

        ))}
      </div>

    </div >
  )
}

export default App
