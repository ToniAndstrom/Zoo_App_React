import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Card from '../components/Card';
import "./CategoryPage.css"



const CategoryPage = ({removeCard, removeLikes, addLikes, ...rest}) => {
  const {category} = useParams();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(()=> {
    setSearch("");
  },[location]);
  
    const searchHandler = (event) => {
      setSearch(event.target.value);
    };
  
  const categoryItems = rest[category];
 
  return (
    <>
    <h1>{category}</h1>
    <input type="text"
     onChange={searchHandler}
      placeholder='"Search'
      value={search} name="poop"/>

    {categoryItems.
    filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
      return(
        <div className='container'>
       <Card key = {item.name}
       name= {item.name} 
       likes={item.likes}
      removeCard={()=> removeCard(item.name, category)}
      removeLikes={()=> removeLikes(item.name, category, "remove")} 
      addLikes={()=> addLikes(item.name, category, "add")}
      />
      </div>
      );
    })}
    </>
  );
};

export default CategoryPage;